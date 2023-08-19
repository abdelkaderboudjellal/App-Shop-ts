"use client";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Facebook, GitHub, Google, Twitter } from "@mui/icons-material";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Users } from "@/types/types";
import { signIn } from "next-auth/react";

const SingUp = () => {
  const theme = useTheme();
  const Navigate = useRouter();
  const MethodSingUp = [
    { id: 1, Name: "Github", Images: <GitHub /> },
    { id: 2, Name: "Google", Images: <Google /> },
  ];
  const url = "https://products-jtax.onrender.com/user?email";
  const [data, setData] = useState<Users | undefined>();
  const updatedata = () => {
    const data = getValues();
    fetch(`${url}`, {
      method: "POST",
      body: JSON.stringify(getValues()),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => setData(json.data));
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };
  async function handleGoogleSignin() {
    signIn("google", { callbackUrl: "http://localhost:3000/" });
  }
  async function handleGitHubSignin() {
    signIn("github", { callbackUrl: "http://localhost:3000/" });
  }
  return (
    <>
      <Box component="main" sx={{ py: 25 }}>
        <CssBaseline />
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
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            minHeight: "650px",
          }}
        >
          {" "}
          {/*    <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-around"
            alignItems="flex-start"
            spacing={2}
            width="100%"
            py={2}
          >
            {MethodSingUp.map((Item) => {
              return (
                <Button
                  key={Item.id}
                  variant="outlined"
                  sx={{
                    color: "primary",
                    borderColor: "primary",
                    "&:hover": {
                      borderColor: "primary",
                      color: "primary",
                    },
                    px: 1,
                    width: { xs: "100%", sm: "auto" },
                  }}
                  startIcon={Item.Images}
                >
                  {Item.Name}
                </Button>
              );
            })}
          </Stack> */}
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
          <Typography component="h1" variant="h5" fontWeight={700} py={2}>
            Sign in
          </Typography>
          <ButtonGroup
            aria-label="outlined button group"
            fullWidth
            sx={{ my: 2 }}
          >
            <Button
              variant="outlined"
              onClick={() => {
                Navigate.push("/login");
              }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                Navigate.push("/singup");
              }}
            >
              Sign in
            </Button>
          </ButtonGroup>
          <form
            noValidate
            onSubmit={handleSubmit((data) => {
              updatedata();

              Navigate.push("/login");
            })}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  color="primary"
                  autoComplete="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First name"
                  autoFocus
                  {...register("firstName", {
                    required: {
                      value: true,
                      message: "first Name is required",
                    },
                  })}
                />
                <Typography
                  component="p"
                  sx={{ color: "red", textAlign: "start" }}
                >
                  {errors.firstName?.message}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  color="primary"
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last name"
                  autoComplete="Last-name"
                  {...register("lastName", {
                    required: { value: true, message: "Last Name is required" },
                  })}
                />
                <Typography
                  component="p"
                  sx={{ color: "red", textAlign: "start" }}
                >
                  {errors.lastName?.message}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  color="primary"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  autoComplete="email"
                  {...register("email", {
                    required: { value: true, message: "email is required" },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please Enter A Valid Email!",
                    },
                    validate: {
                      emailAvailable: async (fieldValue) => {
                        const response = await fetch(
                          `https://products-jtax.onrender.com/user?email=${fieldValue}`
                        );
                        const data = await response.json();
                        return data.length === 0 || "Email already exists";
                      },
                    },
                  })}
                />
                <Typography
                  component="p"
                  sx={{ color: "red", textAlign: "start" }}
                >
                  {errors.email?.message}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  dir="ltr"
                  color="primary"
                  variant="outlined"
                  required
                  fullWidth
                  label="password"
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
                />
                <Typography
                  component="p"
                  sx={{ color: "red", textAlign: "start" }}
                >
                  {errors.password?.message}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  dir="ltr"
                  color="primary"
                  variant="outlined"
                  required
                  fullWidth
                  label="Confirm password"
                  type={showPassword ? "text" : "password"}
                  id="passwordConfirm"
                  autoComplete="current-password"
                  {...register("passwordConfirm", {
                    required: {
                      value: true,
                      message: "Confirm Passwordis required",
                    },
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long!",
                    },
                    validate: (match) => {
                      const password = getValues("password");
                      return match === password || "Passwords should match!";
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
                />
                <Typography
                  component="p"
                  sx={{ color: "red", textAlign: "start" }}
                >
                  {errors.passwordConfirm?.message}
                </Typography>
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: "primary",
                "&:hover": { bgcolor: "primary" },
              }}
            >
              Register
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/login" style={{ color: "blue" }}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default SingUp;
