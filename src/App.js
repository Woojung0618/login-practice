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
  HowTo,
  NotFound,
} from "./pages";
import {
  useReducer,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";


const Header = () => {
  const authContext = useContext(AuthContext);
  return (
    <header className="App-header">
      <div>Logo</div>
      <Link to="/">About Us</Link>
      <Link to="/howto">How To</Link>

      {!authContext.state.token ? (
        <div className="App-header-Login">
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      ) : (
        <div>
          {authContext.state.cf ? (
          <div>
            <Link to="/maincafe">Main</Link>
            <Link to="/mypagecafe">Cafe Owner</Link>
          </div>
          ) : (
          <div>
            <Link to="/mainfarmer">Main</Link>
            <Link to="/mypagefarmer">Farmer</Link>
          </div>
          )}
        </div>
      )}
      
    </header>
  );
}

export const AuthContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    // uid : userid. token이랑 같이 백에 넘기기. 
    // cf : cafe or farmer 구분. 'c', 'f'
      case "CafeLogin":
          return { token: action.token, uid: action.uid, cf: action.cf };
      case "FarmerLogin":
          return { token: action.token, uid: action.uid, cf: action.cf };
      case "logout":
          return { token: null, uid: null, cf: null };
      default:
          return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    token: null,
    uid: null,
    cf: 'c',
  });

  return (
    <div className="App">
      <AuthContext.Provider value={{ state, dispatch }}>
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
            <Route path='/howto' element={<HowTo />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
