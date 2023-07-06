import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/Sidebar";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import { Container } from "react-bootstrap";
import "./_app.scss";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import WatchScreen from "./screens/watchScreen/WatchScreen";
import SearchScreen from "./screens/SearchScreen";
import SubscriptionScreen from "./screens/subscriptionScreen/SubscriptionScreen";
import ChannelScreen from "./screens/channelScreen/ChannelScreen";

const Layout = ({ children }) => {
  const [sidebar, toggleSideBar] = useState(false);

  const handleToggleSideBar = () => toggleSideBar((value) => !value);
  return (
    <>
      <Header handleToggleSideBar={handleToggleSideBar} />
      <div className="app__container ">
        <SideBar sidebar={sidebar} handleToggleSideBar={handleToggleSideBar} />
        <Container fluid className="app_main ">
          {children}
        </Container>
      </div>
    </>
  );
};

export default function App() {
  const { accessToken, loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !accessToken) {
      navigate("/auth");
    }
  }, [accessToken, loading, navigate]);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomeScreen />
          </Layout>
        }
      />
      <Route
        path="/watch/:id"
        element={
          <Layout>
            <WatchScreen />
          </Layout>
        }
      />
      <Route path="/auth" element={<LoginScreen />} />
      <Route
        path="/search/:query"
        element={
          <Layout>
            <SearchScreen />
          </Layout>
        }
      />
      <Route
        path="/feed/subscriptions"
        element={
          <Layout>
            <SubscriptionScreen />
          </Layout>
        }
      />
      <Route
        path="/channel/:channelId"
        element={
          <Layout>
            <ChannelScreen />{" "}
          </Layout>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
