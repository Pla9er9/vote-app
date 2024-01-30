import mongoose, { Schema, models } from "mongoose";
import { Answer } from "./answer";

const positionSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    answers: {
      type: Array<Answer>,
      require: false,
    },
  },
  { timestamps: true },
);

const VotingPosition =
  models.VotingPosition || mongoose.model("VotingPosition", positionSchema);
export default VotingPosition;
