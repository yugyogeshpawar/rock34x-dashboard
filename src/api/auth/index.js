import { createResourceId } from "../../utils/create-resource-id";
import { decode, JWT_EXPIRES_IN, JWT_SECRET, sign } from "../../utils/jwt";
import { wait } from "../../utils/wait";
require('../db'); 
import User from "../models/user.model"; // Assuming you have a User model defined

class AuthApi {
  async signIn(request) {
    const { email, password } = request;

    await wait(500);

    return new Promise(async (resolve, reject) => {
      try {
        // Find the user in the database
        const user = await User.findOne({ email });

        if (!user || user.password !== password) {
          reject(new Error("Please check your email and password"));
          return;
        }

        // Create the access token
        const accessToken = sign({ userId: user.id }, JWT_SECRET, {
          expiresIn: JWT_EXPIRES_IN,
        });

        resolve({ accessToken });
      } catch (err) {
        console.error("[Auth Api]: ", err);
        reject(new Error("Internal server error"));
      }
    });
  }

  async signUp(request) {
    const { email, name, password } = request;

    await wait(1000);

    return new Promise(async (resolve, reject) => {
      try {
        // Check if a user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
          reject(new Error("User already exists"));
          return;
        }

        const newUser = new User({
          id: createResourceId(),
          avatar: undefined,
          email,
          name,
          password,
          plan: "Standard",
        });

        await newUser.save();

        const accessToken = sign({ userId: newUser.id }, JWT_SECRET, {
          expiresIn: JWT_EXPIRES_IN,
        });

        resolve({ accessToken });
      } catch (err) {
        console.error("[Auth Api]: ", err);
        reject(new Error("Internal server error"));
      }
    });
  }

  async me(request) {
    const { accessToken } = request;

    return new Promise(async (resolve, reject) => {
      try {
        // Decode access token
        const { userId } = decode(accessToken);

        // Find the user
        const user = await User.findById(userId);

        if (!user) {
          reject(new Error("Invalid authorization token"));
          return;
        }

        resolve({
          id: user.id,
          avatar: user.avatar,
          email: user.email,
          name: user.name,
          plan: user.plan,
        });
      } catch (err) {
        console.error("[Auth Api]: ", err);
        reject(new Error("Internal server error"));
      }
    });
  }
}

export const authApi = new AuthApi();
