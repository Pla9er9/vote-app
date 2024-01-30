export class Answer {
  title: string;
  imageUrl: string;
  votes: number;
  index: number;

  constructor(title: string, imageUrl: string, index: number) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.votes = 0;
    this.index = index;
  }
}
