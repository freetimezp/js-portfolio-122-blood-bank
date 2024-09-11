import React, { useState, useEffect } from 'react';

import Layout from '../../components/shared/Layout/Layout';
import API from '../../services/API';
import moment from 'moment';

const Donar = () => {
    const [data, setData] = useState([]);

    const getDonars = async () => {
        try {
            const { data } = await API.get("/inventory/get-donars");
            if (data?.success) {
                setData(data?.donars);
            }
        } catch (error) {
            console.log("getDonars func: ", error);
        }
    };

    useEffect(() => {
        getDonars();
    }, []);

    return (
        <Layout>
            <div className="container">

                <h4 className="m-4">
                    Donars Page
                </h4>
                <hr />

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.length > 0 && data?.map((record) => (
                            <tr key={record._id}>
                                <td>{record.name || record.organizationName + " (ORG)"}</td>
                                <td>{record.email}</td>
                                <td>{record.phone}</td>
                                <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
}

export default Donar;
