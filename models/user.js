import mongoose, { Schema } from "mongoose";
import { hashPassword } from "lib/helper";

const userSchema = new Schema(
  {
    username: String,
    email: String,
    password: String,
    role: String,
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  this.password = hashPassword(this.password);

  next();
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
