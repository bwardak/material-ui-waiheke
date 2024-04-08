import "./App.scss";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container, FormControl, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField/TextField";
import { useState } from "react";

function App() {
  type FormInput = {
    name: string;
    email: string;
    message: string;
  };
  const [formInputs, setformInputs] = useState<FormInput>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = () => {
    setformInputs({ name: formInputs.name, email: formInputs.email });
  };

  return (
    <FormControl maxWidth="20px">
      <Stack alignitems="center" justifyContent="center" width="200px">
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          name="name"
          value={formInputs.name}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          name="email"
          value={formInputs.email}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Message"
          variant="outlined"
          name="message"
          value={0}
          multiline
          rows={4}
          onChange={handleChange}
          margin="normal"
        />
        <Button variant="contained" type="submit" color="primary">
          Submit
        </Button>
      </Stack>
    </FormControl>
  );
}

export default App;
