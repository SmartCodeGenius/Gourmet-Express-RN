import React from 'react';
import Rotas from './src/routes/StackNavigator';
import 'react-native-gesture-handler';
import { AuthProvider } from './src/Context/Auth';

export default function App() {
  return (
    <AuthProvider>
      <Rotas />
    </AuthProvider>
  );
};