import { QueryResolvers, User } from 'src/types/graphql';

const Query: QueryResolvers = {
  users: () => users,
};

export const userResolver = { Query };

const users: User[] = [
  {
    id: '01',
    name: 'user01',
    email: 'user01@mail.com',
  },
  {
    id: '02',
    name: 'user02',
    email: 'user02@mail.com',
  },
];
