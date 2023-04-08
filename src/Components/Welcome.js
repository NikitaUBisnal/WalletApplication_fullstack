import { Card,CardTitle,CardText,Button,CardBody,CardSubtitle } from "reactstrap";
import { Link} from "react-router-dom";
const Welcome=()=>{
    return(
        <div>
            
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
          marginLeft: "30%",
          marginTop:"15%",
          marginBottom:"15%"
          
  }}
>
  
  <CardBody>
    <CardTitle tag="h1">
      My Wallet
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      
    </CardSubtitle>
    <CardText>
      Login or Signup to Continue
    </CardText>
    
    <Link to="/Login1">
        <button>Login</button>
      </Link>
      &nbsp; 
      <Link to="/Signup1">
        <button>Signup</button>
      </Link>
   
    
  </CardBody>
</Card>
</div>
    );
}

export default Welcome;