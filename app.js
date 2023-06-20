const express = require("express");
const app = express();

// Define the "public/" directory as the static files directory
app.use(express.static("public"));

// Define the route to render a view file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/biography", (request, response, next) =>
  response.sendFile(__dirname + "/views/biography.html")
);
app.get("/importance", (request, response, next) =>
  response.sendFile(__dirname + "/views/brazilianliterature.html")
);
app.get("/literarystyle", (request, response, next) =>
  response.sendFile(__dirname + "/views/literarystyle.html")
);
app.get("/books", (request, response, next) =>
  response.sendFile(__dirname + "/views/work.html")
);

// Start the server
app.listen(4000, () => {
  console.log("Server started on port 4000");
});
