import {
      Flex,
      Text,
      Button,
      NumberInput,
      NumberInputField,
      NumberInputStepper,
      NumberIncrementStepper,
      NumberDecrementStepper,
    } from '@chakra-ui/react';
    import { CartContext } from '../CartContext.jsx';
    import { useContext } from 'react';
    import { getProductData } from '../productsStore.jsx';

    function CartProduct(props) {
      const cart = useContext(CartContext);
      const productData = getProductData(props.id);

      return (
        <Flex align="center" justify="space-between" mb="2">
          <Text fontWeight="bold">
            {productData.title}
          </Text>
          <Flex align="center">
            <Text mr="2">Quantity: {props.quantity}</Text>
            <Text fontWeight="bold">
              ${(productData.price * props.quantity).toFixed(2)}
            </Text>
          </Flex>
        </Flex>
      );
    }

    export default CartProduct;
