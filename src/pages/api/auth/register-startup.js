// Import necessary modules and dependencies
import dbConnect from '../db/index'; // Assuming you have a dbConnect utility for connecting to MongoDB
import Startups from '../../../server/models/startups.model'; // Assuming you have a Startups model defined
import createResourceId from '../../../utils/create-resource-id';
import { decode, JWT_EXPIRES_IN, JWT_SECRET, sign } from '../../../utils/jwt';


export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const {
      name,
      email,
      phone,
      linkedin,
      kindofreferrer,
      referrer,
      nameofstartup,
      registerednameofstartup,
      websiteurl,
      sectorofstartup,
      stageofstartup,
      monthandyearofincorporation,
      companytype,
      cityofoperation,
      pleaseshareyourpitchdeck,
      characterstotell,
    } = req.body;

    // Perform any additional validation if needed

    // Create a new Startups document
    const newStartup = new Startups({
      id: createResourceId(),
      name,
      email,
      phone,
      linkedin,
      kindofreferrer,
      referrer,
      nameofstartup,
      registerednameofstartup,
      websiteurl,
      sectorofstartup,
      stageofstartup,
      monthandyearofincorporation,
      companytype,
      cityofoperation,
      pleaseshareyourpitchdeck,
      characterstotell,
    });

    // Save the document to the database
    await newStartup.save();

    // Generate an access token (optional)
    const accessToken = sign({ userId: newStartup.id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    // Respond with success
    res.status(200).json({ success: true, accessToken });
  } catch (err) {
    console.error('[Startup Registration API]:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}
