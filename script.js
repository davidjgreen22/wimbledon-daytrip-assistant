const itineraries = [
  {
    title: "Richmond Riverside & Ham House",
    highlights: ["River walk", "Historic mansion", "Picnic spots"],
    outbound: "District Line to Richmond",
    inbound: "Bus 371 to Wimbledon",
    notes: "Best enjoyed on a sunny day with time for riverside lunch."
  },
  {
    title: "Greenwich & Royal Observatory",
    highlights: ["Thames views", "Prime Meridian", "Maritime history"],
    outbound: "Jubilee Line to North Greenwich + DLR",
    inbound: "Bus 188 to Elephant & Castle, then Northern Line",
    notes: "Ideal for history buffs and panoramic views."
  },
  {
    title: "Epping Forest & Queen Elizabeth's Hunting Lodge",
    highlights: ["Woodland walk", "Historic lodge", "Wildlife"],
    outbound: "Central Line to Chingford",
    inbound: "Bus 444 to Tottenham Hale, then Victoria Line",
    notes: "Pack walking shoes and snacks for a nature-filled escape."
  }
];

function renderItineraries(itineraries) {
  const container = document.getElementById("itinerary-container");
  container.innerHTML = ""; // Clear previous content

  itineraries.forEach((trip) => {
    const card = document.createElement("div");
    card.className = "itinerary-card";

    card.innerHTML = `
      <h2>${trip.title}</h2>
      <ul>
        ${trip.highlights.map(item => `<li>${item}</li>`).join("")}
      </ul>
      <p><strong>Outbound:</strong> ${trip.outbound}</p>
      <p><strong>Inbound:</strong> ${trip.inbound}</p>
      <p><em>${trip.notes}</em></p>
    `;

    container.appendChild(card);
  });
}

// Call this after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  renderItineraries(itineraries);
});
