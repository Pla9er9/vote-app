import { NextApiRequest } from "next";

export async function GET() {
    // Zwraca głosy usera
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