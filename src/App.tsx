import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {/* <Alert>
        Hello <span>World!</span>
      </Alert> */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}

      <Button onClick={() => setAlertVisibility(true)}>Hello Diane!</Button>
    </div>
  );
}

export default App;
