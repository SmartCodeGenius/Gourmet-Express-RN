import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [ehAutenticado, setEhAutenticado] = useState(false);
    const [tokenJWT, setTokenJWT] = useState('');
    console.log('Usuario autenticado: ', ehAutenticado);

    const setAuth = (boolean) => {
      setEhAutenticado(boolean);
    }

    async function EhAuth() {
    try {
      const response = await fetch('http://10.0.2.2:5000/auth/eh-verificado', {
        method: 'GET',
        headers: {token: AsyncStorage.token}
      });
        const parseRes = await response.json();
        parseRes === true ? setEhAutenticado(true) : setEhAutenticado(false);         
      } catch (err) {
        console.error(err.message);
      }
    }

    return (
      <AuthContext.Provider value={{ ehAutenticado, EhAuth, setAuth, tokenJWT, setTokenJWT }}>
        {children}
      </AuthContext.Provider>
    );
}