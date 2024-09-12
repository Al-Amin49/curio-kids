
"use client";
import { createContext, useState, useEffect, useContext, ReactNode } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { toast } from "sonner";

interface User {
    _id: string;
    name: string;
    email: string;
    role: string;
    profilePicture: string;
  }
interface DecodedToken {
    userId: string;
    name: string;
    email: string;
    profilePicture: string;
    role: string;
    iat: number;
    exp: number;
  }
  

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchUser(token);
    } else {
      setLoading(false);
    }
  }, []);

  const fetchUser = async (token: string) => {
    try {
      const res = await axios.get<User>("https://curio-kids-server.vercel.app/protected", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 200) {
        setUser(res.data);
      } else {
        localStorage.removeItem("token");
        setUser(null);
      }
    } catch (err) {
      console.error("Error fetching user:", err);
      localStorage.removeItem("token");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const res = await axios.post<{ token: string }>("https://curio-kids-server.vercel.app/login", {
        email,
        password,
      });

      if (res.status === 200) {
        const { token } = res.data;
        localStorage.setItem("token", token);
        const decoded: DecodedToken = jwtDecode(token);
        console.log("decoded", decoded)

        // Set the user state with the decoded token data, including role and profilePicture
        setUser({
          _id: decoded.userId,
          name: decoded.name,
          email: decoded.email,
          role: decoded.role,
          profilePicture: decoded.profilePicture,
        });
        setLoading(false)
        router.push("/");
      } else {
        alert("Login failed!");
      }
    } catch (err:any) {
      if (err.response && err.response.data.message) {
        alert(err.response.data.message);
      } else {
        console.error("Error logging in:", err);
      }
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      const res = await axios.post("https://curio-kids-server.vercel.app/register", {
        name,
        email,
        password,
      });

      if (res.status === 201) {
        toast.success("Registration successful! You can now log in.");
        router.push("/login");
      } else {
        alert("Registration failed!");
      }
    } catch (err:any) {
      if (err.response && err.response.data.message) {
        alert(err.response.data.message);
      } else {
        console.error("Error registering:", err);
      }
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
