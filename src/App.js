import { useTheme } from 'context/ThemeContext';
import AuthApp from './AuthApp';
import { useAuthUser } from './context/auth-context';
import UnAuthApp from './UnAuthApp';

export default function App() {
  const authUser = useAuthUser();
  const { theme } = useTheme();
  if (authUser) {
    return (
      <div
        style={{
          backgroundColor: theme === 'dark' ? 'black' : 'white',
          color: theme === 'dark' ? 'white' : 'black',
        }}>
        <AuthApp />
      </div>
    );
  } else {
    return <UnAuthApp />;
  }
}
