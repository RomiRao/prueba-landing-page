import { Box, Button, Typography } from "@mui/material";
import image from "../../../assets/ramen2.png";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        paddingX: 3,
        justifyContent: "space-around",
        flexWrap: "wrap",
        paddingY: 2,
      }}
    >
      <Box marginTop={7} marginBottom={15}>
        <Typography
          component="h1"
          sx={{
            fontWeight: 500,
            color: "#444444",
            fontSize: { xs: "50px", sm: "4em" },
          }}
        >
          Mugiwaras
        </Typography>

        <Typography maxWidth={450} marginY={3} sx={{ color: "#222222" }}>
          We are a{" "}
          <Typography component="span" sx={{ color: "#da533d" }}>
            ramen restaurant
          </Typography>{" "}
          that serves authentic Japanese cuisine in a cozy, culturally infused
          setting.
        </Typography>
        <Typography maxWidth={450} marginY={3} sx={{ color: "#222222" }}>
          Our menu offers a variety of traditional ramen dishes, creating a
          unique and flavorful dining experience.
        </Typography>
        <Button
          variant="contained"
          startIcon={<MenuBookRoundedIcon />}
          sx={{
            marginRight: 3,
            borderRadius: 50,
            paddingY: 1.5,
            paddingX: 2.5,
            bgcolor: "#da533d",
            boxShadow: "0px 0px 24px rgba(218,83,61,0.50)",
            textTransform: "capitalize",
            fontWeight: 300,
          }}
        >
          Explore our menu
        </Button>
        <Button
          sx={{
            color: "#da533d",
            marginRight: 3,
            borderRadius: 50,
            paddingY: 1.5,
            paddingX: 2.5,
            textTransform: "capitalize",
            fontWeight: 400,
          }}
        >
          Contact us
        </Button>
      </Box>
      <Box
        component="img"
        width="100%"
        sx={{
          maxWidth: "600px",
          maxHeight: "600px",
          filter: "drop-shadow(0px 30px 72px rgba(0,0,0,0.50))",
          marginBottom: 6,
        }}
        alt="ramen photo"
        src={image}
      />
    </Box>
  );
}
