import { Navigate } from "react-router-dom";

export default function SecretRoute({ children }) {
  const allowed = sessionStorage.getItem("admin_gate");

  if (!allowed) {
    return <Navigate to="/admin" />;
  }

  return children;
}