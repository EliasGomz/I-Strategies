import React from "react";
import ImgUser from '../../Assets/icons/placeholderUser.png'
import { useNavigate } from 'react-router-dom'
import { signOutUser } from "../../Firebase/Auth";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setIsLogin, loginUser } from "../../Screens/Auth/Slice";

const NavbarApp = () => {
  const isLogin = useSelector((state) => state.user.isLogin);
  const user = useSelector((state) => JSON.parse(state.user.user));
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleNavSignIn = () => {
    history("/Auth")
  }

  const handleNavHome = () => {
    history("/")
  }

  const handleAddMovie = () => {
    history("/Admin/Add")
  }

  const handleEditMovie = () => {
    history("Admin/Edit")
  }

  const handleNavSignOut = () =>{
    signOutUser()
    dispatch(setIsLogin(false));
    dispatch(loginUser(JSON.stringify("")));
  }

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
      <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" onClick={() => handleNavHome()} href="">
          Block-Buster
        </a>
        <div
          className="offcanvas offcanvas-start text-bg-dark"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          >
          <div className="offcanvas-header">
            <img src={ImgUser} className="rounded-circle" alt="userIMG" width={45} height={45} />
            <p className="offcanvas-title" id="offcanvasNavbarLabel">
              {user.email || "USER"}
            </p>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" data-bs-toggle="offcanvas"
                   data-bs-target="#offcanvasNavbar" onClick={handleNavHome} style={{cursor: 'pointer'}}>
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" hidden={isLogin?false:true} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Admin Menu
                </a>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li><a className="dropdown-item" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar" onClick={handleAddMovie} style={{cursor: 'pointer'}}>Add Movies</a></li>
                  <li><a className="dropdown-item" hidden data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar" onClick={handleEditMovie} style={{cursor: 'pointer'}}>Edit Movies</a></li>
                </ul>
              </li>
            </ul>
            <div className="d-flex justify-content-center align-items-center p-5">
              <button className="btn btn-outline-success ms-2" hidden={isLogin?true:false} type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar" onClick={() => handleNavSignIn()} >
                Sign In
              </button>
              <button className="btn btn-outline-success ms-2" 
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                hidden={!isLogin? true: false}
                onClick={() => handleNavSignOut()}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavbarApp;
