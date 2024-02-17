import User from '../models/User.js'; // Importing User model

// Create new User
export const createUser = async (req, res) => {
   const newUser = new User(req.body);

   try {
      // Saving the new User to the database
      const savedUser = await newUser.save();

      // Sending success response
      res.status(200).json({ success: true, message: 'Successfully created', data: savedUser });
   } catch (error) {
      // Sending error response if creation fails
      res.status(500).json({ success: true, message: 'Failed to create. Try again!' });
   }
};

// Update User
export const updateUser = async (req, res) => {
   const id = req.params.id;

   try {
      // Updating the User in the database
      const updatedUser = await User.findByIdAndUpdate(id, {
         $set: req.body
      }, { new: true });

      // Sending success response
      res.status(200).json({ success: true, message: 'Successfully updated', data: updatedUser });
   } catch (error) {
      // Sending error response if update fails
      res.status(500).json({ success: false, message: 'Failed to update' });
   }
};

// Delete User
export const deleteUser = async (req, res) => {
   const id = req.params.id;

   try {
      // Deleting the User from the database
      await User.findByIdAndDelete(id);

      // Sending success response
      res.status(200).json({ success: true, message: 'Successfully deleted' });
   } catch (error) {
      // Sending error response if deletion fails
      res.status(500).json({ success: false, message: 'Failed to delete' });
   }
};

// Get single User
export const getSingleUser = async (req, res) => {
   const id = req.params.id;

   try {
      // Finding the User by ID
      const user = await User.findById(id);

      // Sending success response with the found User
      res.status(200).json({ success: true, message: 'Successfully', data: user });
   } catch (error) {
      // Sending error response if User not found
      res.status(404).json({ success: false, message: 'Not Found' });
   }
};

// Get all Users
export const getAllUser = async (req, res) => {
   try {
      // Finding all Users
      const users = await User.find({});

      // Sending success response with all Users
      res.status(200).json({ success: true, message: 'Successfully', data: users });
   } catch (error) {
      // Sending error response if retrieval fails
      res.status(404).json({ success: false, message: 'Not Found' });
   }
};
