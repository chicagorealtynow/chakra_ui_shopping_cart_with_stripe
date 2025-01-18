import {
      Card,
      CardBody,
      CardFooter,
      Text,
      Button,
      Flex,
      NumberInput,
      NumberInputField,
      NumberInputStepper,
      NumberIncrementStepper,
      NumberDecrementStepper,
    } from '@chakra-ui/react';
    import { CartContext } from '../CartContext.jsx';
    import { useContext, useState } from 'react';

    function ProductCard(props) {
      const product = props.product;
      const cart = useContext(CartContext);
      const productQuantity = cart.getProductQuantity(product.id);
      const [quantity, setQuantity] = useState(1);

      const handleQuantityChange = (value) => {
        setQuantity(value);
      };

      return (
        <Card maxW="sm">
          <CardBody>
            <Text fontWeight="bold">{product.title}</Text>
            <Text>${product.price}</Text>
          </CardBody>
          <CardFooter>
            {productQuantity > 0 ? (
              <Flex align="center" justify="space-between" width="100%">
                <Flex align="center">
                  <Text mr="2">In Cart: {productQuantity}</Text>
                  <Button
                    size="sm"
                    onClick={() => cart.removeOneFromCart(product.id)}
                    className="mx-2"
                  >
                    -
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => cart.addOneToCart(product.id)}
                    className="mx-2"
                  >
                    +
                  </Button>
                </Flex>
                <Button
                  colorScheme="red"
                  size="sm"
                  onClick={() => cart.deleteFromCart(product.id)}
                >
                  Remove
                </Button>
              </Flex>
            ) : (
              <Button
                colorScheme="blue"
                onClick={() => cart.addOneToCart(product.id)}
              >
                Add To Cart
              </Button>
            )}
          </CardFooter>
        </Card>
      );
    }

    export default ProductCard;
