import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Admin.css"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function formatDate(timestamp) {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    return `${month}/${day}/${year} at ${formattedHours}:${formattedMinutes}${ampm}`;
}



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
            <Paper elevation={14}>
            <TableContainer className="table-style">
                <Table className="table-style">
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Time Order Placed</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Cost</TableCell>
                    </TableRow>
                    <TableBody>
                    {orders.map((order)=>(
                        
                        <TableRow key={order.id}>
                            <TableCell>{order.customer_name}</TableCell>
                            <TableCell>{formatDate(order.time)}</TableCell>
                            <TableCell>{order.type}</TableCell>
                            <TableCell>{order.total}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </Paper>
            </div>
        </div>
      );

}
export default Admin;