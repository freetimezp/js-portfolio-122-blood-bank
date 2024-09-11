import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

import Spinner from '../components/shared/Spinner';
import Layout from '../components/shared/Layout/Layout';

import Modal from '../components/shared/Modal/Modal';
import API from '../services/API';

const HomePage = () => {
    const { loading, error } = useSelector(state => state.auth);
    const [data, setData] = useState([]);

    //get inventory data
    const getBloodRecords = async () => {
        try {
            const { data } = await API.get('/inventory/get-inventory');

            if (data?.success) {
                setData(data?.inventory);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getBloodRecords();
        //console.log(data);
    }, []);

    return (
        <Layout>
            {error && <span>{alert(error)}</span>}

            {loading ? <Spinner /> : (
                <>
                    <div className="container">
                        <h4
                            className='ms-4'
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                            style={{ cursor: "pointer" }}
                        >
                            <i className="fa-solid fa-plus text-success py-4"></i> Add Inventory
                        </h4>
                        <hr />

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
                                {data && data.length > 0 && data?.map((record) => (
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

                        <Modal />
                    </div>
                </>
            )}
        </Layout>
    );
}

export default HomePage;
