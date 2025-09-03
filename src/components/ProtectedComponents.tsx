import { ReactNode } from "react";
import { Navigate } from "react-router";

export default function ProtectedComponents({
  children,
}: {
  children: ReactNode;
}) {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to={"/Login"} />;
  }
  return children;
}
