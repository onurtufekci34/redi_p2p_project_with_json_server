// authMiddleware.js
const authorize = (requiredRoles) => {
    return (req, res, next) => {
      // Check if the user has the required roles
      const userRoles = req.user.roles; // assuming roles are stored in the user object
      const authorized = requiredRoles.some((role) => userRoles.includes(role));
  
      if (!authorized) {
        return res.status(403).json({ message: "Unauthorized" });
      }
  
      next();
    };
  };
  
  module.exports = { authorize };
  