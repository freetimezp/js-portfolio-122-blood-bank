import React, { useEffect, useState } from 'react';

import Layout from '../../components/shared/Layout/Layout';
import moment from 'moment';
import API from '../../services/API';

const OrgList = () => {
    const [data, setData] = useState([]);

    const getDonars = async () => {
        try {
            const { data } = await API.get("/admin/org-list");
            if (data?.success) {
                setData(data?.orgData);
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
            let answer = window.prompt("Are you sure you want to delete this Org?", "Sure");
            if (!answer) return;

            const { data } = await API.delete(`/admin/delete-org/${id}`);
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
                    Organization List Page
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
                                <td>{record.organizationName}</td>
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

export default OrgList;
