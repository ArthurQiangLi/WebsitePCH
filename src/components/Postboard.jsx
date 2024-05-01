import CompFooter from "./CompFooter";
import CompNavbar from "./CompNavbar";
import data from "./data.json";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "../App.css";

export default function Postboard() {
  return (
    <>
      <CompNavbar />
      <Maps />
      <Posts />
      <CompFooter />
    </>
  );
}

const markers = [
  { id: 1, position: [43, -80], content: "Popup 1: Content here" },
  { id: 2, position: [36, -95.1], content: "Popup 2: More content here" },
  { id: 3, position: [36, 127], content: "Popup 3: Even more content" },
  { id: 4, position: [36, 139], content: "Popup 3: Even more content" },
  { id: 5, position: [46, 102], content: "Popup 3: Even more content" },
  { id: 6, position: [36, 127], content: "Popup 3: Even more content" },
  { id: 7, position: [32, 101], content: "Popup 3: Even more content" },
  { id: 8, position: [22, 110], content: "Popup 3: Even more content" },
  { id: 9, position: [40, -1.9], content: "Popup 3: Even more content" },
  { id: 10, position: [36, 128], content: "Popup 3: Even more content" },
  { id: 11, position: [39, -8], content: "Popup 3: Even more content" },
  { id: 12, position: [41, 14], content: "Popup 3: Even more content" },
  { id: 13, position: [-4, -55], content: "Popup 3: Even more content" },
  { id: 14, position: [0, -71], content: "Popup 3: Even more content" },
  { id: 15, position: [48, 30], content: "Popup 3: Even more content" },
  { id: 16, position: [15, 108], content: "Popup 3: Even more content" },
  { id: 17, position: [40, 117], content: "Popup 3: Even more content" },

  // Add more markers as needed
];

function Maps() {
  return (
    <div className="map-container ">
      <MapContainer center={[51.505, -0.09]} zoom={2} scrollWheelZoom={false}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {markers.map((maker) => (
          <Marker key={maker.id} position={maker.position}>
            <Popup>{maker.content}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

function Posts() {
  return (
    <section className="testimonial--section" id="testimonial">
      <h2 className="sections--heading">Recent Posts (public)</h2>

      <div className="container">
        {data?.testimonial?.map((item, index) => (
          <MovieCard item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

const MovieCard = ({ item, index }) => {
  return (
    <div className="movie">
      <div key={index}>
        <div className="testimonial--section--card--review">
          {Array.from({ length: 5 }, (reviews, index) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 27 26"
              fill="none">
              <path
                d="M12.0945 0.953177C12.5528 -0.135435 14.1138 -0.135434 14.5722 0.95318L17.2772 7.37836C17.4705 7.8373 17.9074 8.15087 18.4089 8.19059L25.4302 8.74669C26.6199 8.84091 27.1022 10.3076 26.1959 11.0746L20.8464 15.6016C20.4643 15.925 20.2973 16.4324 20.4141 16.9158L22.0484 23.6847C22.3253 24.8315 21.0625 25.7381 20.044 25.1235L14.0327 21.4961C13.6033 21.237 13.0633 21.237 12.634 21.4961L6.62265 25.1235C5.60415 25.7381 4.34127 24.8315 4.61818 23.6847L6.25256 16.9158C6.3693 16.4324 6.20243 15.925 5.82034 15.6016L0.47075 11.0746C-0.435624 10.3076 0.0467572 8.84091 1.23639 8.74669L8.25781 8.19059C8.75933 8.15087 9.19621 7.8373 9.38942 7.37836L12.0945 0.953177Z"
                fill="#f9d3b4"
              />
            </svg>
          ))}
        </div>
        <p className="text-md">{item.description}</p>
        <div className="testimonial--section--card--author--detail">
          <img src={item.src} alt="Avatar" className="posts--images" />
          <div>
            <p className="text-md testimonial--author--name">
              {item.author_name}
            </p>
            <p className="text-md testimonial--author--designation">
              {item.author_designation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
