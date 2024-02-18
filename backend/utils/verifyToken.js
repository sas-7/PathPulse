// Importing jwt module from 'jsonwebtoken'
import jwt from 'jsonwebtoken';

// Middleware function to verify token
export const verifyToken = (req, res, next) => {
   // Extracting token from request cookies
   const token = req.cookies.accessToken;

   // If token does not exist, return unauthorized status
   if (!token) {
      return res.status(401).json({ success: false, message: "You are not authorized!" });
   }

   // Verifying the token
   jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      // If token is invalid, return unauthorized status
      if (err) {
         return res.status(401).json({ success: false, message: "Token is invalid" });
      }

      // If token is valid, set user information in request object and proceed to next middleware
      req.user = user;
      next();
   });
};

// Middleware function to verify user
export const verifyUser = (req, res, next) => {
   // Calling verifyToken middleware to verify token
   verifyToken(req, res, next, () => {
      // Checking if user is authorized based on user id or role
      if (req.user.id === req.params.id || req.user.role === 'admin') {
         next();
      } else {
         // If user is not authorized, return unauthorized status
         return res.status(401).json({ success: false, message: "You are not authenticated" });
      }
   });
};

// Middleware function to verify admin
export const verifyAdmin = (req, res, next) => {
   // Calling verifyToken middleware to verify token
   verifyToken(req, res, next, () => {
      // Checking if user is an admin
      if (req.user.role === 'admin') {
         next();
      } else {
         // If user is not an admin, return unauthorized status
         return res.status(401).json({ success: false, message: "You are not authorized" });
      }
   });
};
