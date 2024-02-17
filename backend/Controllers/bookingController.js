import Booking from './../models/Booking.js'; // Importing Booking model

// Create new booking
export const createBooking = async (req, res) => {
   const newBooking = new Booking(req.body);

   try {
      // Saving the new booking to the database
      const savedBooking = await newBooking.save();

      // Sending success response
      res.status(200).json({ success: true, message: "Your tour is booked!", data: savedBooking });
   } catch (error) {
      // Sending error response if creation fails
      res.status(500).json({ success: false, message: "Internal server error!" });
   }
};

// Get single booking
export const getBooking = async (req, res) => {
   const id = req.params.id;

   try {
      // Finding the booking by ID
      const book = await Booking.findById(id);

      // Sending success response with the found booking
      res.status(200).json({ success: true, message: "Successful!", data: book });
   } catch (error) {
      // Sending error response if booking not found
      res.status(404).json({ success: false, message: "Not Found!" });
   }
};

// Get all bookings
export const getAllBooking = async (req, res) => {
   try {
      // Finding all bookings
      const books = await Booking.find();

      // Sending success response with all bookings
      res.status(200).json({ success: true, message: "Successful!", data: books });
   } catch (error) {
      // Sending error response if retrieval fails
      res.status(500).json({ success: false, message: "Internal server error!" });
   }
};
