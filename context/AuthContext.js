const { createContext, useState } = require("react");

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const register = async (user) => {
    console.log(user);
  };

  const login = async ({ email: identifier, password }) => {
    console.log({ identifier, password });
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
