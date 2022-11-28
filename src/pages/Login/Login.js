import React from 'react';
import Button from "react-bootstrap/Button"
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <div className="py-5">
            <Container>
                <Card className="w-75 m-auto mt-5">
                    <Card.Body>
                        <Card.Title className="text-center">Please Login To Continue</Card.Title>
                        <Card.Text className="text-center pt-3">
                            You Need to Login in order to continue to the following page
                        </Card.Text>
                        <div className="w-50 m-auto py-4">
                            <Button 
                            className="w-100" 
                            onClick={() => loginWithRedirect()}
                            >Login</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default Login;