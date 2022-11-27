import { useLocation, Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const user = true;
    const location = useLocation();

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return children;
}

export default ProtectedRoute;