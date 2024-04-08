import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ChangeEvent, FormEvent, useState } from "react";
import "./App.scss";
import Form from "./components/Form/Form";

type FormInput = {
    name: string;
    email: string;
    message: string;
};

function App() {
    const [formInputs, setFormInputs] = useState<FormInput>({
        name: "",
        email: "",
        message: "",
    });
    

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormInputs((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formInputs);
    };
    
  

    return (
        <Form
            name={formInputs.name}
            email={formInputs.email}
            message={formInputs.message}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
    );
}

export default App;
