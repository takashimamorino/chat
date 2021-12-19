import { type VFC, type ChangeEvent, type FormEvent, useState } from 'react';
import { supabase } from '../../../../clients/supabase';
import { type ApiError } from '@supabase/supabase-js';

export const SignIn: VFC = () => {
  const [error, setError] = useState<ApiError | null>(null);
  const [input, setInput] = useState<{
    email: string;
    password: string;
  }>({
    email: '',
    password: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ) => {
    event.preventDefault();
    const { error } = await supabase.auth.signIn({
      email,
      password,
    });
    setError(error);
  };

  return (
    <form
      onSubmit={(event) => handleSubmit(event, input.email, input.password)}
    >
      <label>
        email
        <input
          type="email"
          name="email"
          value={input.email}
          onChange={handleChange}
        />
      </label>
      <label>
        password
        <input
          type="password"
          name="password"
          value={input.password}
          onChange={handleChange}
        />
      </label>
      {error && <p>{error.message}</p>}
      <input type="submit" value="ログイン" />
    </form>
  );
};
