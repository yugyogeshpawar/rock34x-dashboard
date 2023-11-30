import mongoose from "mongoose";
import { mongoDB } from '../../config';

const MONGODB_URI = mongoDB.uri;

console.log("---mongodb---", MONGODB_URI);

const connectWithRetry = () => {
  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

const checkConnection = () => {
  if (mongoose.connection.readyState === 1) {
    console.log("Connected to MongoDB");
  } else {
    console.log("Not connected to MongoDB");
  }
};

// Handle initial connection
connectWithRetry();

const db = mongoose.connection;

db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
  console.log("Retrying connection in 5 seconds...");
  setTimeout(connectWithRetry, 5000);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
  // Check the connection status once it's open
  checkConnection();
});

// Check the connection status immediately
checkConnection();

export default db;
