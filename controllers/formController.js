const nodemailer = require('nodemailer');
const Contact = require('../models/Contact');
const Subscriber = require('../models/Subscriber');

// Configure the transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', // ya koi aur SMTP host
  port: 587,
  secure: false,
  auth: {
    user: 'your-email@gmail.com',       // 👈 tumhara email
    pass: 'your-app-password-here',     // 👈 app-specific password (Gmail use kar rahe ho toh 2FA hona chahiye)
  },
});

exports.sendContactForm = async (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
    const contact = await Contact.create({ name, email, subject, message });

    // Send email
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'your-email@gmail.com', // 👈 jahan pe message bhejna hai
      subject: `New Contact Form: ${subject}`,
      html: `
        <h3>New Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    res.status(201).json({ message: 'Message sent successfully', contact });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Something went wrong' });
  }
};
