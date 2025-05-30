// Handle form submission for adding OG
document.getElementById("ogForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const score = parseInt(document.getElementById("score").value);

  try {
    const response = await fetch("/api/ogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, score }),
    });

    const data = await response.json();

    if (response.ok) {
      document.getElementById("addResult").innerText = "OG added successfully!";
    } else {
      document.getElementById("addResult").innerText = `Error: ${data.error}`;
    }
  } catch (err) {
    document.getElementById("addResult").innerText = `Request failed: ${err.message}`;
  }

  // Clear the form
  e.target.reset(); 
});


async function fetchOG() {
  const id = document.getElementById("ogId").value;

  try {
    const response = await fetch(`/api/ogs/${id}`);
    const data = await response.json();
    console.log("Fetched data:", data);
    
    if (!response.ok) {
      document.getElementById("fetchResult").innerText = "OG not found!";
      return;
    }

    document.getElementById("fetchResult").innerText = `Name: ${data.data.name}, Score: ${data.data.score}`;
  } catch (error) {
    document.getElementById("fetchResult").innerText = "Error fetching OG.";
  }
};