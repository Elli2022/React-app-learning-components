import ListGroup from "./components/ListGroup";
// import { useState } from "react";
// import Alert from "./components/Alert";
// import Button from "./components/button";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "Lodnon", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );

  //----------------------------------------------------------------
  // return (
  //   <div>
  //     <Alert>
  //       Hello <span>World</span>{" "}
  //     </Alert>
  //   </div>
  // );

  //----------------------------------------------------------------

  // const [alertVisible, setAlertVisibility] = useState(false);
  // return (
  //   <div>
  //     {alertVisible && (
  //       <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
  //     )}
  //     <Button color="secondary" onClick={() => setAlertVisibility(true)}>
  //       My Button
  //     </Button>
  //   </div>
  // );
}

export default App;
