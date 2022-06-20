import React, { useEffect } from "react";

const URL = "http://localhost:5000/events";

export default function EventFetcher() {
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((results) => console.log(results))
      .catch((err) => console.log(err));
  }, []);
}
