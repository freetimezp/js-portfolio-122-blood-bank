import React from 'react';
import { useSelector } from "react-redux";

import Form from '../../components/shared/Form/Form';
import Spinner from '../../components/shared/Spinner';

const Login = () => {
    const { loading, error } = useSelector(state => state.auth);

    return (
        <>
            {error && (
                <div>
                    <span className='text-danger'>{alert(error)}</span>
                </div>
            )}

            {loading ? <Spinner /> : (
                <div className="login-page">
                    <div className="row">
                        <div className="col-md-8 form-banner">
                            <img src="./assets/images/banner1.jpg" alt="banner" />
                        </div>

                        <div className="col-md-4 form-container">
                            <Form
                                formTitle="Login page"
                                submitBtn="Login"
                                formType="login"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Login;
