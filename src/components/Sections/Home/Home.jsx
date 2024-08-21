import { Button, Container, Divider, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          marginY: 15,
        }}
      >
        <Typography variant="h1">Mugiwaras</Typography>
        <Divider />
        <Typography variant="body" maxWidth={600} marginY={5}>
          We are a ramen restaurant that serves authentic Japanese cuisine in a
          cozy, culturally infused setting. The menu offers a variety of
          traditional ramen dishes, creating a unique and flavorful dining
          experience.
        </Typography>
        <Button sx={{ display: "block" }}> Our Menu</Button>
      </Container>
    </>
  );
}
