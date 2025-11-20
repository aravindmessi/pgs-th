import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// CONTACT FORM ROUTE
app.post("/api/contact", async (req, res) => {
    const { name, email, subject, message } = req.body;

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: "aravindappu935@gmail.com",
            subject: `New Contact Form Submission - ${subject}`,
            text: `
Name: ${name}
Email: ${email}

Message:
${message}
            `
        });

        res.status(200).json({ success: true, message: "Email sent successfully" });
        console.log("Contact email sent!");
    } catch (err) {
        console.error("Email sending error:", err);
        res.status(500).json({ success: false, message: "Failed to send email" });
    }
});

// DISCUSS PROJECT ROUTE
app.post("/api/discuss", async (req, res) => {
    const { name, email, phone, projectType, message, company, budget } = req.body;

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: "aravindappu935@gmail.com",
            subject: `New Project Discussion - ${projectType}`,
            text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company}
Budget: ${budget}

Message:
${message}
            `
        });

        res.status(200).json({ success: true, message: "Email sent successfully" });
        console.log("Discuss project email sent!");
    } catch (err) {
        console.error("Email sending error:", err);
        res.status(500).json({ success: false, message: "Failed to send email" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log("Nodemailer is ready to send emails");
});
