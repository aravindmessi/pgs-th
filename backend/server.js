import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Debug
console.log("LOADED ENV:", process.env.MONGODB_URL);

// ----------------------
// DB CONNECT (NO .then USED)
// ----------------------
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
  }
}

connectDB();


// ----------------------
// CONTACT MODEL
// ----------------------
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  subject: String,
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model("Contact", contactSchema);


// ----------------------
// POST ENDPOINT
// ----------------------
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: "Name, Email, and Message are required."
    });
  }

  try {
    const newContact = new Contact({
      name,
      email,
      phone,
      subject,
      message
    });

    await newContact.save();
    console.log(`Saved to DB: ${email}`);

    res.status(200).json({
      success: true,
      message: "Form submitted successfully"
    });
  } catch (error) {
    console.error("Error saving form:", error);
    res.status(500).json({
      success: false,
      error: "Failed to submit form"
    });
  }
});


// ----------------------
// START SERVER
// ----------------------
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
