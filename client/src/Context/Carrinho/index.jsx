import { createContext, useState } from "react";

export const carrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([{nome: "", preço: 0, id:0,quantia:0,observacao:""}]);

    return (
        <carrinhoContext.Provider value={{carrinho, setCarrinho}}>
            {children}
        </carrinhoContext.Provider>
    )
}


