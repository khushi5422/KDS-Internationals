import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

export default function GoldenCard(props: any) {
  return (
    <>
      <CardGroup>
        <Card className="sparkle u-hover--sparkle">
          <Card.Img
            variant="top"
            src="https://www.goodreturns.in/img/2014/12/29-1419829109-online-600.jpg"
          />
          <Card.Body>
            <Card.Title> Black Cardamoom</Card.Title>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
}
