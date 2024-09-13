import React, { useEffect } from 'react';
import { useState } from 'react';

import Layout from '../../components/shared/Layout/Layout';
import API from '../../services/API';
import moment from 'moment';

const DonarList = () => {
    const [data, setData] = useState([]);

    const getDonars = async () => {
        try {
            const { data } = await API.get("/admin/donar-list");
            if (data?.success) {
                setData(data?.donarData);
            }
        } catch (error) {
            console.log("getDonars func: ", error);
        }
    };

    useEffect(() => {
        getDonars();
    }, []);


    const handleDelete = async (id) => {
        try {
            let answer = window.prompt("Are you sure you want to delete this Donar?", "Sure");
            if (!answer) return;

            const { data } = await API.delete(`/admin/delete-donar/${id}`);
            alert(data?.message);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <Layout>
            <div className="container">

                <h4 className="m-4">
                    Donar List Page
                </h4>
                <hr />

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Date</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.length > 0 && data?.map((record) => (
                            <tr key={record._id}>
                                <td>{record.name}</td>
                                <td>{record.email}</td>
                                <td>{record.phone}</td>
                                <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
                                <td>
                                    <button
                                        className='btn btn-sm btn-danger'
                                        onClick={() => handleDelete(record._id)}
                                    >
                                        DELETE
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
}

export default DonarList;
