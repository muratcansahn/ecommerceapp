import React from "react";
import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <Box borderWidth="5px" borderRadius="lg" p="3">
      <Link to="/">
        <Image
          src="https://i.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY"
          alt="product"
        ></Image>
        <Box pt="3">
          <Box d="flex" alignItems="baseline">
            deneme
          </Box>
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
            macbook
          </Box>

          <Box>100tl</Box>
        </Box>
      </Link>
      <Button colorScheme="telegram" mt="3">
        Add to basket
      </Button>
    </Box>
  );
};

export default index;
