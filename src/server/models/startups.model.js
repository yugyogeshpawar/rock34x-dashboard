const mongoose = require("mongoose");

const startupSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  plan: { type: String, default: "Standard" },
  walletAddress: { type: String }, // Crypto wallet address
  investedCoins: [
    {
      coinId: { type: mongoose.Schema.Types.ObjectId, ref: "CryptoCoin" },
      amount: { type: Number, default: 0 },
    },
  ],
  contributedProjects: [
    {
      projectId: { type: mongoose.Schema.Types.ObjectId, ref: "CryptoProject" },
      amountContributed: { type: Number, default: 0 },
    },
  ],
  transactions: [
    {
      type: {
        type: String,
        enum: ["Deposit", "Withdrawal", "Investment", "Contribution"],
        required: true,
      },
      amount: { type: Number, required: true },
      date: { type: Date, default: Date.now },
      description: { type: String },
    },
  ],
  kycStatus: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending",
  },
  verificationDocuments: { type: [String] },
  userRole: { type: String, enum: ["Admin", "User"], default: "User" },
  referralCode: { type: String },
  socialMediaProfiles: {
    twitter: { type: String },
    linkedin: { type: String },
    github: { type: String },
  },
  notificationPreferences: {
    email: { type: Boolean, default: true },
    sms: { type: Boolean, default: false },
  },
  address: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    postalCode: { type: String },
  },
  launchParticipation: {
    whitelisted: { type: Boolean, default: false },
    allocatedTokens: { type: Number, default: 0 },
  },
  stakingInfo: {
    stakingBalance: { type: Number, default: 0 },
    stakingRewards: { type: Number, default: 0 },
  },
  referralStats: {
    totalReferrals: { type: Number, default: 0 },
    successfulReferrals: { type: Number, default: 0 },
  },

  walletBalance: { type: Number, default: 0 }, // Balance in user's crypto wallet
  investedProjects: [
    {
      projectId: { type: mongoose.Schema.Types.ObjectId, ref: "CryptoProject" },
      investedAmount: { type: Number, default: 0 },
      investmentDate: { type: Date, default: Date.now },
    },
  ],
  favoriteCoins: [
    {
      coinId: { type: mongoose.Schema.Types.ObjectId, ref: "CryptoCoin" },
      alias: { type: String }, // User-defined alias for the favorite coin
    },
  ],

  twoFactorAuth: { type: Boolean, default: false },
  lastLogin: { type: Date },

  themePreference: { type: String, enum: ["Light", "Dark"], default: "Light" },
  languagePreference: { type: String, default: "English" },

  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],

  achievements: [
    {
      name: { type: String },
      description: { type: String },
      dateEarned: { type: Date, default: Date.now },
    },
  ],
  badges: [
    {
      name: { type: String },
      description: { type: String },
      dateEarned: { type: Date, default: Date.now },
    }, 
  ],
});

const StartupsModal = mongoose.models.Startups || mongoose.model("Startups", startupSchema);

module.exports = StartupsModal;
