import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { 
  Home, 
  Login, 
  Signup,
  CafeDetail,
  MainCafe,
  MainFarmer,
  MyPageCafe,
  MyPageFarmer,
  NotFound,
} from "./pages";


const Header = () => {
  return (
    <header>
      <div>Logo</div>
      <div>Menus</div>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </header>
  );
}


function App() {

  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/cafedetail' element={<CafeDetail />} />
          <Route path='/maincafe' element={<MainCafe />} />
          <Route path='/mainfarmer' element={<MainFarmer />} />
          <Route path='/mypagecafe' element={<MyPageCafe />} />
          <Route path='/mypagefarmer' element={<MyPageFarmer />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;
