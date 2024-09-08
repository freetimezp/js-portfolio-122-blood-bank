import { userLogin } from "../redux/features/auth/authActions";
import store from "../redux/store";


export const handleLogin = (e, email, password, role) => {
    e.preventDefault();

    try {
        if (!role || !email || !password) {
            return alert("All fields required!");
        }

        //console.log({ email, password, role });
        store.dispatch(userLogin({ email, password, role }));

    } catch (error) {
        console.log(error.message);
    }
};

export const handleRegister = (
    e,
    email,
    password,
    name,
    role,
    organizationName,
    hospitalName,
    website,
    address,
    phone
) => {
    e.preventDefault();

    try {
        console.log("register")
    } catch (error) {
        console.log(error.message);
    }
};