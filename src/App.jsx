import "./App.scss";
import AutentificationApp from "./AutentificationApp";
import UnAutentificationApp from "./UnAutentificationApp";
import useToken from "./Hooks/useToken";

function App() {
  const [token] = useToken();
  

  if (token) {
    return <AutentificationApp />;
  } else {
    return <UnAutentificationApp />;
  }
}

export default App;
