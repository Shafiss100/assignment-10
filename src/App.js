
import Navbar from './component/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Signup from './component/Signup/Signup';
import NotFound from './component/NotFound/NotFound';
import Blog from './component/Blog/Blog';
import Checkout from './component/Checkout/Checkout';
import RequireAuth from './component/RequireAuth/RequireAuth';
import About from './component/About/About';

function App() {
  return (
    <div className="Ap">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
