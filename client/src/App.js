import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Images from "./Images";
function App() {
  const [image, setImage] = useState();
  const [parkName, setParkName] = useState();
  const [search, setSearch] = useState();
  const getApi = () => {
    axios
      .get(
        "https://developer.nps.gov/api/v1/parks?limit=10&start=0&api_key=lF66DX3RdHNuTi9sJPeeP76tfvjChRv0uICHEK5s",
        "accept: application/json"
      )
      .then((response) => {
        console.log(response);
        const allEl = response.data.data.map((el) => {
          return el;
        });
        const images = allEl.map((el) => {
          return el.images.map((elImg) => {
            return elImg.url;
          });
        });
        const parkName = allEl.map((elName) => {
          return elName.fullName;
        });
        setImage(
          allEl.map((el) => {
            return (
              <Images
                id={el.id}
                heading={el.fullName}
                img={el.images[0].url}
                desc={el.description}
                location={`${el.addresses[0].line1}, ${el.addresses[0].city}, ${el.addresses[0].stateCode}, ${el.addresses[0].postalCode} `}
              />
            );
          })
        );
        setParkName(parkName);
      });
  };

  const searchApi = () => {
    axios
      .get(
        `https://developer.nps.gov/api/v1/parks?q=${search}&limit=10&start=0&api_key=lF66DX3RdHNuTi9sJPeeP76tfvjChRv0uICHEK5s`
      )
      .then((response) => {
        document.querySelector(".fa-chevron-down").style.display = "block";
        const allEl = response.data.data.map((el) => {
          return el;
        });
        console.log(response);
        setImage(
          allEl.map((el) => {
            return (
              <Images
                id={el.id}
                heading={el.fullName}
                img={el.images[0].url}
                desc={el.description}
                location={`${el.addresses[0].line1}, ${el.addresses[0].city}, ${el.addresses[0].stateCode}, ${el.addresses[0].postalCode} `}
              />
            );
          })
        );
      });
  };
  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <div className="home-container">
        <div className="home-img">
          <h3>Explore National Parks and Historical Monuments!</h3>
        </div>
        <div className="home-text-container">
          <p>Start your search!</p>
          <input
            className="search-text"
            type="text"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
            onClick={() => {
              searchApi();
            }}
          >
            Search
          </button>
        </div>
        <i class="fas fa-chevron-down"></i>
      </div>
      <div className="App">
        <div className="parks-container">{image}</div>
      </div>
      <div className="footer-container">
        <div className="footer-text">
          <p>
            <i class="far fa-copyright"></i> Copyright Anthony G.
          </p>
          <p>Thank you National Park Services for providing API.</p>
          <a href="https://www.nps.gov/subjects/developer/api-documentation.htm">
            https://www.nps.gov/subjects/developer/api-documentation.htm
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
