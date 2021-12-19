import { useState, useEffect } from 'react';
import { type User } from '@supabase/supabase-js';
import { Provider } from 'urql';
import { client } from './clients/urql';
import { supabase } from './clients/supabase';
import { UserProfile } from './features/user/components/UserProfile';
import { UserList } from './features/user/components/UserList';
import { SignUp } from './features/auth/components/SignUp';
import { SignIn } from './features/auth/components/SignIn';
import { SignOut } from './features/auth/components/SignOut';

function App() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const user = supabase.auth.user();
    setUser(user);
  }, [setUser]);

  return (
    <Provider value={client}>
      {user && <UserProfile userId={user.id} />}
      <h2>登録</h2>
      <SignUp />
      <h2>ログイン</h2>
      <SignIn />
      <h2>ログアウト</h2>
      <SignOut />
      <UserList />
    </Provider>
  );
}
export default App;
