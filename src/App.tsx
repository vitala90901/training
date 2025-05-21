import { ThemeProvider } from "styled-components";
import { theme } from "./theme/index";


export default function App() {
  return (
    <ThemeProvider theme={theme}>
			<div>Hello World!</div>
    </ThemeProvider>
  );
}
