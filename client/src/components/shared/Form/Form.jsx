import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import InputType from './InputType';

const Form = ({ formType, formTitle, submitBtn }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("donar");
    const [name, setName] = useState("");
    const [organizationName, setOrganizationName] = useState("");
    const [hospitalName, setHospitalName] = useState("");
    const [website, setWebsite] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");


    return (
        <form>
            <h1 className='text-center'>{formTitle}</h1>
            <hr />

            {/* sform check */}
            <div className='d-flex mb-3'>
                <div className="form-check">
                    <input
                        type="radio"
                        className="form-check-input"
                        name="role"
                        id="adminRadio"
                        value={'admin'}
                        onChange={(e) => setRole(e.target.value)}
                    />
                    <label htmlFor="adminRadio" className='form-check-label'>
                        Admin
                    </label>
                </div>
                <div className="form-check ms-2">
                    <input
                        type="radio"
                        className="form-check-input"
                        name="role"
                        id="hospitalRadio"
                        value={'hospital'}
                        onChange={(e) => setRole(e.target.value)}
                    />
                    <label htmlFor="hospitalRadio" className='form-check-label'>
                        Hospital
                    </label>
                </div>
                <div className="form-check ms-2">
                    <input
                        type="radio"
                        className="form-check-input"
                        name="role"
                        id="organizationRadio"
                        value={'organization'}
                        onChange={(e) => setRole(e.target.value)}
                    />
                    <label htmlFor="organizationRadio" className='form-check-label'>
                        Organization
                    </label>
                </div>
                <div className="form-check ms-2">
                    <input
                        type="radio"
                        className="form-check-input"
                        name="role"
                        id="donarRadio"
                        value={'donar'}
                        onChange={(e) => setRole(e.target.value)}
                        defaultChecked
                    />
                    <label htmlFor="donarRadio" className='form-check-label'>
                        Donar
                    </label>
                </div>
            </div>


            {/* switch form login or register */}
            {(() => {
                // eslint-disable-next-line default-case
                switch (true) {
                    case formType === "login": {
                        return (
                            <>
                                <InputType
                                    labelText="Email address"
                                    labelFor="forEmail"
                                    inputType="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                <InputType
                                    labelText="Password"
                                    labelFor="forPassword"
                                    inputType="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </>
                        )
                    }

                    case formType === "register": {
                        return (
                            <>
                                {(role === "admin" || role === "donar") && (
                                    <InputType
                                        labelText="Name"
                                        labelFor="forName"
                                        inputType="text"
                                        name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                )}

                                {role === "organization" && (
                                    <InputType
                                        labelText="Organization Name"
                                        labelFor="forOrganizationName"
                                        inputType="text"
                                        name="organizationName"
                                        value={organizationName}
                                        onChange={(e) => setOrganizationName(e.target.value)}
                                    />
                                )}

                                {role === "hospital" && (
                                    <InputType
                                        labelText="Hospital Name"
                                        labelFor="forHospitalName"
                                        inputType="text"
                                        name="hospitalName"
                                        value={hospitalName}
                                        onChange={(e) => setHospitalName(e.target.value)}
                                    />
                                )}

                                <InputType
                                    labelText="Email address"
                                    labelFor="forEmail"
                                    inputType="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                <InputType
                                    labelText="Password"
                                    labelFor="forPassword"
                                    inputType="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                <InputType
                                    labelText="Website"
                                    labelFor="forWebsite"
                                    inputType="text"
                                    name="website"
                                    value={website}
                                    onChange={(e) => setWebsite(e.target.value)}
                                />

                                <InputType
                                    labelText="Address"
                                    labelFor="forAddress"
                                    inputType="text"
                                    name="address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />

                                <InputType
                                    labelText="Phone"
                                    labelFor="forPhone"
                                    inputType="text"
                                    name="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </>
                        );
                    }
                }
            })()}

            <div className='d-flex justify-content-between align-items-center'>
                {formType === "login" ? (
                    <p className="m-0">
                        Not registered yet? Register {" "}
                        <Link to="/register">
                            Here!
                        </Link>
                    </p>
                ) : (
                    <p className="m-0">
                        Already registered? Login {" "}
                        <Link to="/login">
                            Here!
                        </Link>
                    </p>
                )}
                <button type="submit" className="btn btn-primary">
                    {submitBtn}
                </button>
            </div>
        </form>
    );
}

export default Form;
