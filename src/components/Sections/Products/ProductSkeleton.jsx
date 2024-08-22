import { Box, Grid, Skeleton } from "@mui/material";

export default function ProductSkeleton() {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      lg={4}
      display="flex"
      flexWrap={{ xs: "wrap", md: "nowrap" }}
      minHeight={200}
      marginY={2}
    >
      <Skeleton
        variant="rectangular"
        width={{ xs: "100%", md: "140px" }}
        height={{ xs: "200px", md: "100%" }}
        sx={{
          marginRight: { md: 2 },
          marginBottom: { xs: 2, md: 0 },
        }}
      />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        width="100%"
      >
        <Box>
          <Skeleton variant="text" sx={{ fontSize: "2rem", marginBottom: 3 }} />
          <Skeleton
            variant="rounded"
            width="100%"
            height={60}
            sx={{ marginBottom: 3 }}
          />
        </Box>
        <Skeleton variant="rounded" width={100} height={40} />
      </Box>
    </Grid>
  );
}
