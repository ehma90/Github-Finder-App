import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './component/pages/Home';
import About from './component/pages/About';
import NotFound from './component/pages/NotFound';
import Navbar from './component/layout/Navbar';
import Footer from './component/layout/Footer';


function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar/>

        <main className='container mx-auto px-3 pb-12'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/notFound' element={<NotFound />}/>
            <Route path='/*' element={<NotFound />}/>
          </Routes>
        </main>

        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
