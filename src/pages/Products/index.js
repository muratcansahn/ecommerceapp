import React from "react";
import Card from "../../components/Card";
import { Grid, Box } from "@chakra-ui/react";

const index = () => {
  return (
    <div>
      <Grid templateColumns="repeat(3, 1fr)" minChildWidth="120px" gap={6}>
        <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card />
      </Grid>
    </div>
  );
};

export default index;
