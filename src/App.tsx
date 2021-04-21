import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Routes />
    </ChakraProvider>
  );
};

export default App;
