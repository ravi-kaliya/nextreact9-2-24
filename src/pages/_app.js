// pages/_app.js
import { ThemeProvider, useTheme } from '../context/ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  const { theme } = useTheme();

  return (
    <ThemeProvider>
      <html lang='en' className={theme === 'dark' ? 'dark-theme' : ''}>
        <Component {...pageProps} />
      </html>
    </ThemeProvider>
  );
}

export default MyApp;
