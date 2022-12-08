import { makeStyles, Typography, TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface IFormInput {
  email: string;
  firstName: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().required().email(),
  firstName: yup.string().required().min(2).max(25),
  password: yup.string().required().min(8).max(120),
});

const useStyles = makeStyles((theme) => ({
  heading: {
    textAlign: "center",
    margin: theme.spacing(1, 0, 4),
  },
  submitButton: {
    marginTop: theme.spacing(4),
    padding: "15px",
  },
  buttonWrapper: {
    position: "absolute",
    bottom: "30px",
    width: "84%",
  },
  registerForm: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "500px",
    maxWidth: "100%",
    minWidth: "100px",
    height: "520px",
    padding: "20px 40px",
    borderRadius: "6px",
    boxShadow: "0px 8px 36px #222",
    backgroundColor: "#fefefe",
  },
}));

const RegisterForm: React.FC = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const { registerForm, heading, submitButton, buttonWrapper } = useStyles();

  const onSubmit = (data: IFormInput) => {
    alert("Registered successfully!");
  };

  return (
    <div className={registerForm}>
      <Typography className={heading} variant="h3">
        Register
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          {...register("email")}
          variant="outlined"
          margin="normal"
          label="Email"
          helperText={errors.email?.message}
          error={!!errors.email?.message}
          fullWidth
          required
        />
        <TextField
          {...register("firstName")}
          variant="outlined"
          margin="normal"
          label="First Name"
          helperText={errors.firstName?.message}
          error={!!errors.firstName?.message}
          fullWidth
          required
        />
        <TextField
          {...register("password")}
          variant="outlined"
          margin="normal"
          label="Password"
          helperText={errors.password?.message}
          error={!!errors.password?.message}
          type="password"
          fullWidth
          required
        />
        <div className={buttonWrapper}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={submitButton}
          >
            Register
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
