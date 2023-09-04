import React from "react";
import MainPage from "./components/MainPage";
import "@patternfly/react-core/dist/styles/base.css";
import CalculatorComponent from "./components/CalculatorComponent";
import { Stack, StackItem } from "@patternfly/react-core";

function App() {
  const title = "Welcome to my page";
  const initialValue = 0;
  return (
    <React.Fragment>
      <Stack>
        <StackItem>
          <MainPage title={title} initialValue={initialValue} />
        </StackItem>
        <StackItem>
          <CalculatorComponent />
        </StackItem>
      </Stack>
    </React.Fragment>
  );
}

export default App;
