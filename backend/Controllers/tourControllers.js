import Tour from '../models/Tour.js'; // Importing Tour model

// Create new tour
export const createTour = async (req, res) => {
   const newTour = new Tour(req.body);

   try {
      // Saving the new tour to the database
      const savedTour = await newTour.save();

      // Sending success response
      res.status(200).json({ success: true, message: 'Successfully created', data: savedTour });
   } catch (error) {
      // Sending error response if creation fails
      res.status(500).json({ success: false, message: 'Failed to create. Try again!' });
   }
};

// Update tour
export const updateTour = async (req, res) => {
   const id = req.params.id;

   try {
      // Updating the tour in the database
      const updatedTour = await Tour.findByIdAndUpdate(id, {
         $set: req.body
      }, { new: true });

      // Sending success response
      res.status(200).json({ success: true, message: 'Successfully updated', data: updatedTour });
   } catch (error) {
      // Sending error response if update fails
      res.status(500).json({ success: false, message: 'Failed to update' });
   }
};

// Delete tour
export const deleteTour = async (req, res) => {
   const id = req.params.id;

   try {
      // Deleting the tour from the database
      await Tour.findByIdAndDelete(id);

      // Sending success response
      res.status(200).json({ success: true, message: 'Successfully deleted' });
   } catch (error) {
      // Sending error response if deletion fails
      res.status(500).json({ success: false, message: 'Failed to delete' });
   }
};

// Get single tour
export const getSingleTour = async (req, res) => {
   const id = req.params.id;

   try {
      // Finding the tour by ID and populating reviews
      const tour = await Tour.findById(id).populate('reviews');

      // Sending success response with the found tour
      res.status(200).json({ success: true, message: 'Successfully', data: tour });
   } catch (error) {
      // Sending error response if tour not found
      res.status(404).json({ success: false, message: 'Not Found' });
   }
};

// Get all tours
export const getAllTour = async (req, res) => {
   // For pagination
   const page = parseInt(req.query.page);

   try {
      // Finding all tours, populating reviews, implementing pagination
      const tours = await Tour.find({}).populate('reviews').skip(page * 8).limit(8);

      // Sending success response with all tours
      res.status(200).json({ success: true, count: tours.length, message: 'Successfully', data: tours });
   } catch (error) {
      // Sending error response if retrieval fails
      res.status(404).json({ success: false, message: 'Not Found' });
   }
};

// Get tour by search
export const getTourBySearch = async (req, res) => {
   const city = new RegExp(req.query.city, 'i');

   try {
      // Finding tours by city and populating reviews
      const tours = await Tour.find({ city }).populate('reviews');

      // Sending success response with matched tours
      res.status(200).json({ success: true, message: 'Successfully', data: tours });
   } catch (error) {
      // Sending error response if search fails
      res.status(404).json({ success: false, message: 'Not Found' });
   }
};

// Get featured tours
export const getFeaturedTour = async (req, res) => {
   try {
      // Finding featured tours and populating reviews
      const tours = await Tour.find({ featured: true }).populate('reviews').limit(8);

      // Sending success response with featured tours
      res.status(200).json({ success: true, message: 'Successfully', data: tours });
   } catch (error) {
      // Sending error response if retrieval fails
      res.status(404).json({ success: false, message: 'Not Found' });
   }
};

// Get total count of tours
export const getTourCount = async (req, res) => {
   try {
      // Counting total number of tours
      const tourCount = await Tour.estimatedDocumentCount();

      // Sending success response with count of tours
      res.status(200).json({ success: true, data: tourCount });
   } catch (error) {
      // Sending error response if count fails
      res.status(500).json({ success: false, message: "Failed to fetch" });
   }
};
