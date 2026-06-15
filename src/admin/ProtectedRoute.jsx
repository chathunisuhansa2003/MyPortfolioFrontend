import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const allowed = sessionStorage.getItem("admin_access");

  if (!allowed) {
    return <Navigate to="/admin" />;
  }

  return children;
}