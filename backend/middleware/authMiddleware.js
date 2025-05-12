const { StatusCodes } = require("http-status-codes");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.user.id).select("-password");
      next();
    } catch (error) {
      console.log("Token Verification Failed: ", error);
      res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: "Not authorized, token failed" });
    }
  } else {
    res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: "Not authotizried, no token provided" });
  }
};

// check user is an admin

const admin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else
    res
      .status(StatusCodes.FORBIDDEN)
      .json({ message: "Not authorized as an admin" });
};

module.exports = { protect, admin };
