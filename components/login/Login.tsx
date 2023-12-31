"use client";
import { useState, useEffect } from "react";
/* import { Link, useNavigate } from "react-router-dom"; */

import { useForm } from "react-hook-form";
// import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
  ButtonGroup,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Facebook, GitHub, Google, Twitter } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Users } from "@/types/types";
import { signIn } from "next-auth/react";

type FormValues = {
  email: string;
  password: string;
};
const Login = () => {
  const theme = useTheme();
  const Navigate = useRouter();

  const url = "https://products-jtax.onrender.com/user";
  const [users, setUsers] = useState<Users[]>([]);
  const [messageAll, setMessageAll] = useState(false);
  const [email, setEmail] = useState();

  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const data = () => {
    const url1 = "https://products-jtax.onrender.com/user";
    fetch(`${url1}`)
      .then((res) => {
        return res.json();
      })
      .then((users) => {
        setUsers(users);
      });
  };
  useEffect(() => {
    data();
  }, []);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };
  async function handleGoogleSignin() {
    signIn("google", { callbackUrl: "https://products-jtax.onrender.com/" });
  }
  async function handleGitHubSignin() {
    signIn("github", { callbackUrl: "https://products-jtax.onrender.com/" });
  }
  return (
    <div className="login">
      <Box component="main" sx={{ py: 25 }}>
        <Container
          maxWidth="xs"
          sx={{
            boxShadow: 3,
            borderRadius: 2,
            px: 2,
            py: 4,
            my: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            minHeight: "650px",
            justifyContent: "space-around",

            backgroundColor: (theme) =>
              theme.palette.mode === "light" ? "white" : "#38393acc",
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-around"
            alignItems="center"
            spacing={2}
            width="100%"
            py={2}
          >
            <Button
              variant="outlined"
              onClick={handleGoogleSignin}
              sx={{
                color: "primary",
                borderColor: "primary",
                "&:hover": {
                  borderColor: "primary",
                  color: "primary",
                },
                px: 1,
                width: { xs: "100%", sm: "100%" },
              }}
              startIcon={<Google />}
            >
              {"Google"}
            </Button>
            <Button
              variant="outlined"
              onClick={handleGitHubSignin}
              sx={{
                color: "primary",
                borderColor: "primary",
                "&:hover": {
                  borderColor: "primary",
                  color: "primary",
                },
                px: 1,
                width: { xs: "100%", sm: "100%" },
              }}
              startIcon={<GitHub />}
            >
              {"Github"}
            </Button>
          </Stack>
          <Divider sx={{ width: "100%" }}>OR</Divider>
          <Typography
            component="h1"
            variant="h5"
            width="100%"
            textAlign="center"
            fontWeight={700}
          >
            Login
          </Typography>
          <ButtonGroup
            aria-label="outlined button group"
            fullWidth
            sx={{ my: 2 }}
          >
            <Button
              variant="contained"
              onClick={() => {
                Navigate.push("/login");
              }}
            >
              Login
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                Navigate.push("/singup");
              }}
            >
              Sign in
            </Button>
          </ButtonGroup>
          <Box
            component="form"
            onSubmit={handleSubmit((data) => {
              users.map((user: Users) => {
                if (
                  user.email === data.email &&
                  user.password === data.password
                ) {
                  signIn("credentials", {
                    email: data.email,
                    password: data.password,
                    redirect: true,
                  });
                  /*  Navigate.push("/"); */
                }
              });
              setMessageAll(!messageAll);
            })}
            noValidate
            sx={{ mt: 1, width: "100%" }}
          >
            <TextField
              color="primary"
              margin="normal"
              required
              fullWidth
              id="email"
              label={"Email Address"}
              /*     name="email" */
              autoComplete="email"
              autoFocus
              {...register("email", {
                required: { value: true, message: "email is required" },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please Enter A Valid Email!",
                },
              })}
            />
            <Typography component="p" sx={{ color: "red", textAlign: "start" }}>
              {errors.email?.message}
            </Typography>
            <TextField
              dir="ltr"
              color="primary"
              margin="normal"
              required
              fullWidth
              /*      name="password" */
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              {...register("password", {
                required: { value: true, message: "password is required" },
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long!",
                },
              })}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              label={"password"}
            />
            <Typography component="p" sx={{ color: "red", textAlign: "start" }}>
              {errors.password?.message}{" "}
              {messageAll && "email or password incorrect"}
            </Typography>
            <FormControlLabel
              sx={{ py: 2, width: 1 }}
              control={<Checkbox value="remember" color="primary" />}
              label={"Remember"}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: "primary",
                "&:hover": { bgcolor: "primary" },
              }}
            >
              {"Sign in"}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" style={{ color: "blue" }}>
                  {"Forgot password?"}
                </Link>
              </Grid>
              <Grid item>
                <Link href="/singup" style={{ color: "blue" }}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Login;
