import React, { useEffect, useState } from 'react';

import Layout from '../../components/shared/Layout/Layout';
import API from '../../services/API';
import moment from 'moment';

const Organization = () => {
    const [data, setData] = useState([]);

    const getOrganizations = async () => {
        try {
            const { data } = await API.get("/inventory/get-organization");
            if (data?.success) {
                setData(data?.organizations);
            }
        } catch (error) {
            console.log("getOrganizations func: ", error);
        }
    };

    useEffect(() => {
        getOrganizations();
    }, []);

    return (
        <Layout>
            <div className="container">

                <h4 className="m-4">
                    Organizations Page
                </h4>
                <hr />

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Address</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.length > 0 && data?.map((record) => (
                            <tr key={record._id}>
                                <td>{record.name
                                    || (record.organizationName && record.organizationName + " (ORG)")
                                    || record.hospitalName + " (HOS)"}</td>
                                <td>{record.email}</td>
                                <td>{record.phone}</td>
                                <td>{record.address}</td>
                                <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
}

export default Organization;
