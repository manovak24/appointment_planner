import React from "react";
import { Card } from "react-bootstrap";


export const Tile = ({ tile }) => {
  return (
    <div className="tile-container">

      <Card>
        <Card.Body>
          <Card.Text>
            {Object.values(tile).map((value, index) => (
              <p key={index} className={`${index === 0 ? "tile-title" : ""} tile`}>
                {value}
              </p>
            ))}
          </Card.Text>
        </Card.Body>
      </Card>

    </div>
  );
};
