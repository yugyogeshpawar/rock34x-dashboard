// pages/api/auth/startups/[startupId]/index.js

import dbConnect from '../../../db';
import User from 'src/server/models/user.model';

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      // Get the startupId from the request parameters
      const { startupId } = req.query;

      try {
        // Find the user in the database based on startupId
        const user = await User.findOne({ startupId });

        // Check if the user exists
        if (!user) {
          return res.status(404).json({ success: false, error: 'User not found' });
        }

        // Respond with the user details
        res.status(200).json({ success: true, data: user });
      } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
      }
      break;
    
    default:
      res.status(405).json({ success: false, error: `Method ${method} Not Allowed` });
  }
}
