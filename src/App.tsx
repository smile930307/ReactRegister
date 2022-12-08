import { Container, makeStyles } from "@material-ui/core";

import RegisterForm from "./components/RegisterForm";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: "97vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

const App: React.FC = (): JSX.Element => {
  const { wrapper } = useStyles();

  return (
    <Container maxWidth="sm" className={wrapper}>
      <RegisterForm />
    </Container>
  );
};

export default App;
