import { Button, TextField } from "@mui/material";
import useToken from "./Hooks/useToken";

const UnAutentificationApp = () => {
  const [setIsLoggedIn] = useToken(true);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const { email, password } = evt.target.elements;

    const res = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: email.value.trim(),
        password: password.value.trim(),
      }),
    });

    const data = await res.json();

    if (data?.token) {
      setIsLoggedIn(data?.token);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <TextField id="outlined-basic" label="Enter Email" variant="outlined" name="email" />
      <TextField
        id="outlined-basic"
        label="Enter Password"
        variant="outlined"
        name="password"
      ></TextField>


      <Button className="form__button" variant="contained" type={"submit"}>
        Submit
      </Button>
    </form>
  );
};
export default UnAutentificationApp;
