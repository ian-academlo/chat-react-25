import { ThemeProvider } from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./modules/auth/login/pages/LoginPage";
import theme from "./theme/newTheme";
import AuthLayout from "./modules/auth/AuthLayout";
import RegisterPage from "./modules/auth/register/pages/RegisterPage";
import Chat from "./modules/chat/pages/Chat";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "/chats",
    element: <Chat />,
  },
]);
