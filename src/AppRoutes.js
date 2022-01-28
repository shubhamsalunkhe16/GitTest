import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import Search from "./Pages/Search/SearchPage";
import About from "./Pages/About/AboutPage";
import Contact from "./Pages/Contact/ContactPage";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/about" element={<About />}>
          <Route path=":userId" element={<User />} />
        </Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
};

function User() {
  const { userId } = useParams();
  return (
    <div>
      <h1>use id : {userId}</h1>
      <h1>use id : {userId}</h1>
      <h1>use id : {userId}</h1>
      <h1>use id : {userId}</h1>
      <h1>use id : {userId}</h1>
    </div>
  );
}

export default AppRoutes;
