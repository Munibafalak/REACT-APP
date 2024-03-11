import HomePage from './pages/homePage';
import Layout from './global/layout';
import AboutPage from './pages/aboutUs';
import ContactUSPage from './pages/contactUs';
import {Route, Routes} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          < Route path='/' element={<HomePage/>}/>
          < Route path='/about-us' element={<AboutPage/>}/>
          < Route path='/contact-us' element={<ContactUSPage/>}/>
        </Routes>
         {/*<HomePage />
         <AboutPage />
         <ContactUSPage />*/}

      </Layout>
      
      
    </div>
  );
}

export default App;

