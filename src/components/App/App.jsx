import Benefits from '../Benefits/Benefits';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';

function App() {
  return (
    <>
      <div className="m-auto w-11/12 max-w-[1111px]">
        <Header />
        <Hero />
      </div>
      <Benefits />
      <Footer />
    </>
  );
}

export default App;
