import { QueryResolvers, User } from 'src/types/graphql';
import { UserClient } from '../../datasources/user';

const userClient = new UserClient();

const Query: QueryResolvers = {
  users: async () => {
    const res = await userClient.allUser();

    if (res === undefined) {
      return [];
    }

    const data: User[] = res.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
    }));

    return data;
  },
  user: async (_, params) => {
    const res = await userClient.userById(params.id);

    if (res === undefined) {
      throw new Error('User not found');
    }

    const data: User = {
      id: res.id,
      name: res.name,
      email: res.email,
    };

    return data;
  },
};

export const userResolver = { Query };
