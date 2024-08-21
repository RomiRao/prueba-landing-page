import { useEffect } from "react";
import useFood from "../../../hooks/useFood";
import { Box, Grid } from "@mui/material";
import ProductSkeleton from "./ProductSkeleton";

export default function Products() {
  const { obtData, ramen } = useFood();
  useEffect(() => {
    obtData();
  }, []);
  return (
    <>
      <h1>Products</h1>
      <Box display="flex" alignItems="center" flexDirection="column">
        <Grid
          container
          maxWidth="100%"
          justifyContent="center"
          flexWrap="wrap"
          marginY={10}
        >
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
        </Grid>
      </Box>
      {/* {ramen.length === 0 ? (
        <Box></Box>
      ) : (
        <Grid container>
          {ramen.map((ramen) => (
            <Grid item key={ramen.id} xs={3} padding={3}>
              <Typography>{ramen.name}</Typography>
            </Grid>
          ))}
        </Grid>
      )} */}
    </>
  );
}
