import { useState } from "react";
import { FormGroup,Form,Label,Input, Container, Button, Card, CardHeader, CardBody,Row ,Col, FormFeedback, FormText} from "reactstrap";
import Base from "./Base";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup1=()=>{
  const navigate=useNavigate();
 
    const[data,setData]=useState({
      name:"",
      email:"",
      walletName:"",
      password:"",
    })
    const[error,setError]=useState({
        errors:{},
        isError:false
    })

    const handleChange=(event,property)=>{
        setData({...data,[property]:event.target.value})
        console.log("Het!")
    }
    

    const submitForm=(event)=>{
      // data.walletAmount=data.walletAmount;
      // data.walletNumber=data.walletNumber;
        
        console.log(data);

        createWallet(data);
        event.preventDefault()

    }
     const createWallet = async (data) => {
      
      await axios
          .post("http://localhost:8080/userDetails", data)
          .then((res) => {
              alert("sussesfully registered!Login to continue");
               navigate("/Welcome")
             
              
          })
          .catch((err) => {
              console.log(err)
              alert(err.response.data.message);
              
              
          });
  }


    return(
        <div>
        <Base>
            <Container>
                
                    <Card color="dark" inverse >
                    <CardHeader>
                        <h3>Fill Information to Register</h3>
                    </CardHeader>
                    <CardBody>
        
                         <Form onSubmit={submitForm}>
                             <FormGroup>
                             <Label
                                for="name"
                                sm={2}
                                  >
                                 Enter Name
                                  </Label>
          
                                  <Input
                                 id="name"
                                placeholder="Enter your name here"
              type="text"
              onChange={(e)=>handleChange(e,'name')}
              value={data.about}
             

            />
           
         
        </FormGroup>
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
              onChange={(e)=>handleChange(e,'email')}
              value={data.about}
              required
            />
           
       
       
          
       
        </FormGroup>
        <FormGroup >
          <Label
            for="walletAmount"
            sm={2}
          >
            walletAmount
          </Label>
          
            <Input
              id="walletAmount"
              name="walletAmount"
              placeholder="walletAmount"
              type="number"
              onChange={(e)=>handleChange(e,'walletAmount')}
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
              onChange={(e)=>handleChange(e,'password')}
              required
              
            />
          
       
        </FormGroup>
        <Container className="text-center">
          
            <Button color="secondary" type="Submit">Register</Button>
          
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
    export default Signup1;