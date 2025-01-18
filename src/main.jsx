import React from 'react';
    import ReactDOM from 'react-dom/client';
    import App from './App.jsx';
    import { ChakraProvider } from '@chakra-ui/react';
    import { CartProvider } from './CartContext.jsx';

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <ChakraProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ChakraProvider>
      </React.StrictMode>,
    )
