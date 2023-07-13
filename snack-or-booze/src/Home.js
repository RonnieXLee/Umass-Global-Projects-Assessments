import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home({ snackCount, drinkCount }) {
  return (
    <section className="col-md-8">
      <Card className="card">
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
          <p>Snack Count: {snackCount}</p>
          <p>Drink Count: {drinkCount}</p>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
