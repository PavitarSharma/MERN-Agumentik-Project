import nodemailer from "nodemailer";

const sendMail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.example.com",
  port: 465,
  service: "gmail",
  secure: false,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: "Thanks mail",
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

export default sendMail;