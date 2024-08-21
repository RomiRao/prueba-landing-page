import { useEffect } from "react";
import useFood from "../../../hooks/useFood";
import { Box, Grid, Typography } from "@mui/material";

export default function Products() {
  const { obtData, ramen } = useFood();
  useEffect(() => {
    obtData();
  }, []);
  return (
    <>
      <h1>Products</h1>

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
