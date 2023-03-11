import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Reviews from "./Reviews";

function App() {
  return (
    <main className="App">
      <section>
        <h1 className="d-flex justify-content-center mx-auto my-4">
          Our Reviews
        </h1>
        <Reviews />
      </section>
    </main>
  );
}

export default App;
