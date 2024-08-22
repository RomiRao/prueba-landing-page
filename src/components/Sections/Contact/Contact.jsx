import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";

// ICONS
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import BusinessIcon from "@mui/icons-material/Business";

//We will pretend there is a validation with Formik :D

export default function Contact() {
  return (
    <Container sx={{ marginTop: 5, marginBottom: 15, paddingX: 5 }}>
      <Typography
        component="h2"
        marginY={4}
        marginRight={2}
        fontSize="2.5em"
        fontWeight={600}
        sx={{ color: "#222222" }}
      >
        Contact us
      </Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection={{ xs: "column", md: "row" }}
        gap={2} // Add gap between items
      >
        <List
          component="nav"
          aria-label="main mailbox folders"
          sx={{ flex: 1 }}
        >
          <ListItem>
            <ListItemIcon>
              <InstagramIcon />
            </ListItemIcon>
            <ListItemText primary="@mugiwarasramenok" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <LocalPhoneIcon />
            </ListItemIcon>
            <ListItemText primary="351-751-4846" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FmdGoodIcon />
            </ListItemIcon>
            <ListItemText primary="False street 123, Cordoba, Argentina" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MarkunreadIcon />
            </ListItemIcon>
            <ListItemText primary="mugiwaras@email.com" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BusinessIcon />
            </ListItemIcon>
            <ListItemText primary="12:00hs-15:00hs / 20:00hs-23:00hs" />
          </ListItem>
        </List>
        <FormControl
          sx={{ flex: 1, marginLeft: { md: 2 } }}
          component="form"
          noValidate
          autoComplete="off"
        >
          <Box
            display="flex"
            flexDirection={{ xs: "column", sm: "row" }}
            gap={2} // Add gap between name and last name fields
          >
            <Box flex={1}>
              <FormLabel>Name</FormLabel>
              <TextField
                id="first-name"
                placeholder="John"
                variant="outlined"
                fullWidth
                required
                sx={{
                  bgcolor: "rgba(218, 83, 61, 0.07)",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "rgba(218, 83, 61, 0.5)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(218, 83, 61, 0.7)",
                    },
                  },
                }}
              />
            </Box>
            <Box flex={1}>
              <FormLabel>Last Name</FormLabel>
              <TextField
                id="last-name"
                placeholder="Smith"
                variant="outlined"
                fullWidth
                required
                sx={{
                  bgcolor: "rgba(218, 83, 61, 0.07)",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "rgba(218, 83, 61, 0.5)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(218, 83, 61, 0.7)",
                    },
                  },
                }}
              />
            </Box>
          </Box>
          <Box mb={2}>
            <FormLabel>Email</FormLabel>
            <TextField
              id="email"
              placeholder="example@gmail.com"
              variant="outlined"
              fullWidth
              required
              sx={{
                bgcolor: "rgba(218, 83, 61, 0.07)",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "rgba(218, 83, 61, 0.5)",
                  },
                  "&:hover fieldset": {
                    borderColor: "rgba(218, 83, 61, 0.7)",
                  },
                },
              }}
            />
          </Box>
          <Box mb={2}>
            <FormLabel>Message</FormLabel>
            <TextField
              id="message"
              placeholder="Type your message."
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              required
              sx={{
                bgcolor: "rgba(218, 83, 61, 0.07)",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "rgba(218, 83, 61, 0.5)",
                  },
                  "&:hover fieldset": {
                    borderColor: "rgba(218, 83, 61, 0.7)",
                  },
                },
              }}
            />
          </Box>
          <Button
            variant="contained"
            sx={{
              maxWidth: 100,
              borderRadius: 50,
              mt: 2,
              bgcolor: "#DA533D",
            }}
          >
            Send
          </Button>
        </FormControl>
      </Box>
    </Container>
  );
}
