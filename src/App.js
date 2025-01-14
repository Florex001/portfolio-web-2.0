import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Rolam from './components/Rolam';
import Kapcsolat from './components/Kapcsolat';
import Footer from './components/Footer';
import 'react-vertical-timeline-component/style.min.css';

function App({skillek}) {
  return (
    <div className="home-container">
      <Header/>
      <Hero/>
      <Rolam skillek={skillek}/>
      <Kapcsolat/>
      <Footer/>
    </div>
  );
}

export default App;
