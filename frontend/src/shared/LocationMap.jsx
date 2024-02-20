import React, { useState, useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import markIconImage from "../assets/images/pinmap.png";
import { useParams } from "react-router-dom";

const MapComponent = () => {
  const [map, setMap] = useState(null);
  const [router, setRouter] = useState(null);
  // const [source, setSource] = useState([28.6304, 77.2177]);
  const { longi, lati, title } = useParams();

  useEffect(() => {
    // Initialize map
    const mapInstance = L.map("map").setView([28.6304, 77.2177], 10);
    const mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution: "Leaflet &copy; " + mapLink + ", contribution",
      maxZoom: 18,
    }).addTo(mapInstance);
    setMap(mapInstance);

    // Create custom icon
    const markIcon = L.icon({
      iconUrl: markIconImage,
      iconSize: [38, 38],
    });

    // Add markers for source and destination
    const sourceMarker = L.marker([28.6304, 77.2177], {
      icon: markIcon,
    }).addTo(mapInstance);
    sourceMarker.bindPopup("Connaught Place (Source)");

    const destinationMarker = L.marker([parseFloat(longi), parseFloat(lati)], {
      icon: markIcon,
    }).addTo(mapInstance);
    destinationMarker.bindPopup(title + " (Destination)");

    // Initialize routing control
    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(28.6304, 77.2177),
        L.latLng(parseFloat(longi), parseFloat(lati)),
      ],
      routeWhileDragging: false, // Enable route updates while dragging
      createMarker: function () {
        return null;
      },
    }).addTo(mapInstance);
    setRouter(routingControl);

    // Clean up function
    return () => {
      mapInstance.remove();
    };
  }, [longi, lati]);

  return (
    <div>
      <div id="map" style={{ width: "100%", height: "400px" }}></div>
    </div>
  );
};

export default MapComponent;
