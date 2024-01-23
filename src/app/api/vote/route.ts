import VotingPosition from "@/models/voting_position";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET() {
    let res = await VotingPosition.find({})
    res.forEach(e => e.answers.forEach(i => {
        delete i["votes"]
    }))
    return NextResponse.json(res)
}

export async function POST(req: NextApiRequest) {
    let votes = JSON.parse(req.body)
    if (!Array.isArray(votes) || votes.length == 0) {
        return new Response('Bad body request', {
            status: 404
        })
    }
    // Zapisuje głosy usera jezeli ich nie ma
}