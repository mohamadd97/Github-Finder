import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';
import {GithubProvide, GithubProvider} from './Context/Github/GithubContext'
import {AlertProvider} from './Context/Alert/AlertContext'
import Alert from './components/layout/Alert';




function App() {
  return (
    <GithubProvider>
      <AlertProvider>
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main className='container mx-auto px-3 pb-12'>
          <Alert />
          <switch>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/user/:login' element={<User/>}/>
            <Route path='/notFound' element={<NotFound/>}/>
            <Route path='/*' element={<NotFound/>}/>
          </Routes>
          </switch>
          </main>

        <Footer />
      </div>

    </Router>
    </AlertProvider>
    </GithubProvider>
  );
}

export default App;
