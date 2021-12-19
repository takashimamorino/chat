import { config } from 'dotenv';

config({ path: `.env.${process.env.NODE_ENV}` });

export const SUPABASE_URL = process.env.SUPABASE_URL as string;
export const SUPABASE_PROJECT_API = process.env.SUPABASE_PROJECT_API as string;
