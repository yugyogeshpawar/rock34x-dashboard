import { decode, JWT_SECRET } from "../../../utils/jwt";
import Startups from "../../../server/models/startups.model"; // Assuming you have a User model defined

const me = async (req, res) => {
  try {
    // Get the access token from the request headers
    const accessToken = req.headers.authorization?.replace("Bearer ", "");

    // Check if the access token is missing
    if (!accessToken) {
      return res.status(401).json({ error: "Missing authorization token" });
    }

    // Decode access token
    const { userId } = decode(accessToken);

    // Find the user in the database
    const user = await Startups.findById(userId);

    // Check if the user doesn't exist
    if (!user) {
      return res.status(401).json({ error: "Invalid authorization token" });
    }

    // Respond with user details
    res.status(200).json({
      id: user.id,
      avatar: '/assets/avatars/avatar-anika-visser.png',
      email: user.email,
      name: user.name,
      plan: user.plan,
    });
  } catch (err) {
    console.error("[Auth Api]: ", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default me;
