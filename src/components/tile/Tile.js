import React from "react";
import { Card } from "react-bootstrap";


export const Tile = ({ tile }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>

      <Card style={{width: '18rem', margin: '1rem'}}>
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
