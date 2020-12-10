import React, { Suspense } from "react";
import "./App.css";
import Header from "./components/header/header";
import Main from "./components/main/main";
const Footer = React.lazy(() => import("./components/footer/footer"));

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Suspense fallback={<div>Загрузка...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
