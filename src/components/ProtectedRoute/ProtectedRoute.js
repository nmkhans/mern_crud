import { useLocation, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, isLoading  } = useAuth0();
    const location = useLocation();

    if(isLoading) {
        return (
            <p>Redirecting...</p>
        )
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return children;
}

export default ProtectedRoute;