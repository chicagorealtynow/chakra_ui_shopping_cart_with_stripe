import {
      Box,
      Flex,
      Text,
      Button,
      Modal,
      ModalOverlay,
      ModalContent,
      ModalHeader,
      ModalBody,
      ModalCloseButton,
      useDisclosure,
      Badge,
    } from '@chakra-ui/react';
    import { useState, useContext } from 'react';
    import { CartContext } from '../CartContext.jsx';
    import CartProduct from './CartProduct.jsx';

    function NavbarComponent() {
      const cart = useContext(CartContext);
      const { isOpen, onOpen, onClose } = useDisclosure();

      const checkout = async () => {
        await fetch('http://localhost:4000/checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ items: cart.items }),
        })
          .then((response) => {
            return response.json();
          })
          .then((response) => {
            if (response.url) {
              window.location.assign(response.url);
            }
          });
      };

      const productsCount = cart.items.reduce(
        (sum, product) => sum + product.quantity,
        0,
      );

      return (
        <>
          <Flex as="nav" align="center" justify="space-between" padding="1rem">
            <Text fontSize="xl" fontWeight="bold">
              Ecommerce Store
            </Text>
            <Button colorScheme="blue" onClick={onOpen}>
              Cart <Badge ml="1" colorScheme="green">{productsCount}</Badge>
            </Button>
          </Flex>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Shopping Cart</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                {productsCount > 0 ? (
                  <>
                    <Text>Items in your cart:</Text>
                    {cart.items.map((currentProduct, idx) => (
                      <CartProduct
                        key={idx}
                        id={currentProduct.id}
                        quantity={currentProduct.quantity}
                      />
                    ))}
                    <Text fontWeight="bold" mt="4">
                      Total: ${cart.getTotalCost().toFixed(2)}
                    </Text>
                    <Button colorScheme="green" mt="4" onClick={checkout}>
                      Purchase items!
                    </Button>
                  </>
                ) : (
                  <Text>There are no items in your cart!</Text>
                )}
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      );
    }

    export default NavbarComponent;
