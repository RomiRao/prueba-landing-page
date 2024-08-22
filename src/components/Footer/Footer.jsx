import { Box, Typography, IconButton, Grid } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";

const data = [
  { title: "Email", des: "mugiwaras@email.com" },
  { title: "Adress", des: "False streed 123" },
  { title: "Phone", des: "351-751-4846" },
];

export default function Footer() {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      marginTop={5}
      paddingX={8}
      paddingY={4}
      bgcolor="#da533d"
      color="white"
    >
      <Box>
        <Box display="flex" alignItems="center" padding={0.5}>
          <RamenDiningIcon sx={{ marginRight: "12px", fontSize: "2em" }} />
          <Typography sx={{ fontWeight: 500 }}>Mugiwaras</Typography>
        </Box>
        <IconButton aria-label="delete">
          <InstagramIcon sx={{ color: "white" }} />
        </IconButton>
        <IconButton aria-label="delete">
          <FacebookRoundedIcon sx={{ color: "white" }} />
        </IconButton>
      </Box>
      <Box display="flex" flexWrap="wrap" maxWidth={500}>
        {data.map((item) => (
          <Box key={item.title} marginY={1} marginX={3}>
            <Typography sx={{ fontWeight: 500 }}>{item.title}</Typography>
            <Typography sx={{ fontWeight: 200 }}>{item.des}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
