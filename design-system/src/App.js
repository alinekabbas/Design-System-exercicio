import {Button, ChakraProvider, Flex} from "@chakra-ui/react";
import Card from "./components/Card"
import products from "./assets/products.json"
import { useState } from "react";

function App() {
  const [product, setProduct] = useState(products)

  return (
    <ChakraProvider resetCSS>
      <Flex gap={"16px"} justify={"center"} wrap={"wrap"}>
      {product && product.map((product)=>{
        return <Card product={product} key={product.id}/>
      })}
      </Flex>
      {/* <Button>Estou funcionando</Button> */}
    </ChakraProvider>
  );
}

export default App;
