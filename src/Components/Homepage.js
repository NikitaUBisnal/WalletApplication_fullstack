import { Link } from "react-router-dom";
import { Card, CardTitle, CardText, Button, CardBody, CardSubtitle } from "reactstrap";
import Navbarpre from "./Navbars/Navbarpre";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "../Store/Store";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Homepage = () => {
  const Data = useSelector((state) => state.auth)
  console.log(Data.walletAmount);
  const dispatch = useDispatch();
  const useramount=useSelector((state)=>state.auth.walletAmount)
  const navigate=useNavigate();

  useEffect(() => {
    if(!Data.isAuthenticated)
      navigate("/Welcome")
    else
      getData()
    console.log("HEYYY")


  }, [])
  async function getData() {
    const id = Data.id;
    try {
      const data = await axios.get(`http://localhost:8080/userDetails/getuser/${id}`);
      console.log(data.data);
      dispatch(authActions.update(data.data));


    }
    catch (err) {
      // console.log(err);
    }

  }



  return (
    <div>
      <Navbarpre></Navbarpre>

      <Card
        style={{
          width: '18rem',
          justify: 'center',
          width: "40%",
          backgroundColor: 'grey',
          textAlign: 'center',
          justifyContent: 'center',
          alignContent: 'center',
          padding: '60px',
          marginLeft: "30%"

        }}
      >

        <CardBody>
          <CardTitle tag="h5">
            MyWallet

          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >

          </CardSubtitle>
          <CardText>
            <h1>Rs. {useramount}</h1>
          </CardText>

          <br></br>
          <br></br>
          <Link to={"/Recharge"}>
            <Button>
              Recharge
            </Button>
          </Link>
          <br></br>
          <br></br>
          <Link to={"/TransferMoney"}>
            <Button>
              Transfer Amount
            </Button>
          </Link>
          <br></br>
          <br></br>
          <Link to={"/Transactionhistory"}>
            <Button>
              Transaction History
            </Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
}

export default Homepage;