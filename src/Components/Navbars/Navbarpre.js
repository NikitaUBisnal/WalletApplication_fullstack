import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { authActions } from '../../Store/Store';
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Axios } from "axios";
import { useDispatch } from "react-redux";


const Navbarpre = () => {
  const dispatch = useDispatch();

  const Data = useSelector((state) => state.auth)

  function logoutUser() {
    console.log("in logout");

    // localStorage.removeItem("userDetails");
    dispatch(authActions.logout());

   


  }
 

  return (

    <>
      <div>
        {!Data.isAuthenticated ? (
          <div class="right">
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4 display:flex justify-content:flex-end"
            >
             
              <div className="container">
                <Link className="navbar-brand" to="/">
                  E-Wallet
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#mobile-nav"
                >
                  <span className="navbar-toggler-icon" />
                </button>


              </div>
            </nav>
          </div>
        ) : (

          <div class="right">
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4 display:flex justify-content:flex-end"
            >
              <div className="container">
                <Link className="navbar-brand" >
                {Data.name}
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#mobile-nav"
                >
                  <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="mobile-nav">
                  <ul className="navbar-nav mr-auto margin:0 padding:0">
                    <li className="nav-item">
                      <Link className="nav-link" to="/Homepage">
                        Dashboard
                      </Link>
                    </li>
                  </ul>
                 

                  <ul className="navbar-nav ml-5 " >
                    <li className="nav-item display:inline-block margin-left:0" onClick={logoutUser}>
                      <Link className="nav-link" to="/Welcome">
                        Logout
                      </Link>
                    </li>
                  </ul>
                  
                </div>
              </div>
            </nav>
          </div>)}
      </div>


    </>
  );
};

export default Navbarpre;
