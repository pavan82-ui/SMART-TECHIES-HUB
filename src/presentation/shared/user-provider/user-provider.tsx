import { type ReactNode, useContext, useEffect } from "react";
import UserContext from "../auth-context/auth-context";
import { useNavigate } from "react-router-dom";

type UserProviderProps = {
  children: ReactNode;
};

export default function UserProvider({ children }: UserProviderProps) {
  const authContext = useContext(UserContext);
  const navigate = useNavigate();

//   useEffect(() => {
//     if (!authContext?.user) {
//       navigate("/login");
//     }
//   }, [authContext?.user, navigate]);  // use effect will fire after page rendering so users page is loading and blink is coming so use useLayoutEffect here

 useEffect(() => {
    if (!authContext?.user) {
      navigate("/login");
    }
  }, [authContext?.user, navigate]);  // use effect will fire after page rendering so users page is loading and blink is coming so use useLayoutEffect here


  
  if (!authContext?.user) {
    return null;
  }

  return <>{children}</>;
}
