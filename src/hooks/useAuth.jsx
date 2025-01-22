import { useContext } from "react";
import { bistroContext } from "../Provider/AuthProvider";

const useAuth = () => {
  const auth = useContext(bistroContext);
  return auth;
};

export default useAuth;
