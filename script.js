document.getElementById("tripForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const date = document.getElementById("tripDate").value;
  const themes = Array.from(document.getElementById("themes").selectedOptions).map(opt => opt.value);

  const userInput = {
    startStation: "Wimbledon",
    departureTime: "09:30",
    returnTime: "19:00",
    returnMode: "bus",
    date,
    themes
  };

  const events = await fetchMockEvents(date); // Replace with real API later
  const filteredEvents = filterEvents(events, themes, userInput.returnTime);
  const itinerary = generateItinerary(userInput, filteredEvents);
  const score = scoreItinerary(itinerary, userInput);

  displayResults(itinerary, score);
});

// Mock functions (replace with real logic later)
function fetchMockEvents(date) {
  return Promise.resolve([
    { name: "Marcus Bonfanti", start_time: "17:30", venue: { name: "Ronnie Scott’s" }, category: "events" }
  ]);
}

function filterEvents(events, themes, returnTime) {
  return events.filter(e => themes.includes(e.category));
}

function generateItinerary(userInput, events) {
  return [
    { time: "10:00", activity: "Tube to Richmond", category: "travel" },
    { time: "10:45", activity: "Walk along the Thames", category: "nature" },
    { time: "12:00", activity: "Visit Ham House", category: "history" },
    { time: "14:30", activity: "Afternoon Tea at Petersham Nurseries", category: "food" },
    { time: "17:30", activity: "Marcus Bonfanti at Ronnie Scott’s", category: "events" },
    { time: "18:30", activity: "Bus back to Wimbledon", category: "travel" }
  ];
}

function scoreItinerary(itinerary, userInput) {
  return 92; // Placeholder score
}

function displayResults(itinerary, score) {
  const container = document.getElementById("results");
  container.innerHTML = `<h2>Itinerary Score: ${score}</h2>`;
  itinerary.forEach(item => {
    container.innerHTML += `<p><strong>${item.time}</strong> – ${item.activity}</p>`;
  });
}
