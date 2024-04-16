import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { BrowserRouter as Router, Route, Routes, useHistory} from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  // const [posts, setPosts] = useState[
  //   {
  //     id: 1,
  //     title: 'My first Post',
  //     datetime: 'Feb 01 11:17:36 AM',
  //     body:''
  //   }
  // ]
const [search, setSearch] = useState('');
  return (
    <div className="App">
      <Router>
        <Header title='React Js Blog' />
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/post' element={<NewPost/>}/>
          <Route path='/about' component={About}/>
          <Route path='/post/:id' element={<PostPage />}/>
          <Route path='/*' component={Missing}/>    
        </Routes> 
        <Footer />
      </Router>
     
      
        

    
      
     
      
    </div>
  );
}

export default App;
