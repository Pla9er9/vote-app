import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
    },
    avatar: {
      type: String,
      require: true,
    },
    voted: {
      type: Boolean,
      require: false,
      default: false,
    },
  },
  { timestamps: true },
);

const User = models.User || mongoose.model("User", userSchema);
export default User;
