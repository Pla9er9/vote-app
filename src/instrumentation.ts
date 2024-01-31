import { connectMongoDB } from "./lib/mongodb";
import VotingPosition from "./models/voting_position";

export async function register() {
  await connectMongoDB();
  if (!await hasData()) {
      await addData()
  }
}

async function hasData(): Promise<boolean> {
  return await VotingPosition.exists({}) !== null
}

async function addData(): Promise<void>  {
  const fs = require('fs')
  const file = await fs.readFile("./data.json")
  const data = JSON.parse(file)
}