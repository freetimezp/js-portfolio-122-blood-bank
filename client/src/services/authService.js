export const handleLogin = (e, email, password, role) => {
    e.preventDefault();

    try {
        //console.log("login");
        if (!role || !email || !password) {
            alert("All fields required!");
        }

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