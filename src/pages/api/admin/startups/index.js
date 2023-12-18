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
    },
    {
      "id": 5678,
      "avatar": "/assets/avatars/avatar-john-doe-2.png",
      "name": "John Doe",
      "telegram": "JohnDoe123",
      "discord": "JohnDoe#4567",
      "email": "john.doe@example.com",
      "accountEvm": "0xb345...0x9a8c",
      "kyc": "Verified",
      "country": "USA",
      "invested": "$30,000.00",
      "average": "$10,000.00",
      "deals": "5",
      "otcTraders": "2",
      "lastContribution": "5 days ago",
      "actions": ""
    },
    {
      "id": 1011,
      "avatar": "/assets/avatars/avatar-james-anderson.png",
      "name": "James Anderson",
      "telegram": "JamesA456",
      "discord": "JamesA#1011",
      "email": "james.anderson@example.com",
      "accountEvm": "0xabc1...0x2345",
      "kyc": "Icon",
      "country": "N/A",
      "invested": "$25,000.00",
      "average": "$8,333.00",
      "deals": "3",
      "otcTraders": "0",
      "lastContribution": "6 days ago",
      "actions": ""
    },
    {
      "id": 7890,
      "avatar": "/assets/avatars/avatar-mike-smith.png",
      "name": "Mike Smith",
      "telegram": "MikeSmith456",
      "discord": "MikeSmith#7890",
      "email": "mike.smith@example.com",
      "accountEvm": "0xc123...0xdef",
      "kyc": "Verified",
      "country": "Canada",
      "invested": "$20,000.00",
      "average": "$6,666.00",
      "deals": "4",
      "otcTraders": "1",
      "lastContribution": "3 days ago",
      "actions": ""
    },
    {
      "id": 1213,
      "avatar": "/assets/avatars/avatar-emily-jones.jpeg",
      "name": "Emily Jones",
      "telegram": "EmilyJ123",
      "discord": "EmilyJ#1213",
      "email": "emily.jones@example.com",
      "accountEvm": "0x456d...0x789e",
      "kyc": "Verified",
      "country": "UK",
      "invested": "$28,000.00",
      "average": "$9,333.00",
      "deals": "6",
      "otcTraders": "3",
      "lastContribution": "4 days ago",
      "actions": ""
    },
    {
      "id": 1415,
      "avatar": "/assets/avatars/avatar-emma-brown.jpeg",
      "name": "Emma Brown",
      "telegram": "EmmaB456",
      "discord": "EmmaB#1415",
      "email": "emma.brown@example.com",
      "accountEvm": "0x789f...0xabc2",
      "kyc": "Verified",
      "country": "Australia",
      "invested": "$22,000.00",
      "average": "$7,333.00",
      "deals": "2",
      "otcTraders": "1",
      "lastContribution": "8 days ago",
      "actions": ""
    }
    ]
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}