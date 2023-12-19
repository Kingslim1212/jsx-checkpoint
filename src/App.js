import React from "react";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import { Card } from "react-bootstrap";

const firstName = "Olorunleke"; // Replace with your first name

const App = () => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Image  />
        <Card.Body>
          <Name  />
          <Price  />
          <Description  />
        </Card.Body>
      </Card>
      <p style={{ marginTop: "20px" }}>Hello, {firstName ? firstName : "there"}!</p>
      {firstName && <img src="path/to/your/image.jpg" alt="Your Image" />}
    </div>
  );
};

export default App;