import logo from './logo.svg'
import './App.scss';
import ToDoLists from './Todolist/ToDoLists';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MySecondComponent from './Example/MySecondComponent';
import MyFirstComponent from './Example/MyFristComponent';
import ListUser from './User-axios/ListUser';
import Nav from './Nav/Nav';
import Home from './Nav/Home';
import DetailUser from './DetailUsers-RouteParamete/DetailUser';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          {/* <ToDoLists /> */}
          <Switch>

            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/crud">
              <ToDoLists />
            </Route>

            <Route path="/addtodos">
              <MySecondComponent />
            </Route>

            <Route path="/about">
              <MyFirstComponent />
            </Route>

            <Route path="/user" exact>
              <ListUser />
            </Route>

            <Route path="/user/:id">
              <DetailUser />
            </Route>

          </Switch>

        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
