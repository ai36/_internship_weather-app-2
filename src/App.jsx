import { Header, Layout, Card, Main, Footer, Slider } from './components';
import { AppContext, HeaderContext, DataContext } from './context';

function App() {
  return (
    <AppContext>
      <Layout>
        <Card>
          <DataContext>
            <HeaderContext>
              <Header />
            </HeaderContext>
            <Main />
            <Slider />
          </DataContext>
          <Footer />
        </Card>
      </Layout>
    </AppContext>
  );
}

export default App;
