import { Routes, Route } from "react-router-dom";
import HomeView from "./HomeView/HomeView";
import Register from './Register/Register';
import Login from './Login/Login';
import ContactsView from './ContactsView/ContactsView';
import AppBar from "./AppBar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCurrentUser } from "redux/auth/auth-operation";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { useSelector } from "react-redux";
import authSelectors from "redux/auth/auth-selectors";
import { Container, CssBaseline } from "@mui/material";

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <>
        <AppBar />
        <Container>
          <CssBaseline />
          <Routes>
            <Route path="/" element={
              <PublicRoute>
                <HomeView />
              </PublicRoute>
            } />
            <Route path="/register" element={
              <PublicRoute restricted redirectTo="/contacts">
                <Register />
              </PublicRoute>
            } />
            <Route path="/login" element={
              <PublicRoute restricted redirectTo="/contacts">
                <Login />
              </PublicRoute>
            } />
            <Route path="/contacts" element={
              <PrivateRoute>
                <ContactsView />
              </PrivateRoute>
            } />
            </Routes>
        </Container>
      </>
    )
  );
}
