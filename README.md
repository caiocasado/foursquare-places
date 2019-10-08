# Summary

framework agnostic javascript wrapper for foursquare's APIs

## Tests

yarn or npm `yarn test`

## Commit Policy

please test any functions added and put the tests in the `/tests` folder

## react example

_FYI, this example is not functional and will need to be updated once an actual public package is in the npm registry_

Here is a simple react application:

1. Install React

`npm install -g create-react-app`

2. Create Project

`npm install -g create-react-app`

`create-react-app MrJitters`

`cd MrJitters`

`npm install -i react-foursquare`

3. Modify your src/App.js

```
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Foursquare from "foursquare-places";

const App = () => {
  const [items, setItems] = useState([]);

  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

  const foursquare = new Foursquare(CLIENT_ID, CLIENT_SECRET);

  const params = {
    ll: "37.7749,-122.4194",
    query: "Blue Bottle"
  };

  useEffect(() => {
    foursquare.venues.getVenues(params).then(res => {
      setItems(res.response.venues);
    });
  }, [foursquare, params]);

  return (
    <div>
      <div>Items:</div>
      {items.map(({ id, name }) => (
        <div key={id}>{name}</div>
      ))}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
```

4. Start your React App

`npm start`
