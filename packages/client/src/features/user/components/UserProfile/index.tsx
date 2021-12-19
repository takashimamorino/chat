import { type VFC } from 'react';
import { useQuery } from 'urql';
import { UserProfileDocument } from './index.generated';

type Props = {
  userId: string;
};

export const UserProfile: VFC<Props> = ({ userId }) => {
  const [{ data }] = useQuery({
    query: UserProfileDocument,
    variables: { id: userId },
  });
  const user = data?.user;

  return (
    <div>
      <h3>{user?.name}</h3>
      <p>{user?.email}</p>
    </div>
  );
};
