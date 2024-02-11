import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Admin.css"



function Admin(){

    const [orders, setOrders]=useState([]);

    const fetchOrders=()=>{
        console.log("in fetchOrders function");

        axios.get("/api/order")
            .then((response)=>{
                console.log("RESPONSE:",response.data);
                setOrders(response.data)
                })
            .catch((err)=>{
                console.error(err);
            });
    };

    useEffect(() => {
        fetchOrders();
      }, []);
    
      return(
            <div>
            <h1>ORDERS!!</h1>
            <div className="table-container">
            <table className="table-style">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Time Order Placed</th>
                        <th>Type</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order)=>(
                        <tr key={order.id}>
                            <td>{order.customer_name}</td>
                            <td>{order.time}</td>
                            <td>{order.type}</td>
                            <td>{order.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
      );

}
export default Admin;