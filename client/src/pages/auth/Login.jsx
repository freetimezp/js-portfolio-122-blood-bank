import React from 'react';

import Form from '../../components/shared/Form/Form';

const Login = () => {
    return (
        <div className="login-page">
            <div className="row">
                <div className="col-md-8 form-banner">
                    <img src="./assets/images/banner1.jpg" alt="banner" />
                </div>

                <div className="col-md-4 form-container">
                    <Form
                        formTitle="Login page"
                        submitBtn="Login"
                    />
                </div>
            </div>
        </div>
    );
}

export default Login;
