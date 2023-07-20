// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./entity/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import User from "./entity/User";
import Order from "./entity/Order";
import Item from "./entity/Item";
import Home from "./entity/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home/>}/>
            <Route path="/users" element={<User />} />
            <Route path="/items" element={<Item />} />
            <Route path="/orders" element={<Order />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
