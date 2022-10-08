import { useState } from "react";
import "./App.css";
import Universities from "./components/universities.component";

function App() {
  const [searchText, setSearchText] = useState("");
  const [isFetchData, setIsFetchData] = useState(false);

  const searchHandler = (event) => {
    setSearchText(event.target.value);
    setIsFetchData(false);
  };

  return (
    <main>
      <label htmlFor="searchBox">Search Country</label>
      <input type="search" value={searchText} onChange={searchHandler} />
      <button onClick={() => setIsFetchData(true)}>Fetch Data</button>
      <Universities searchText={searchText} isFetchData={isFetchData} />
    </main>
  );
}

export default App;
