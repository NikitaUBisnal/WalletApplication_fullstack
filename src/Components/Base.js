
import CustomNavbar from "./CustomNavbar";
import Homepage from "./Homepage";
import Navbarpre from "./Navbars/Navbarpre";



const Base=({title="Welcome to website",children})=>{

    return(
        <div className="container-fluid">
            <Navbarpre />
            <br></br>
            <br></br>
            
            {children}
            
        </div>
    );
};
export default Base;