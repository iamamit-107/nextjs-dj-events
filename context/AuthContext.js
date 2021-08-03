import { useRouter } from "next/router";
import { NEXT_URL } from "../config/index";

const { createContext, useState, useEffect } = require("react");

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const router = useRouter();

  // Persist the logged in user
  useEffect(() => loginUserCheck(), []);

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
      router.push("/auth/dashboard");
    } else {
      setError(data.message);
      setError(null);
    }
  };

  const logout = async () => {
    console.log("logout");
  };

  const loginUserCheck = async (user) => {
    const res = await fetch(`${NEXT_URL}/api/user`);
    const data = await res.json();

    if (res.ok) {
      setUser(data);
    } else {
      setUser(null);
    }
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
