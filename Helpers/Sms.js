import nodemailer from "nodemailer";

export const SensSms = async (otp, email, user_name) => {
  const transporter = nodemailer.createTransport({
    service: "gmail", // or use any SMTP provider
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASSWORD, // Your email password or app password
    },
  });

  const mailOptions = {
    from: '"Urban" <urbancompanyemail@gmail.com>', // Company name
    to: email,
    subject: "Your OTP for Verification",
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background: #f6f9fc; color: #333;">
        <div style="max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <h2 style="color: #007bff;">Hello, ${user_name} 👋</h2>
          <p style="font-size: 16px;">Thank you for signing up at <strong>Urban</strong>!</p>
          <p style="font-size: 18px;">Your One-Time Password (OTP) is:</p>
          <h1 style="background: #007bff; color: white; padding: 10px 20px; border-radius: 6px; display: inline-block;">${otp}</h1>
          <p style="margin-top: 20px;">Please enter this OTP to verify your account. This OTP is valid for the next 10 minutes.</p>
          <hr style="margin: 30px 0;">
          <p style="font-size: 14px; color: #888;">With 💙 from the Urban Team</p>
        </div>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
