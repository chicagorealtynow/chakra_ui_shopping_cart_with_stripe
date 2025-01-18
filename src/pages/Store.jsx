import { Grid, GridItem, Heading } from '@chakra-ui/react';
    import { productsArray } from '../productsStore.jsx';
    import ProductCard from '../components/ProductCard.jsx';

    function Store() {
      return (
        <>
          <Heading align="center" padding="1rem">
            Welcome to the store!
          </Heading>
          <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6}>
            {productsArray.map((product, idx) => (
              <GridItem key={idx} align="center">
                <ProductCard product={product} />
              </GridItem>
            ))}
          </Grid>
        </>
      );
    }

    export default Store;
