import { useState } from "react";
import { FormGroup,Form,Label,Input, Container, Button, Card, CardHeader, CardBody,Row ,Col} from "reactstrap";
import Base from "./Base";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Reacharge=()=>{
  const Data=useSelector((state)=>state.auth)
  const navigate = useNavigate();
    const[data,setData]=useState({
      
      amount:""
    })
    const[error,setError]=useState({
        errors:{},
        isError:false
    })

    const handleChange=(event,property)=>{
        setData({...data,[property]:event.target.value})
    }

    const submitForm=(event)=>{
        
        console.log("HI!")
        
   

        rechargeWallet(data)
        event.preventDefault()

    }

     const rechargeWallet = (event) => {
      if(data.amount<0){
        alert("The value cannot be negative")
      }
      try{
        event.preventDefault()
            const id=Data.id;
            console.log(id);
            

            const amount=data.amount;
         axios.put(`http://localhost:8080/transaction/${id}/${amount}`).then((res) => {
          console.log(res.data)
          alert("success");
          navigate("/Homepage");
          
        });}
        catch(err){
          
          let a = err.response.data
        console.log(a.message,"Hiii")
        alert(a.message);
        // toast.error(`${a.message}`, {
        //   autoClose: 2000,
        //   position: "top-center",
        //   pauseOnHover: true,
        //   theme: "colored",
        // })
          
        }
      };


    return(
        <div>
        <Base>
            <Container>
                
                    <Card color="dark" inverse >
                    <CardHeader>
                        <h3></h3>
                    </CardHeader>
                    <CardBody>
        
                         <Form onSubmit={rechargeWallet}>
                             
        
        <FormGroup >
          <Label
            for= "amount"
            
            sm={2}
          >
            Enter Amount
          </Label>
          
            <Input
              id="amount"
              name="amount"
              placeholder="Amount"
              type="number"
              onChange={(e)=>handleChange(e,'amount')}
              value={data.about}
              required
            />
          
       
        </FormGroup>
        <Container className="text-center">
            <Button color="secondary">Recharge</Button>
            <Button color="secondary" type="reset" className="ms-2">Reset</Button>
            
        </Container>
      </Form>
      </CardBody>
      </Card>
                    
                    

               
                
            </Container>
      </Base>
      </div>
        
    );
    
    };
    export default Reacharge;