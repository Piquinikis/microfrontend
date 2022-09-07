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
    <div className="h-screen flex flex-col">
      <Header />
      <div className="my-8 flex-1 flex">
        <Routes>
          <Route path="/" element={
            <div className="flex flex-1 items-center justify-center">
              <RemoteWrapper>
                <Home />
              </RemoteWrapper>
            </div>
          } />

          <Route path="/profile" element={
            <div className="flex flex-1 items-center justify-center">
              <RemoteWrapper>
                <ProfileAdapter />
              </RemoteWrapper>
            </div>
          } />       
        </Routes>
      </div>
      <Topics />
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;