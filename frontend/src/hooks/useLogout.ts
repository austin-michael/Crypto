import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logOut = () => {
    // remove the user from local storage
    localStorage.removeItem("user");

    // update AuthContext
    dispatch({ type: "LOGOUT" });
  };

  return { logOut };
};
