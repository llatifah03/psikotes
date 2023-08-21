import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const salt = bcrypt.genSaltSync(10);

export const hashPassword = (inputPass) => {
  return bcrypt.hashSync(inputPass, salt);
};

export const verifyPassword = (inputPass, hash) => {
  return bcrypt.compareSync(inputPass, hash);
};

export const createToken = (user) => {
  return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1d" });
};

export const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};
