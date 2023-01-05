export interface answerTypes {
  score: number;
  _id: string;
  author: author;
  text: string;
  created: string;
  votes: [];
  comments: [];
  id: string;
}

export interface commentTypes {
  author: author;
  body: string;
  created: string;
  id: string;
}

type author = {
  username: string;
  profilePhoto: string;
  created: string;
  id: string;
};
