import { decode, JWT_EXPIRES_IN, JWT_SECRET, sign } from "../../../utils/jwt";
import Investors from "../../../server/models/startups.model"; // Assuming you have a User model defined
import db from "../../../server/db";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email and password are present in the request body
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // Find the user in the database
    const user = await Investors.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ error: "Please check your email and password" });
    }

    // Create the access token
    const accessToken = sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    res.status(200).json({ accessToken });
  } catch (err) {
    console.error("[Auth Api]: ", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default login;
