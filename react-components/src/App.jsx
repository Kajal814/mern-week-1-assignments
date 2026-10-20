
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Button from "./components/Button";
import Form from "./components/Form";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <Header />

      <main className="container" id="home">
        <section className="welcome">
         
          <h1>Learning React Components</h1>
          <p>
            Practicing reusable components, props, state, and events.
          </p>
        </section>

        <section id="about">
          <h2 className="section-title">Reusable Cards</h2>

          <div className="card-grid">
            <Card
              title="HTML & CSS"
              description="Building structured and responsive web pages."
            />

            <Card
              title="JavaScript"
              description="Learning functions, arrays, objects, and events."
            />

            <Card
              title="React"
              description="Creating reusable UI components with props and state."
            />
          </div>
        </section>

        <section className="counter-section">
          <h2>React State & Events</h2>
          <p>Button clicked: {count} times</p>

          <Button text="Click Me" onClick={handleClick} />
        </section>

        <section className="form-section" id="contact">
          <h2 className="section-title">Simple Form</h2>
          <p>Enter your name to test the form component.</p>
          <Form />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
