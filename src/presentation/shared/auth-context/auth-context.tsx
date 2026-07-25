import { createContext, useState } from "react";
import type { ReactNode } from "react";

type User = {
  id: string;
  name: string;
} | null;

type AuthContextValue = {
  user: User;
  login: (userData: User) => void;
  logout: () => void;
};

const UserContext = createContext<AuthContextValue | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>(null);

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
