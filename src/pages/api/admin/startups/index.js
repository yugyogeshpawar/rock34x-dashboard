// pages/api/auth/startups.js

import Startups from '../../../../server/models/startups.model';
import { decode, JWT_SECRET } from '../../../../utils/jwt'; // Assuming you have a decode function

export default async function handler(req, res) {
  try {
    // Decode the access token
    // const { userId } = decode(req.headers.authorization);
    // Check if the user is an admin
    // const isAdmin = await isAdmin(userId); s

    // if (false) {
    //   return res.status(403).json({ success: false, error: 'Forbidden' });
    // }

    // Fetch all users from the User model, excluding sensitive information
    // const users = await Startups.find({ userRole: 'Investor' }, { password: 0 });

    // Respond with the user data
    // res.status(200).json({ success: true, data: users });
    const users = [{
      id: 1234,
      avatar: '/assets/avatars/avatar-anika-visser.png',
      name: 'tester',
      telegram: 'Ittern',
      discord: 'Ittern',
      email: 'adam@presail.com',
      accountEvm: '0xa190...0b6d',
      kyc: 'Icon',
      country: 'N/A',
      invested: '$24,000.00',
      average: '$8,000.00',
      deals: '3',
      otcTraders: '0',
      lastContribution: '7 days ago',
      actions: '',
    }]
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}