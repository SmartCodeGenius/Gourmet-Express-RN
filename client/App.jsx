import React from 'react';
import Rotas from './src/routes/StackNavigator';
import 'react-native-gesture-handler';
import { AuthProvider } from './src/Context/Auth';
import { CarrinhoProvider } from './src/Context/Carrinho';

export default function App() {
  return (
    <AuthProvider>
      <CarrinhoProvider>
        <Rotas />
      </CarrinhoProvider>
    </AuthProvider>
  );
};