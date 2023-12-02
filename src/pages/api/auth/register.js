// Import necessary modules and dependencies
import { createResourceId } from "../../../utils/create-resource-id";
import { decode, JWT_EXPIRES_IN, JWT_SECRET, sign }  from "../../../utils/jwt";
import Startups from "../../../server/models/startups.model"; // Assuming you have a User model defined
import db from "../../../server/db";

const register = async (req, res) => {
  try {
    const { email, name, password } = req.body;

    const existingUser = await Startups.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const newUser = new Startups({
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
    res.status(200).json({ accessToken });
  } catch (err) {
    console.error("[Auth Register]: ", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default register;
