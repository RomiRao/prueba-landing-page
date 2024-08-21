import { Box, Typography, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginY={5}
      >
        <Box>
          <Typography>Lunes a Sabados 12 a 15 y 20 a 23.</Typography>
          <Typography>3516852613</Typography>
          <Typography>Duarte Quiroz 399. Cordoba</Typography>
        </Box>
        <Box>
          <IconButton aria-label="delete" color="primary">
            <InstagramIcon />
          </IconButton>
          <IconButton aria-label="delete" color="primary">
            <WhatsAppIcon />
          </IconButton>
          <IconButton aria-label="delete" color="primary">
            <EmailIcon />
          </IconButton>
        </Box>
      </Box>
      <Typography textAlign="center">
        Disclaimer: This is only a test project for interview.
      </Typography>
    </Box>
  );
}
