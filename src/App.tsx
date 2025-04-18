import "./App.css";
import Layout from "./components/layout/Layout";
import { BookStoreThemeProvider } from "./context/themeContext";
import Home from "./pages/Home";

function App() {
  return (
    <BookStoreThemeProvider>
      {/* <ThemeSwitcher themeName={themeName} setThemeName={setThemeName} /> */}
      <Layout>
        <Home />
      </Layout>
    </BookStoreThemeProvider>
  );
}

export default App;
