import React, { useState, useEffect } from 'react';
import API from '../../services/API';

import Header from '../../components/shared/Layout/Header';
import moment from 'moment';

const Analytics = () => {
    const [data, setData] = useState([]);
    const [inventoryData, setInventoryData] = useState([]);

    const colors = ["#884a39", "#c38154", "#ffc26f", "#4f709c",
        "#4942e4", "#0079ff", "#ff0060", "#22a699"];

    //get blood group data
    const getBloodGroupData = async () => {
        try {
            const { data } = await API.get('/analytics/bloodGroups-data');

            if (data?.success) {
                setData(data?.bloodGroupData);
                //console.log(data);
            }

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getBloodGroupData();
    }, []);


    const getRecentBloodRecords = async () => {
        try {
            const { data } = await API.get('/inventory/get-recent-inventory');

            if (data?.success) {
                setInventoryData(data?.inventory);
                //console.log(inventoryData);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getRecentBloodRecords();
    }, []);

    return (
        <>
            <Header />
            <div className="container p-4">
                <div className="d-flex flex-row flex-wrap gap-4">
                    {data?.map((record, i) => (
                        <div
                            className="card m-2 p-1"
                            style={{ width: "18rem", backgroundColor: `${colors[i]}` }}
                            key={i}
                        >
                            <div className="card-body">
                                <h1 className="card-title bg-light text-dark text-center mb-3">
                                    {record.bloodGroup}
                                </h1>
                                <p className="card-text">
                                    Total In: <b>{record.totalIn} (ml)</b>
                                </p>
                                <p className="card-text">
                                    Total Out: <b>{record.totalOut} (ml)</b>
                                </p>
                            </div>
                            <div className="card-footer text-light bg-dark text-center">
                                Total Available: <b>{record.availableBlood} (ml)</b>
                            </div>
                        </div>
                    ))}
                </div>

                <br />
                <hr />
                <br />

                <div>
                    <h1 className="my-3">
                        Recent Blood Transactions
                    </h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Blood Group</th>
                                <th scope="col">Inventory Type</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Donar Email</th>
                                <th scope="col">Date & Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {inventoryData && inventoryData?.length > 0 && inventoryData?.map((record) => (
                                <tr key={record._id}>
                                    <td>{record.bloodGroup}</td>
                                    <td>{record.inventoryType}</td>
                                    <td>{record.quantity} (ml)</td>
                                    <td>{record.email}</td>
                                    <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Analytics;
