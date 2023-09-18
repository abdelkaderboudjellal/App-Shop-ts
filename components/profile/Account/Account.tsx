import { ProductsContexts } from "@/components/context/productscontext";
import { Users } from "@/types/types";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { CancelOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from "react-hook-form";
type Props = {};

function Account({}: Props) {
  const { user, setUser } = useContext(ProductsContexts);
  const { data: session, status } = useSession();
  const navigate = useRouter();
  const [userDetails, setUserDetails] = useState<Users>();
  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://products-jtax.onrender.com/user?email=${session?.user?.email}`,
        {
          next: {
            revalidate: 60,
          },
        }
      );
      const data = await res.json();

      setUserDetails(data[0]);
    };
    getData();
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    values: {
      id: userDetails?.id,
      phone: userDetails?.phone,
      company: userDetails?.company,
      email: userDetails?.email,
      firstName: userDetails?.firstName,
      lastName: userDetails?.lastName,
      location: userDetails?.location,
      password: userDetails?.password,
      passwordConfirm: userDetails?.passwordConfirm,
    },
  });

  const styleTypography = {
    fontWeight: 600,
    textTransform: "capitalize",
    fontSize: 18,
  };
  const [open, setOpen] = React.useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  async function updateResource() {
    const apiUrl = `https://products-jtax.onrender.com/user/${userDetails?.id}`;

    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(getValues()),
    };

    try {
      const response = await fetch(apiUrl, requestOptions);

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const responseData = await response.json();
      setOpen(true);
    } catch (error) {
      console.error("Error updating resource:", error);
    }
  }
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };
  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit(() => {
        updateResource();
      })}
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "repeat(1,1fr)", md: "repeat(2,1fr)" },
        width: "100%",
        rowGap: 3,
        columnGap: 2,
        textAlign: "start",
      }}
    >
      <Stack
        component={"div"}
        spacing={1}
        sx={{ width: "100%", display: "none" }}
      >
        <Typography sx={styleTypography}>ID</Typography>
        <TextField
          type="number"
          disabled
          defaultValue={userDetails?.id}
          id="id"
          variant="outlined"
          sx={{ width: { xs: "100%", md: 400 } }}
          {...register("id", {})}
        />
      </Stack>
      <Stack component={"div"} spacing={1} sx={{ width: "100%" }}>
        <Typography sx={styleTypography}>First Name</Typography>
        <TextField
          type="text"
          defaultValue={
            userDetails?.firstName || session?.user?.name?.split(" ")[0]
          }
          id="firstName"
          variant="outlined"
          sx={{ width: { xs: "100%", md: 400 } }}
          {...register("firstName", {
            required: {
              value: true,
              message: "First Name is required",
            },
          })}
        />

        {errors.firstName?.message && (
          <>
            <Alert variant="outlined" severity="error">
              {errors.firstName?.message}
            </Alert>
          </>
        )}
      </Stack>
      <Stack component={"div"} spacing={1}>
        <Typography sx={styleTypography}>Last Name</Typography>
        <TextField
          type="text"
          defaultValue={
            userDetails?.lastName || session?.user?.name?.split(" ")[1]
          }
          id="lastName"
          variant="outlined"
          {...register("lastName", {
            required: {
              value: true,
              message: "Last Name is required",
            },
          })}
        />
        {errors.lastName?.message && (
          <>
            <Alert variant="outlined" severity="error">
              {errors.lastName?.message}
            </Alert>
          </>
        )}
      </Stack>
      <Stack component={"div"} spacing={1}>
        <Typography sx={styleTypography}>Phone</Typography>
        <TextField
          type="number"
          id="Phone"
          variant="outlined"
          defaultValue={userDetails?.phone}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">+213</InputAdornment>
            ),
          }}
          {...register("phone", {})}
        />
      </Stack>
      <Stack component={"div"} spacing={1}>
        <Typography sx={styleTypography}>Company</Typography>
        <TextField
          type="text"
          id="company"
          variant="outlined"
          defaultValue={userDetails?.company}
          {...register("company", {})}
        />
      </Stack>
      <Stack component={"div"} spacing={1}>
        <Typography sx={styleTypography}>location</Typography>
        <TextField
          type="text"
          id="location"
          variant="outlined"
          defaultValue={userDetails?.location}
          {...register("location", {})}
        />
      </Stack>
      <Stack component={"div"} spacing={1}>
        <Typography sx={styleTypography}>Email</Typography>
        <TextField
          type="email"
          disabled
          id="email"
          variant="outlined"
          defaultValue={userDetails?.email || session?.user?.email}
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
          })}
        />

        {errors.email?.message && (
          <>
            <Alert variant="outlined" severity="error">
              {errors.email?.message}
            </Alert>
          </>
        )}
      </Stack>
      <Stack component={"div"} spacing={1}>
        <Typography sx={styleTypography}>Password</Typography>
        <TextField
          type={showPassword ? "text" : "password"}
          id="password"
          variant="outlined"
          defaultValue={userDetails?.password}
          {...register("password", {
            required: {
              value: true,
              message: "Password is required",
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

        {errors.password?.message && (
          <>
            <Alert variant="outlined" severity="error">
              {errors.password?.message}
            </Alert>
          </>
        )}
      </Stack>
      <Stack component={"div"} spacing={1}>
        <Typography sx={styleTypography}>password Confirm</Typography>
        <TextField
          type={showPassword ? "text" : "password"}
          id="passwordConfirm"
          variant="outlined"
          defaultValue={userDetails?.passwordConfirm}
          {...register("passwordConfirm", {
            required: {
              value: true,
              message: "Confirm Password is required",
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

        {errors.passwordConfirm?.message && (
          <>
            <Alert variant="outlined" severity="error">
              {errors.passwordConfirm?.message}
            </Alert>
          </>
        )}
      </Stack>
      <Stack
        component={"div"}
        direction={"row"}
        spacing={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Button
          disabled
          variant="contained"
          size="large"
          color="error"
          sx={{ textAlign: "center" }}
          endIcon={<CancelOutlined />}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          color="success"
          variant="contained"
          size="large"
          sx={{ textAlign: "center" }}
          endIcon={<CheckCircleOutlineIcon />}
        >
          Validate
        </Button>
      </Stack>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Resource updated successfully
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Account;
