import React from "react";
import "./Nav.scss";
import {
    Link, NavLink
} from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">

                {/* <Link to='/'>Home</Link >
                <Link to='/crud'>CRUD</Link >
                <Link to='/addtodos'>AddToDo</Link >
                <Link to='/about'>About</Link > */}

                <NavLink to='/' activeClassName="active" exact={true}>Home</NavLink>
                <NavLink to='/crud' activeClassName="active">CRUD</NavLink>
                <NavLink to='/addtodos' activeClassName="active">AddToDo</NavLink>
                <NavLink to='/about' activeClassName="active">About</NavLink>
                <NavLink to='/user' exact activeClassName="active">ListUser</NavLink>
                <NavLink to='/user/:id' activeClassName="active">DetailUser</NavLink>

                {/* <a className="active" href="/">Home</a>
                <a href="/crud">CRUD</a>
                <a href="/addtodos">AddToDo</a>
                <a href="/about">About</a> */}

            </div>
        )
    }
}
export default Nav