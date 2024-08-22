import { useState } from "react";
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
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import BusinessIcon from "@mui/icons-material/Business";

export default function Contact() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };

  const validate = () => {
    let isValid = true;
    const newErrors = {};

    if (!formValues.firstName) {
      newErrors.firstName = "First name is required";
      isValid = false;
    }
    if (!formValues.lastName) {
      newErrors.lastName = "Last name is required";
      isValid = false;
    }
    if (!formValues.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }
    if (!formValues.message) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      // Handle form submission
      console.log("Form submitted:", formValues);
    }
  };

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
        gap={2}
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
          onSubmit={handleSubmit}
        >
          <Box
            display="flex"
            flexDirection={{ xs: "column", sm: "row" }}
            gap={2}
          >
            <Box flex={1}>
              <FormLabel>Name</FormLabel>
              <TextField
                id="firstName"
                placeholder="John"
                variant="outlined"
                fullWidth
                value={formValues.firstName}
                onChange={handleChange}
                error={Boolean(errors.firstName)}
                helperText={errors.firstName}
              />
            </Box>
            <Box flex={1}>
              <FormLabel>Last Name</FormLabel>
              <TextField
                id="lastName"
                placeholder="Smith"
                variant="outlined"
                fullWidth
                value={formValues.lastName}
                onChange={handleChange}
                error={Boolean(errors.lastName)}
                helperText={errors.lastName}
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
              value={formValues.email}
              onChange={handleChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
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
              value={formValues.message}
              onChange={handleChange}
              error={Boolean(errors.message)}
              helperText={errors.message}
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            sx={{
              maxWidth: 100,
              borderRadius: 50,
              mt: 2,
              bgcolor: "#DA533D",
              "&:hover": {
                bgcolor: "#a34028",
                boxShadow: "0px 0px 24px rgba(218,83,61,0.50)",
              },
            }}
          >
            Send
          </Button>
        </FormControl>
      </Box>
    </Container>
  );
}
