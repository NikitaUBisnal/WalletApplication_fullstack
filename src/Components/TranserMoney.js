import { useState } from "react";
import { FormGroup, Form, Label, Input, Container, Button, Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import Base from "./Base";
import { useSelector } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const TransferMoney = () => {
  const navigate = useNavigate();
  const Data = useSelector((state) => state.auth)
  const [data, setData] = useState({
    email: "",
    amount: ""
  })
  const [error, setError] = useState({
    errors: {},
    isError: false
  })

  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value })
  }

  const submitForm = (event) => {

    console.log("HI!")



    transferAmount(data)
    event.preventDefault()
    

  }

  const transferAmount = (event) => {
    event.preventDefault()
    const id = Data.id;
    //console.log
    console.log(Data.id);

    console.log(data.email, data.amount)

    axios.post(`http://localhost:8080/transaction/${id}`, data)
      .then((res) => {
        console.log(Data.walletAmount); 
        alert("success");
        navigate("/Homepage");
      })
      .catch((err) => {
        // dispath({ type: GET_ERRORS, payload: err.response.data.message });
        let a = err.response.data
        console.log(a.message)
        toast.error(`${a.message}`, {
          autoClose: 2000,
          position: "top-center",
          pauseOnHover: true,
          theme: "colored",
        })
      });
  }


  return (
    <>
    <div>
      <Base>
        <Container>

          <Card color="dark" inverse >
            <CardHeader>
              <h3></h3>
            </CardHeader>
            <CardBody>

              <Form onSubmit={transferAmount}>

                <FormGroup >
                  <Label
                    for="email"
                    sm={2}
                  >
                    Email
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
                    for="amount"

                    sm={2}
                  >
                    walletAmount
                  </Label>

                  <Input
                    id="amount"
                    name="amount"
                    placeholder="amount"
                    type="number"
                    onChange={(e) => handleChange(e, 'amount')}
                    value={data.about}
                    required
                  />


                </FormGroup>
                <Container className="text-center">
                  <Button color="secondary">Transfer Amount</Button>
                  <Button color="secondary" type="reset" className="ms-2">Reset</Button>

                </Container>
              </Form>
            </CardBody>
          </Card>





        </Container>
      </Base>
      <ToastContainer />
    </div>
    </>

  );

};
export default TransferMoney;