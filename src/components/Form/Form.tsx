import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Autocomplete, AutocompleteChangeReason, Card, CardContent, FormControl, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField/TextField";
import { ChangeEventHandler,  FormEventHandler, useState } from "react";

type FormProps = {
    name: string;
    email: string;
    message: string;
    handleChange: ChangeEventHandler<HTMLInputElement>;
    handleSubmit: FormEventHandler<HTMLFormElement>;
};

interface Option {
  label: string;
  id: number;
}

function Form({ name, email, message, handleChange, handleSubmit }: FormProps) {
  const [selectedValue, setSelectedValue] = useState<Option | null>(null);

  const handleGameChange = (
    _event: React.SyntheticEvent<Element, Event>,
    newValue: Option | null,
    reason: AutocompleteChangeReason
  ) => {
    setSelectedValue(newValue);
    console.log("Selected value:", newValue);
    console.log(reason);
  };

   

  

  const options: Option[] = [
    { label: "The Godfather", id: 1 },
    { label: "Pulp Fiction", id: 2 },
  ];

    return (
      <FormControl>
        <Stack alignItems="center" justifyContent="center" width="200px">
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              name="name"
              value={name}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              name="email"
              value={email}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              name="message"
              value={message}
              multiline
              rows={4}
              onChange={handleChange}
              margin="normal"
            />

            <Autocomplete
              value={selectedValue}
              onChange={handleGameChange}
              options={options}
              renderInput={(params) => (
                <TextField {...params} label="Select an option" />
              )}
            />
            <Button variant="contained" type="submit" color="primary">
              Submit
            </Button>
          </form>
          <Card variant="outlined">
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.primary"
                gutterBottom
              >
                {name}
              </Typography>
              <Typography variant="h5" component="div">
                {email}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {message}
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </FormControl>
    );
}

export default Form;
