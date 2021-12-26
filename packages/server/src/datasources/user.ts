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

  public async registerUser(input: User): Promise<User | undefined> {
    const { error } = await supabase
      .from<User>('users')
      .insert([{ id: input.id, name: input.name, email: input.email }]);
    if (error) {
      console.error(error);
      throw error;
    }

    const data = await this.userById(input.id);

    if (data === undefined) {
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
