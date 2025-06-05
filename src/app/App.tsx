import { ThemeProvider } from "styled-components";
import { theme } from "../theme/index";
import { Dashboard } from "../pages/Dashboard";


export default function App() {
  return (
    <ThemeProvider theme={theme}>
			<Dashboard />
    </ThemeProvider>
  );
}
