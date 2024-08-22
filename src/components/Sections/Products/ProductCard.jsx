import { Box, Grid, Typography } from "@mui/material";

export default function ProductCard({ name, description, price, img }) {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      lg={4}
      display="flex"
      minHeight={200}
      marginY={2}
      flexWrap={{ xs: "wrap", md: "nowrap" }}
    >
      <Box
        width="100%"
        height={{ xs: "200px", md: "100%" }}
        maxWidth={{ md: "140px" }}
        marginRight={2}
        sx={{
          marginBottom: 2,
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          borderRadius: 2,
          boxShadow: "0px 0px 24px rgba(0,0,0,0.22)",
        }}
      />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        width="100%"
        height="auto"
      >
        <Box>
          <Typography fontSize="1rem" marginBottom={3} fontWeight={600}>
            {name}
          </Typography>
          <Typography fontSize="0.85em" paddingRight={2} marginBottom={3}>
            {description}
          </Typography>
        </Box>
        <Typography fontSize="1.5em" fontWeight={600}>
          $ {price}
        </Typography>
      </Box>
    </Grid>
  );
}
