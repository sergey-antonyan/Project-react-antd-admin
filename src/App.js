import 'antd/dist/reset.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import MainLayout from './Components/MainLayout';
import Dashboard from './Pages/Dashboard';
import Users from './Pages/Users'
import ProductList from './Pages/ProductList';
import CategoryList from './Pages/CategoryList';


function App() {
  return (
   
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/admin' element={<MainLayout/>}>
          <Route index element={<Dashboard/>} />
          <Route path='customers' element={<Users/>}/>
          <Route path='productList' element={<ProductList/>}/>
          <Route path='categorylist' element={<CategoryList/>}/>
          
        </Route>
      </Routes>
    </Router>
    
  );
}

export default App;
