import React from "react";
import { useParams, Redirect } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function FoodItem({ items, itemType }) {
  const { id } = useParams();

  const item = items.find((item) => item.id === id);

  if (!item) {
    return <Redirect to={`/${itemType}`} />;
  }

  return (
    <section>
      <Card className="card">
        <CardBody>
          <CardTitle className="font-weight-bold text-center">{item.name}</CardTitle>
          <CardText className="font-italic">{item.description}</CardText>
          <p>
            <b>Recipe:</b> {item.recipe}
          </p>
          <p>
            <b>Serve:</b> {item.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodItem;
