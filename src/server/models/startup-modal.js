// Define your Startup modal (server/models/startups.model.js)
import mongoose from 'mongoose';

const StartupSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  phone: String,
  linkedin: String,
  kindofreferrer: String,
  referrer: String,
  nameofstartup: String,
  registerednameofstartup: String,
  websiteurl: String,
  sectorofstartup: String,
  stageofstartup: String,
  monthandyearofincorporation: String,
  companytype: String,
  cityofoperation: String,
  pleaseshareyourpitchdeck: String,
  characterstotell: String,
});

const Startups = mongoose.models.Startups || mongoose.model('Startups-new', StartupSchema);

export default Startups;
