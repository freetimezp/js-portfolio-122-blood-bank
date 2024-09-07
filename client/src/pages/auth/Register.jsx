import React from 'react';

import Form from '../../components/shared/Form/Form';

const Register = () => {
    return (
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
    );
}

export default Register;
