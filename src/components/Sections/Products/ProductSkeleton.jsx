import { Box, Grid, Skeleton } from "@mui/material";

export default function ProductSkeleton() {
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
      <Skeleton
        variant="rounded"
        width="100%"
        minWidth="150px"
        height="100%"
        maxHeight={360}
        sx={{ marginRight: 5 }}
      />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        minHeight="200px"
      >
        <Box>
          <Skeleton variant="text" sx={{ fontSize: "2rem", marginBottom: 3 }} />
          <Skeleton variant="rounded" width="100%" minHeight={60} />
        </Box>
        <Skeleton
          variant="rounded"
          width={100}
          height={40}
          sx={{ alignSelf: "end" }}
        />
      </Box>
    </Grid>
  );
}
