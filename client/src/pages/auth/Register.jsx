import React from 'react';
import { useSelector } from "react-redux";

import Form from '../../components/shared/Form/Form';

import Spinner from '../../components/shared/Spinner';

const Register = () => {
    const { loading, error } = useSelector(state => state.auth);

    return (
        <>
            {error && (
                <div>
                    <span className='text-danger'>{alert(error)}</span>
                </div>
            )}

            {loading ? <Spinner /> : (
                <div className="register-page">
                    <div className="row">
                        <div className="col-md-8 form-banner">
                            <img src="./assets/images/banner2.jpg" alt="banner" />
                        </div>

                        <div className="col-md-4 form-container">
                            <Form
                                formTitle="Register page"
                                submitBtn="Register"
                                formType="register"
                            />
                        </div>
                    </div>
                </div>
            )}

        </>
    );
}

export default Register;
