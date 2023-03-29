import { Card, Button, CardGroup, Modal } from "react-bootstrap";
import { useState } from "react";
import ItemCard from "./ItemCard";
import AddDestinationModal from "./AddDestinationModal";

function DailyItinerary({
  dayNumber,
  name,
  destination,
  accommodation,
  transport,
  itineraryItemId,
  fetchData
}) {
  console.log("itineraryItemId:", itineraryItemId);

  const [localDestination, setLocalDestination] = useState(destination); // Add this line

  console.log(localDestination);
  let destItem;
  if (localDestination != undefined) {
    destItem = {
      name: localDestination?.name,
      description: localDestination?.description,
      image: localDestination?.image,
      price: accommodation?.price + transport?.price,
    };
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddDestination = (newDestination) => {
    setLocalDestination(newDestination);
    handleClose();
  };

  return (
    <Card className="mb-3 border rounded">
      <Card.Header>Day {dayNumber}</Card.Header>
      <Card.Body>
        <div className="d-flex" style={{ height: "18rem" }}>
          <div className="w-50 h-100 ">
              <ItemCard
                item={destItem}
                altText="Add destination"
                renderButton={localDestination === undefined}
                onButtonClick={handleShow}
              />
          </div>
                <AddDestinationModal
                show={show}
                handleClose={handleClose}
                handleShow={handleShow}
                handleAddDestination={handleAddDestination}
                fetchData={fetchData} 
                itineraryItemId={itineraryItemId}
                />
        <div className="w-50">
          <CardGroup className="h-100">
              <ItemCard item={accommodation} altText="Add accommodation" />
              <ItemCard item={transport} altText="Add transport" />
            </CardGroup>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
export default DailyItinerary;


