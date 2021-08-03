import { NEXT_URL } from "../config/index";

const { createContext, useState } = require("react");

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const register = async (user) => {};

  const login = async ({ email: identifier, password }) => {
    const res = await fetch(`${NEXT_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
    } else {
      setError(data.message);
      setError(null);
    }
  };

  const logout = async () => {
    console.log("logout");
  };

  const loginUserCheck = async (user) => {
    console.log("Check");
  };

  return (
    <AuthContext.Provider
      value={{ user, error, register, login, logout, loginUserCheck }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
