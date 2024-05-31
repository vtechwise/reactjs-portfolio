// netlify/functions/send-email.js
const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {

  const formData = new URLSearchParams(event.body);
    // Check the content type
    if (!event.headers['content-type'].includes('application/json')) {
      throw new Error('Invalid content type');
    }
    const data = JSON.parse(event.body);

    const { name, email, message } = data;
    

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "oguntayovictor65@gmail.com", // your email address
      pass: "opkb usfd dwgg mjxz", // your email password or app-specific password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // Define email options
  let mailOptions = {
    from: email,
    to: "oguntayovictor65@gmail.com", // your receiving email address
    subject: "New Appointment Booking",
    text: `You have received a new appointment booking:
    Name: ${name}
    Email: ${email}
    Message:${message}
    `,
  };

  try {
    // Send email
    const info = await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to send email" }),
    };
  }
};
