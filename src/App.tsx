import React from "react";
import MainPage from "./components/MainPage";
import "@patternfly/react-core/dist/styles/base.css";

function App() {
  const title = "Welcome to my page";
  const initialValue = 0;
  return <MainPage title={title} initialValue={initialValue} />;
}

export default App;
