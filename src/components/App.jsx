import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, lazy, Suspense } from "react";
import { fetchCurrentUser } from "redux/auth/auth-operation";
import AppBar from "./AppBar";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import authSelectors from "redux/auth/auth-selectors";
import { Container, CssBaseline, Skeleton } from "@mui/material";

const HomeView = lazy(() => import("./HomeView/HomeView"));
const Register = lazy(() => import("./Register/Register"));
const Login = lazy(() => import("./Login/Login"));
const ContactsView = lazy(() => import("./ContactsView/ContactsView"));

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
              <Suspense
                fallback={<Skeleton />}>
                <PublicRoute>
                  <HomeView />
                </PublicRoute>
              </Suspense>
            } />
            <Route path="/register" element={
              <Suspense
                fallback={<Skeleton />}>
                <PublicRoute restricted redirectTo="/contacts">
                  <Register />
                </PublicRoute>
              </Suspense>
            } />
            <Route path="/login" element={
              <Suspense
                fallback={<Skeleton />}>
                <PublicRoute restricted redirectTo="/contacts">
                  <Login />
                </PublicRoute>
              </Suspense>
            } />
            <Route path="/contacts" element={
              <Suspense
                fallback={<Skeleton />}>
                 <PrivateRoute>
                  <ContactsView />
                </PrivateRoute>
              </Suspense>
            } />
            <Route path='*' element={<Navigate to="/" replace />} />
            </Routes>
        </Container>
      </>
    )
  );
}
