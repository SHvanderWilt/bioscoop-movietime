import React from "react";
// import './vestigingen.css';

const locations = [
  {
    id: 1,
    name: "Vestiging Amsterdam",
    address: "Damstraat 1, 1012 JS Amsterdam",
    phone: "020 123 4567",
    email: "amsterdam@bioscoop.nl",
  },
  {
    id: 2,
    name: "Vestiging Rotterdam",
    address: "Coolsingel 10, 3012 AG Rotterdam",
    phone: "010 123 4567",
    email: "rotterdam@bioscoop.nl",
  },
  {
    id: 3,
    name: "Vestiging Den Haag",
    address: "Spui 50, 2511 BT Den Haag",
    phone: "070 123 4567",
    email: "denhaag@bioscoop.nl",
  },
  {
    id: 4,
    name: "Vestiging Utrecht",
    address: "Vredenburg 40, 3511 BD Utrecht",
    phone: "030 123 4567",
    email: "utrecht@bioscoop.nl",
  },
  {
    id: 5,
    name: "Vestiging Eindhoven",
    address: "Stationsplein 20, 5611 AC Eindhoven",
    phone: "040 123 4567",
    email: "eindhoven@bioscoop.nl",
  },
  {
    id: 6,
    name: "Vestiging Groningen",
    address: "Grote Markt 1, 9712 JG Groningen",
    phone: "050 123 4567",
    email: "groningen@bioscoop.nl",
  },
];

const VestigingenPage = () => {
  return (
    <div className="locations-container">
      <h1>Onze Vestigingen</h1>
      <div className="locations-grid">
        {locations.map((location) => (
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
