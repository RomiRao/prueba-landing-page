import { useEffect } from "react";
import useFood from "../../../hooks/useFood";
import { Box, Grid, Typography } from "@mui/material";
import ProductSkeleton from "./ProductSkeleton";
import ProductCard from "./ProductCard";

export default function Products() {
  const { obtData, ramen } = useFood();
  useEffect(() => {
    obtData();
  }, []);
  return (
    <>
      <Typography variant="h3" textAlign="center" marginY={4}>
        Our Menu
      </Typography>
      <Box display="flex" alignItems="center" flexDirection="column">
        {ramen.length === 0 ? (
          <Grid
            container
            maxWidth="100%"
            justifyContent="center"
            flexWrap="wrap"
            marginBottom={10}
          >
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
          </Grid>
        ) : (
          <Grid
            container
            maxWidth="100%"
            justifyContent="center"
            flexWrap="wrap"
            marginBottom={10}
          >
            {ramen.map((ramen) => (
              <ProductCard
                key={ramen.id}
                name={ramen.name}
                description={ramen.description}
                price={ramen.price}
                img={ramen.img}
              />
            ))}
          </Grid>
        )}
      </Box>
    </>
  );
}
