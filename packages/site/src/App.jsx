import React from "react";
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RemoteWrapper from "./components/RemoteWrapper";

const ProfileAdapter = React.lazy(() => import("./components/ProfileAdapter"));
const Home = React.lazy(() => import("blogpage/App"));
const Topics = React.lazy(() => import("topics/App"));

import "./index.scss";

export const App = () => (
  <BrowserRouter>
    <Header />

    <div className="mx-auto flex flex-wrap py-6">
      <Routes>
        <Route path="/" element={
          <RemoteWrapper>
            <Home />
          </RemoteWrapper>
        } />

        <Route path="/profile" element={
          <RemoteWrapper>
            <ProfileAdapter />
          </RemoteWrapper>
        } />       
      </Routes>

      <Topics />
    </div>

    <Footer />

  </BrowserRouter>
);

export default App;