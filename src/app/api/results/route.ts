import { Answer } from "@/models/answer";
import VotingPosition from "@/models/voting_position";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(request: NextApiRequest) {
    let res = await VotingPosition.find({})
    res.forEach(e => e.answers.forEach(i => {
        delete i["imageUrl"]
    }))
    return NextResponse.json(res)
}

