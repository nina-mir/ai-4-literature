import "./Response.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface Item {
  id: number;
  title: string;
  author: string;
  url: string;
  time_2_read: string;
  response: string;
}

library.add(faClock);

const Response = ({ data }: { data: Item[] }) => {
  return (
    <>
      <div className="responseContainer">
        <div className="row">
          {data?.map((item) => (
            <div className="col-md-4" key={item.id}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <section className="responseSection">
                  <h5 className="responseSectionTitle">{item.title}</h5>
                  <h6 className="responseSectionAuthor">{item.author}</h6>
                  <p className="responseSectionResponse">{item.response}</p>
                  <section className="timer">
                    <p style={{ marginBottom: "0" }}>{item.time_2_read}</p>
                    <FontAwesomeIcon icon={faClock} className="timerIcon" />
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
