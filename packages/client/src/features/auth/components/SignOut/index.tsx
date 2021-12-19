import { type VFC, useState } from 'react';
import { type ApiError } from '@supabase/supabase-js';
import { supabase } from '../../../../clients/supabase';

export const SignOut: VFC = () => {
  const [error, setError] = useState<ApiError | null>(null);
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    setError(error);
  };

  return (
    <>
      {error && <p>{error.message}</p>}
      <button onClick={signOut}>ログアウト</button>
    </>
  );
};
