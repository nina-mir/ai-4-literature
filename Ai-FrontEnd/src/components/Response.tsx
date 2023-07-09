import { useEffect, useState } from "react";
import "./Response.css";
import backendData from "../../../data/backend_data.json";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Item {
  id: number;
  title: string;
  author: string;
  url: string;
  time_2_read: string;
  response: string;
}

library.add(faClock);

const Response = () => {
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    setData(backendData);
  }, []);

  console.log(data);
  return (
    <>
      <div className="responseContainer">
        <div className="row">
          {data.map((item) => (
            <div className="col-md-4" key={item.id}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <section className="responseSection">
                  <p>{item.title}</p>
                  <p>{item.author}</p>
                  <section className="timer">
                    <p style={{ marginBottom: "0" }}>{item.time_2_read}</p>
                    <FontAwesomeIcon icon="clock" className="timerIcon" />
                  </section>
                </section>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Response;
