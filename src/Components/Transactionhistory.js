import { useSelector } from "react-redux";
import { Axios } from "axios";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbarpre from "./Navbars/Navbarpre";


const Transactionhistory = () => {

    const [transation, setTransaction] = useState([]);

    const Data = useSelector((state) => state.auth)
    // console.log(Data.transaction);

    async function getData() {
        const id = Data.id;
        try {
            const data = await axios.get(`http://localhost:8080/transaction/${id}`);
            setTransaction([...data.data])
            console.log(transation);
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getData()

        console.log(transation);
    }, [])





    // return (
    //     <div>{transation.map((item,index) => {
    //         return (
    //             <p key={index}>{item.amount}</p>
    //         );
    //     })}</div>
    // );
    console.log(transation)

    
    const containsTransaction = transation.length === 0 ? false : true;

    return (
        <>
        <Navbarpre></Navbarpre>
      <div  >
        <br />
        <div className="card text-center">
          <div className="card-header bg-dark text-white">
            <h1>Transaction History</h1>
          </div>
        </div>
        {!containsTransaction ? (
          <div>
            <div className="alert alert-info">No Transactions Found!</div>
          </div>
        ) : (
          <div style={{overflow:'scroll',
          height:'800px'}}>
            <table className="table table-striped">
              <thead style={{
                position:"sticky",
                top:"0px",
                margin:'0 0 0 0'
                

              }}
              >
                <tr
                  className={
                    "table-light"
                  }>
                  <th>Date and Time</th>
                  
                  <th>Type</th>
                  <th>Wallet email</th>
                  <th>Amount</th>
                </tr>
              </thead>

              {transation.slice(0).reverse().map((transaction) => (
                <thead >
                  <tr
                    
                  >
                    {/* <tr className='table-success'> */}
                    <td>{transaction.transactionDateAndTime}</td>
                   
                    
                    <td>{transaction.type}</td>
                    <td>{transaction.email}</td>
                    <td>{transaction.amount}</td>
                  </tr>
                </thead>
              ))}
            </table>
          </div>
        )}
        <hr />
      </div>
      </>
    );
  }



export default Transactionhistory;