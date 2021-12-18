import { mergeResolvers } from '@graphql-tools/merge';
import { resolvers as scalarResolvers } from 'graphql-scalars';
import { userResolver } from 'src/resolvers/user';

export const resolvers = mergeResolvers([scalarResolvers, userResolver]);
