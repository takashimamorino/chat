import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_PROJECT_API } from '../../constants/env';

export const supabase = createClient(SUPABASE_URL, SUPABASE_PROJECT_API);
