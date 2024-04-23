import * as express from 'express'
 

app.get("/api2", (req, res) => {
  res.json({ message: "Hola desde el user!" });
});


