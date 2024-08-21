import { Box, Grid, Skeleton, Typography } from "@mui/material";

export default function ProductCard({ name, description, price, img }) {
  return (
    <Grid
      xs={8}
      md={4}
      lg={3}
      item
      display="flex"
      justifyContent="center"
      maxHeight={300}
      margin={5}
    >
      <Box
        width="100%"
        minWidth="150px"
        height="100%"
        maxHeight={360}
        sx={{
          marginRight: 5,
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        minHeight="200px"
      >
        <Box>
          <Typography sx={{ fontSize: "1rem", marginBottom: 3 }}>
            {name}
          </Typography>
          <Typography variant="body">{description}</Typography>
        </Box>
        <Typography variant="rounded">{price}</Typography>
      </Box>
    </Grid>
  );
}
