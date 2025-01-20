document
  .getElementById("summarizeForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    let textInput = document.getElementById("textInput").value; // Get the input text

    // Make a POST request to the /summarize route
    fetch("/summarize", {
      method: "POST",
      body: new URLSearchParams({
        text: textInput, // Send the text to be summarized
      }),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => {
        // Accessing the 'summary' key of the JSON response
        let summaryText = data.summary;

        // Display the summary text on the webpage (without curly braces or quotes)
        document.getElementById("summaryOutput").textContent = summaryText;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
