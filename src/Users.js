
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
function Users() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
            response.json().then((result) => {
                console.warn("result", result);
                setData(result);
                localStorage.setItem("users",JSON.stringify(result))
            })
        }).catch(err=>{
            // alert("Catch")
            let coll=localStorage.getItem("users")
            setData(JSON.parse(coll))
        })
    }, [])
    return (
        <div>
            <Table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.address.street}</td>
                            </tr>
                        ))

                    }
                </tbody>
            </Table>
        </div>
    );
}


export default Users;