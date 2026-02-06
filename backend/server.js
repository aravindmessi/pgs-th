import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

/* =======================
   MIDDLEWARE
======================= */
app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://your-project.vercel.app" // change later
    ],
    methods: ["POST"],
  })
);

/* =======================
   NODEMAILER SETUP
======================= */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error) => {
  if (error) {
    console.error("Nodemailer error:", error);
  } else {
    console.log("Nodemailer is ready");
  }
});

/* =======================
   CONTACT FORM ROUTE
======================= */
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  try {
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: "eraravind2003@gmail.com",
      subject: `New Contact Form - ${subject}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Contact email error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send email",
    });
  }
});

/* =======================
   DISCUSS PROJECT ROUTE
======================= */
app.post("/api/discuss", async (req, res) => {
  const { name, email, phone, projectType, message, company, budget } = req.body;

  if (!name || !email || !projectType || !message) {
    return res.status(400).json({
      success: false,
      message: "Required fields missing",
    });
  }

  try {
    await transporter.sendMail({
      from: `"Project Inquiry" <${process.env.EMAIL_USER}>`,
      to: "aravindappu935@gmail.com",
      subject: `Project Discussion - ${projectType}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
Company: ${company || "N/A"}
Budget: ${budget || "N/A"}

Message:
${message}
      `,
    });

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Discuss email error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send email",
    });
  }
});

/* =======================
   SERVER
======================= */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
