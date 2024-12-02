import React from "react";
import Routes from "./Routes";
import { SnackbarProvider } from 'notistack';
function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <Routes />
      </SnackbarProvider>
  );
}

export default App;
