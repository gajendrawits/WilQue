export interface commentTypes {
  answerId: string;
  questionId: string | undefined | string[];
  comment?: [];
  showCommnetArea?: {};
}

export interface userData {
  username: string;
  role: string;
  id: string;
  created: string;
  profilePhoto: string;
}
