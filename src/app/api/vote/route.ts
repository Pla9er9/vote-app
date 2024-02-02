import User from "@/models/user";
import VotingPosition from "@/models/voting_position";
import { NextApiRequest } from "next";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  let res = await VotingPosition.find({}, { votes: false });
  return NextResponse.json(res);
}

export async function POST(req: NextApiRequest) {
  const session = await getServerSession(req);

  if (!session) {
    return new Response(null, { status: 401 });
  }

  let user = await User.findOne({ username: session.user?.name });
  if (user == null) {
    return new Response("User not found", {
      status: 404,
    });
  }
  if (user.voted) {
    return new Response("You already voted", {
      status: 400,
    });
  }

  let votes = await req.json();
  if (!Array.isArray(votes) || votes.length == 0) {
    return new Response("Bad body request", {
      status: 400,
    });
  }
  const res = await VotingPosition.find(
    {},
    { _id: true, title: false, createdAt: false, updatedAt: false },
  );
  let i = -1;
  res.forEach(async (e) => {
    i++;
    await VotingPosition.updateOne(
      { _id: e._id },
      { $inc: { "answers.$[ele].votes": 1 } },
      { arrayFilters: [{ "ele.index": votes[i] }] },
    );
  });

  await User.updateOne({ username: session.user?.name }, { voted: true });

  return new NextResponse();
}
