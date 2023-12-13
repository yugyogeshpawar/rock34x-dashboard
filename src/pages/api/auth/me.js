import { decode, JWT_SECRET } from "../../../utils/jwt";
import Startups from "../../../server/models/startups.model"; 
import db from "../db";

const me = async (req, res) => {
  try {
    const accessToken = req.headers.authorization?.replace("Bearer ", "");

    if (!accessToken) {
      return res.status(401).json({ error: "Missing authorization token" });
    }
    const { userId } = decode(accessToken);

    const user = await Startups.findById(userId);

    if (!user) {
      return res.status(401).json({ error: "Invalid authorization token" });
    }

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
