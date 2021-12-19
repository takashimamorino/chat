import { VFC } from 'react';
import { useQuery } from 'urql';
import { UserListDocument } from './userList.generated';

export const UserList: VFC = () => {
  const [{ data, fetching, error }] = useQuery({ query: UserListDocument });

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <ul>
      {data?.users.map((user) => {
        if (!user) return;
        return <li key={user.id}>{user.name}</li>;
      })}
    </ul>
  );
};
