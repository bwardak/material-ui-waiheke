import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { FormControl, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField/TextField";
import { ChangeEventHandler, FormEventHandler } from "react";

type FormProps = {
    name: string;
    email: string;
    message: string;
    handleChange: ChangeEventHandler<HTMLInputElement>;
    handleSubmit: FormEventHandler<HTMLFormElement>;
};

function Form({ name, email, message, handleChange, handleSubmit }: FormProps) {
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
                    <Button variant="contained" type="submit" color="primary">
                        Submit
                    </Button>
                </form>
            </Stack>
        </FormControl>
    );
}

export default Form;
