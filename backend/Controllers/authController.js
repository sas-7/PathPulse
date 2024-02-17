import User from "../models/User.js"; // Importing User model
import bcrypt from 'bcryptjs'; // Importing bcrypt for password hashing
import jwt from 'jsonwebtoken'; // Importing jsonwebtoken for token generation
import nodemailer from 'nodemailer'; // Importing nodemailer for sending emails

// Function to generate random token
const generateToken = () => {
   return Math.random().toString(36).substr(2) + Date.now().toString(36);
};

// Function to send password reset email
const sendPasswordResetEmail = async (email, token) => {
   // Create Nodemailer transporter
   const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
         user: process.env.EMAIL, // Update with your email address from .env
         pass: process.env.PASSWORD // Update with your email password from .env
      },
      authMethod: 'LOGIN'
   });

   // Email content
   const mailOptions = {
      from: process.env.EMAIL, // Update with your email address from .env
      to: email,
      subject: 'Password Reset',
      html: `
            <p>You have requested a password reset. Please click the link below to reset your password:</p>
            <a href="http://localhost:3000/reset/${token}">Reset Password</a>
        `
   };

   // Send email
   try {
      await transporter.sendMail(mailOptions);
      console.log('Password reset email sent successfully.');
   } catch (error) {
      console.error('Error sending password reset email:', error);
   }
};

// user register
export const register = async (req, res) => {
   try {
      // Hashing password
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);

      const newUser = new User({
         username: req.body.username,
         email: req.body.email,
         password: hash,
         photo: req.body.photo
      });

      await newUser.save();

      res.status(200).json({ success: true, message: "Successfully created!" });
   } catch (error) {
      res.status(500).json({ success: false, message: "Failed to create! Try again." });
   }
};

// user login
export const login = async (req, res) => {
   try {
      const email = req.body.email;
      const user = await User.findOne({ email });

      // If user doesn't exist
      if (!user) {
         return res.status(404).json({ success: false, message: 'User not found!' });
      }

      // If user exists, then check the password or compare the password
      const checkCorrectPassword = await bcrypt.compare(req.body.password, user.password);

      // If password is incorrect 
      if (!checkCorrectPassword) {
         return res.status(401).json({ success: false, message: "Incorrect email or password!" });
      }

      const { password, role, ...rest } = user._doc;

      // Create JWT token
      const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, { expiresIn: "15d" });

      // Set token in the browser cookies and send the response to the client
      res.cookie('accessToken', token, {
         httpOnly: true,
         expires: token.expiresIn
      }).status(200).json({ token, data: { ...rest }, role });
   } catch (error) {
      res.status(500).json({ success: false, message: "Failed to login" });
   }
};

// Request password reset
export const requestPasswordReset = async (req, res) => {
   const { email } = req.body;

   try {
      // Check if the user exists
      const user = await User.findOne({ email });

      if (!user) {
         return res.status(404).json({ success: false, message: 'User not found.' });
      }

      // Generate and save reset token
      const resetToken = generateToken();
      user.resetToken = resetToken;
      user.resetTokenExpiration = Date.now() + 3600000; // Token expiration time: 1 hour
      await user.save();

      // Send password reset email
      await sendPasswordResetEmail(email, resetToken);

      res.status(200).json({ success: true, message: 'Password reset email sent successfully.' });
   } catch (error) {
      console.error('Error requesting password reset:', error);
      res.status(500).json({ success: false, message: 'Internal server error.' });
   }
};

// Reset password
export const resetPassword = async (req, res) => {
   const { token, newPassword } = req.body;

   try {
      // Find user by reset token and check token expiration
      const user = await User.findOne({
         resetToken: token,
         resetTokenExpiration: { $gt: Date.now() }
      });

      if (!user) {
         return res.status(404).json({ success: false, message: 'Invalid or expired token.' });
      }

      // Hash the new password
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(newPassword, salt);

      // Update user's password and reset token fields
      user.password = hash;
      user.resetToken = undefined;
      user.resetTokenExpiration = undefined;
      await user.save();

      res.status(200).json({ success: true, message: 'Password reset successfully.' });
   } catch (error) {
      console.error('Error resetting password:', error);
      res.status(500).json({ success: false, message: 'Internal server error.' });
   }
};
