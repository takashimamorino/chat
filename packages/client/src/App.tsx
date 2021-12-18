import { Provider } from 'urql';
import { client } from './clients/urql';
import { UserList } from './features/user/components/UserList';

function App() {
  return (
    <Provider value={client}>
      <UserList />
    </Provider>
  );
}
export default App;
