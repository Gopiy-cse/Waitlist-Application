import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import Axios from "axios";
import "./Table.css";

export const Table = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    // Fetch all data from the server and update the state
    Axios.get('http://localhost:8001/all')
        .then((res) => {
            setData(res.data.details);
        })
        .catch(err => console.log(err));

    // Handle the deletion of a user by their email
    const handleDelete = (email) => {
        Axios.post('http://localhost:8001/del', { email })
            .catch(err => console.log(err));
    }

    // Handle the update of user information by email, referal_id, and number
    const handleUpdate = (email, ref_id, number) => {
        navigate('/update', { state: { email: email, referal_id: ref_id, num: number } });
    }

    return (
        <div className="table-wrapper">
            <table className="table">
                <thead>
                    <tr>
                        <th>Email</th>
                        <th className="expand">Referal ID</th>
                        <th>Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length ? (
                        data.map(i => {
                            return (
                                <tr>
                                    <td>{i.email}</td>
                                    <td>{i.referal_id}</td>
                                    <td className="label label-live">{i.number}</td>
                                    <td>
                                        <span className="actions">
                                            <BsFillTrashFill className="delete-btn" onClick={() => { handleDelete(i.email) }} />
                                            <BsFillPencilFill className="update-btn" onClick={() => { handleUpdate(i.email, i.referal_id, i.number) }} />
                                        </span>
                                    </td>
                                </tr>
                            )
                        })
                    ) : <p>No Data Found</p>}
                </tbody>
            </table>
        </div>
    )
}
