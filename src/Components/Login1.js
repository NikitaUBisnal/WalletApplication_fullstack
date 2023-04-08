import { useState } from "react";
import { FormGroup, Form, Label, Input, Container, Button, Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Base from "./Base";


import { useDispatch } from "react-redux";
import axios from "axios";

import { connect } from "react-redux";
import { authActions } from "../Store/Store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login1 = () => {
  const dispatch = useDispatch()

  const Data = useSelector((state) => state.auth)
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState({
    errors: {},
    isError: false
  })

  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value })

  }

  const AuthenticateWallet = async (data) => {
    console.log(data);

    console.log("Heyyyyy");
    await axios.post("http://localhost:8080/userDetails/authenticateUser", data).then((res) => {
      console.log(res.data, "N")

      
      localStorage.setItem("userDetails", JSON.stringify(res.data));
      dispatch(authActions.login(res.data))
      

      navigate("/Homepage")


    }).catch((err) => {
      // console.log(err);
      let a = err.response.data
      console.log(a)
      toast.error(`${a.message}`, {
        autoClose: 2000,
        position: "top-center",
        pauseOnHover: true,
        theme: "colored",
      })

    })

  }



  const validateUser = async (event) => {
    event.preventDefault();
    await AuthenticateWallet(data)





  }

  // const submitForm = (event) => {

  //   console.log("HI!")

  //   signup(data).then((resp) => {
  //     console.log(resp)
  //     console.log("success log")
  //   }).catch((error) => {
  //     console.log(error)
  //     console.log("Error log")
  //   });
  //   event.preventDefault()

  // }


  return (
    <>
    <Base>
      <div>
        {/* {Data.isAuthenticate && navigate("/Homepage")} */}
        
          <Container>

            <Card color="dark" inverse >
              <CardHeader>
                <h3></h3>
              </CardHeader>
              <CardBody>

                <Form onSubmit={validateUser}>

                  <FormGroup >
                    <Label
                      for="email"
                      sm={2}
                    >
                      Enter Email
                    </Label>

                    <Input
                      id="email"
                      name="email"
                      placeholder="email"
                      type="email"
                      onChange={(e) => handleChange(e, 'email')}
                      value={data.about}
                      required
                    />

                  </FormGroup>
                  <FormGroup >
                    <Label
                      for="Password"
                      sm={2}
                    >
                      Passwd
                    </Label>

                    <Input
                      id="Password"
                      name="password"
                      placeholder="password"
                      type="password"
                      onChange={(e) => handleChange(e, 'password')}
                      value={data.about}
                      required
                    />


                  </FormGroup>
                  <Container className="text-center">

                    <Button color="secondary">Login</Button>

                    <Button color="secondary" type="reset" className="ms-2">Reset</Button>

                  </Container>
                </Form>
              </CardBody>
            </Card>





          </Container>
        
      </div>
      <ToastContainer />
      </Base>
    </>

  );

};

export default Login1