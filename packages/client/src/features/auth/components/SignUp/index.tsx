import { type VFC, type ChangeEvent, type FormEvent, useState } from 'react';
import { type ApiError } from '@supabase/supabase-js';
import { useMutation } from 'urql';
import { supabase } from '../../../../clients/supabase';
import { SignUpDocument } from './index.generated';

export const SignUp: VFC = () => {
  const [error, setError] = useState<ApiError | null>(null);
  const [input, setInput] = useState<{
    email: string;
    password: string;
  }>({
    email: '',
    password: '',
  });
  const [_, registerUser] = useMutation(SignUpDocument);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ) => {
    event.preventDefault();
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });
    setError(error);
    if (user) {
      registerUser({ id: user.id, name: email, email: email });
    }
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
      <input type="submit" value="登録" />
    </form>
  );
};
