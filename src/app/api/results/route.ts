import VotingPosition from "@/models/voting_position";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(request: NextApiRequest) {
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
