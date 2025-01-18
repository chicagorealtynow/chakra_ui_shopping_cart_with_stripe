import { Container } from '@chakra-ui/react';
    import NavbarComponent from './components/Navbar.jsx';
    import { BrowserRouter, Routes, Route } from 'react-router-dom';
    import Cancel from './pages/Cancel.jsx';
    import Success from './pages/Success.jsx';
    import Store from './pages/Store.jsx';

    function App() {
      return (
        <Container maxW="container.xl">
          <NavbarComponent />
          <BrowserRouter>
            <Routes>
              <Route index element={<Store />} />
              <Route path="success" element={<Success />} />
              <Route path="cancel" element={<Cancel />} />
            </Routes>
          </BrowserRouter>
        </Container>
      );
    }

    export default App;
