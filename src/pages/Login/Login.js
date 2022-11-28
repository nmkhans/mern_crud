import React from 'react';
import Button from "react-bootstrap/Button"
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <div>
            <h1>Login Here</h1>
            <Button onClick={() => loginWithRedirect()}>Login</Button>
        </div>
    );
};

export default Login;