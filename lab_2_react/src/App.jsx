
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif', lineHeight: '1.6' }}>
      <Header />
      <hr />
      <Experience />
      <hr />
      <Education />
      <hr />
      <Footer />
    </div>
  );
}

export default App;