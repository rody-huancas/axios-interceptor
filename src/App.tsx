import { useEffect, useState } from "react";
import { testingService } from "./services/testing.service";
import { SnackbarUtilitiesConfigurator } from "./utilities/snackbar-manager";
import { SnackbarProvider } from "notistack";

function App() {
  const [morty, setMorty] = useState({} as any);

  const fetchMorty = async () => {
    const { data } = await testingService();
    setMorty(data);
  };

  useEffect(() => {
    fetchMorty();
  }, []);

  return (
    <SnackbarProvider>
      <SnackbarUtilitiesConfigurator />
      <div>{JSON.stringify(morty)}</div>
    </SnackbarProvider>
  );
}

export default App;
