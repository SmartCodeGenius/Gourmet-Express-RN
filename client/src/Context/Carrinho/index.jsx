import { createContext, useState } from "react";

export const carrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);

    return (
        <carrinhoContext.Provider value={{carrinho, setCarrinho}}>
            {children}
        </carrinhoContext.Provider>
    )
}


