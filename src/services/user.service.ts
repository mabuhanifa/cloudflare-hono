import { User } from "../types/user.type";

const dummyUsers: User[] = [
  { id: "1", name: "Mohammed" },
  { id: "2", name: "Alice" },
];

export const findAllUsers = async (): Promise<User[]> => {
  return dummyUsers;
};

export const findUserById = async (id: string): Promise<User | null> => {
  return dummyUsers.find((user) => user.id === id) || null;
};
