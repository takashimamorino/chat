import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { typeDefs as scalarsTypeDefs } from 'graphql-scalars';
import path from 'path';

const typesArray = loadFilesSync(path.join(__dirname, './**/*.graphql'));
const types = [scalarsTypeDefs, typesArray];

export const typeDefs = mergeTypeDefs(types);
