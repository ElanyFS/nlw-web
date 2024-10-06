import type { ReactNode } from "react";
import { Navigate } from "react-router-dom"; // Use Navigate for redirection

const isAuth = () => {
   const token = localStorage.getItem('token');
   return token !== null; // Use strict inequality for clarity
}

interface PrivateRouterProps {
    children: ReactNode;
}

export const PrivateRouter = ({ children }: PrivateRouterProps) => {
    if (isAuth()) {
        return <div>{children}</div>; 
    }

    return <Navigate to="/" />; 
}