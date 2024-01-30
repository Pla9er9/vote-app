import { NextApiRequest } from "next";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request: NextApiRequest) {
  const { username, avatar } = await request.json();
  const userExists = await User.exists({ username });
  if (userExists) {
    return new NextResponse();
  }
  const voted = false;
  await User.create({ username, avatar, voted });
  return NextResponse.json({ message: "User Registered" }, { status: 201 });
}
