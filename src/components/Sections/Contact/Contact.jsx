import { Container, Typography } from "@mui/material";

export default function Contact() {
  return (
    <Container sx={{ marginY: 5 }}>
      <Typography variant="h3" textAlign="center">
        Contact us
      </Typography>
      <Typography>
        Horarios de atencion: Lunes a Sabados 12 a 15 y 20 a 23.
      </Typography>
      <Typography>Dirección: Duarte Quiroz 399. Cordoba</Typography>
      <Typography>Tel: 3516852613</Typography>
    </Container>
  );
}
