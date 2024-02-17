import Tour from "../models/Tour.js"; // Importing Tour model
import Review from "../models/Review.js"; // Importing Review model

// Create a new review
export const createReview = async (req, res) => {
   const tourId = req.params.tourId; // Extracting tour ID from request parameters
   const newReview = new Review({ ...req.body }); // Creating a new review instance 

   try {
      // Saving the new review to the database
      const savedReview = await newReview.save();

      // After creating a new review, update the reviews array of the tour 
      await Tour.findByIdAndUpdate(tourId, {
         $push: { reviews: savedReview._id }
      });

      // Sending success response
      res.status(200).json({ success: true, message: "Review submitted", data: savedReview });
   } catch (error) {
      // Sending error response if submission fails
      res.status(500).json({ success: false, message: "Failed to submit" });
   }
};
