import "./App.css";
import Selection from "./components/Selection";
import Response from "./components/Response";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Item } from "./components/Response";

function App() {
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://test-hackathon-backend.onrender.com/data")
      .then((response) => {
        const initialData = response.data.data;
        const shuffledData = shuffleArray(initialData);
        const limitedData = shuffledData.slice(0, 21);
        setData(limitedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const shuffleArray = (array: any[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const updateData = (filteredData: Item[]) => {
    const limitedData = filteredData.slice(0, 15); // Take the first 15 items
    setData(limitedData);
  };

  return (
    <div className="mainContainer">
      <Header />
      <main className="container">
        <Selection updateData={updateData} />
        <Response data={data} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
