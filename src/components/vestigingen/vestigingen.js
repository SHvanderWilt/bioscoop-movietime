import React, { useState } from "react";

const locations = [
  {
    id: 1,
    name: "MovieTime Amsterdam",
    address: "Kalverstraat 1, 1011 AA Amsterdam",
    phone: "020 1234123",
    email: "amsterdam@movietime.nl",
  },
  {
    id: 2,
    name: "MovieTime Amstelveen",
    address: "Stadsplein 2, 1122 BB Amstelveen",
    phone: "020 4321321",
    email: "amstelveen@movietime.nl",
  },
  {
    id: 3,
    name: "MovieTime Haarlem",
    address: "Zijlstraat 3, 2033 CC Haarlem",
    phone: "023 7654321",
    email: "haarlem@movietime.nl",
  },
  {
    id: 4,
    name: "MovieTime Utrecht",
    address: "Neude 4, 3544 DD Utrecht",
    phone: "030 8877665",
    email: "utrecht@movietime.nl",
  },
  {
    id: 5,
    name: "MovieTime Groningen",
    address: "Heerenstraat 5, 3544 DD Groningen",
    phone: "050 8877665",
    email: "groningen@movietime.nl",
  },
  {
    id: 6,
    name: "MovieTime Maastricht",
    address: "Vrijthof 6, 3544 DD Maastricht",
    phone: "043 8877665",
    email: "maastricht@movietime.nl",
  },
];

const VestigingenPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter locations based on the search query
  const filteredLocations = locations.filter((location) =>
    location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    location.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
    location.phone.includes(searchQuery)
  );

  return (
    <div className="locations-container">
      <h1>Onze Vestigingen</h1>
      <input
        type="text"
        placeholder="Zoek vestigingen..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-field"
      />
      <div className="locations-grid">
        {filteredLocations.map((location) => (
          <div key={location.id} className="location-card">
            <h2>{location.name}</h2>
            <p><strong>Adres:</strong> {location.address}</p>
            <p><strong>Telefoon:</strong> {location.phone}</p>
            <p><strong>Email:</strong> <a href={`mailto:${location.email}`}>{location.email}</a></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VestigingenPage;
