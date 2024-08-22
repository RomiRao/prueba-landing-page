import { useEffect } from "react";
import useFood from "../../../hooks/useFood";
import { Box, Grid, Typography } from "@mui/material";
import ProductSkeleton from "./ProductSkeleton";
import ProductCard from "./ProductCard";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";

export default function Products() {
  const { obtData, ramen } = useFood();

  useEffect(() => {
    obtData();
  }, []);

  return (
    <Box paddingX={{ xs: 3, sm: 10 }}>
      <Box display="flex" alignItems="center">
        <Typography
          component="h2"
          marginY={4}
          marginRight={2}
          fontSize="2em"
          fontWeight={500}
          sx={{ color: "#222222" }}
        >
          Menu
        </Typography>
        <MenuBookRoundedIcon sx={{ fontSize: "2em", color: "#222222" }} />
      </Box>
      <Grid container flexWrap="wrap" marginBottom={10} spacing={2}>
        {ramen.length === 0 ? (
          <>
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
          </>
        ) : (
          ramen.map((ramen) => (
            <ProductCard
              key={ramen.id}
              name={ramen.name}
              description={ramen.description}
              price={ramen.price}
              img={ramen.img}
            />
          ))
        )}
      </Grid>
    </Box>
  );
}
