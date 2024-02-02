import { connectMongoDB } from "./lib/mongodb";
import { Answer } from "./models/answer";
import VotingPosition from "./models/voting_position";
import { promises as fs } from 'fs';

export async function register() {
  await connectMongoDB();
  if (!await hasData()) {
    await addData()
  }
}

async function hasData(): Promise<boolean> {
  return await VotingPosition.exists({}) !== null
}

async function addData(): Promise<void> {
  const file = await fs.readFile(process.cwd() + "/src/data.json", 'utf8');
  const data = JSON.parse(file)
  data.forEach(async (ele) => {
    let answers: Answer[] = []
    let index = 0

    ele[1].forEach((e: string[]) => {
      answers.push(new Answer(e[0], e[1], index))  
      index += 1
    });
    const pos = {
      title: ele[0],
      answers: answers
    }
    await VotingPosition.insertMany([pos])
  });
}