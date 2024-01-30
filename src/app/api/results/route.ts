import VotingPosition from "@/models/voting_position";
import { NextResponse } from "next/server";

export async function GET() {
  let res = await VotingPosition.aggregate([
    {
      $set: {
        answers: {
          $sortArray: {
            input: "$answers",
            sortBy: { votes: -1 },
          },
        },
      },
    },
  ]);
  return NextResponse.json(res);
}
