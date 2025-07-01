import { Header } from '@components/Header';
import { Layout } from '@components/Layout';
import { Main } from '@components/Main';
import { Footer } from '@components/Footer';
import { WeatherProvider } from '@contexts/';
import { AppProvider } from '@contexts/AppContext';

export const App = () => {
  return (
    <AppProvider>
      <Layout>
        <WeatherProvider>
          <Header />
          <Main />
          <Footer />
        </WeatherProvider>
      </Layout>
    </AppProvider>
  );
};
