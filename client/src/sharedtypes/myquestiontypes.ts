export interface dataProps {
  answers: [];
  author: author;
  comments: [];
  created: string;
  id: string;
  score: number;
  tags: [];
  text: string;
  title: string;
  views: number;
  votes: [];
}

type answers = {
  author: any;
  comments: [];
  created: string;
  id: string;
  score: number;
  text: string;
  votes: [];
  _id: string;
};

type author = {
  created: string;
  id: string;
  profilePhoto: string;
  role: string;
  username: string;
};

export interface userProfile {
  username: string;
  role: string;
  id: string;
  created: string;
  profilePhoto: string;
}
