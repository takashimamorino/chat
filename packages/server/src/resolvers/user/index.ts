import {
  QueryResolvers,
  MutationResolvers,
  RegisterUserPayload,
  User,
} from 'src/types/graphql';
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

const Mutation: MutationResolvers = {
  registerUser: async (_, params) => {
    const res = await userClient.registerUser({
      id: params.id,
      name: params.input.name,
      email: params.input.email,
    });

    if (res === undefined) {
      throw new Error('User not found');
    }

    const data: RegisterUserPayload = {
      id: res.id,
    };

    return data;
  },
};

export const userResolver = { Query, Mutation };
