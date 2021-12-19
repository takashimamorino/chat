import { supabase } from './clients/supabase';

interface User {
  id: string;
  name: string;
  email: string;
}

export class UserClient {
  public async allUser(): Promise<User[] | undefined> {
    const { data, error } = await supabase.from<User>('users').select('*');
    if (error) {
      console.error(error);
      throw error;
    }

    if (!data) {
      return undefined;
    }

    const users: User[] = data.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
    }));

    return users;
  }

  public async userById(id: string): Promise<User | undefined> {
    const { data, error } = await supabase
      .from<User>('users')
      .select('*')
      .eq('id', id)
      .single();
    if (error) {
      console.error(error);
      throw error;
    }

    if (!data) {
      return undefined;
    }

    const user: User = {
      id: data.id,
      name: data.name,
      email: data.email,
    };

    return user;
  }
}
