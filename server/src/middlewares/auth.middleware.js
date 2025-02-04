import { User } from '../models/user.model.js';
import jwt from 'jsonwebtoken';

export const verifyJWT = async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header('authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res
        .status(403)
        .json({ success: false, message: 'Unauthorized Request' });
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decodedToken?._id).select('-password');

    if (!user) {
      return res.status(403).json({ success: false, message: 'Invalid Token' });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(403).json({
      success: false,
      message: error?.error || 'Invalid Access Token',
    });
  }
};
