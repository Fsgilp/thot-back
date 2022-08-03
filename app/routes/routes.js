module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");
  const users = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Login
  router.post("/auth/signin", users.signin);

  // Register - No se utiliza, es directamente creación usuario
  // router.post("/auth/signup", users.create);

  // Logout - No hace falta registrar por el momento el logout
  // router.post("/auth/signout", users.create);

  // Creates
  router.post("/tutorials/", tutorials.create);
  router.post("/users/", users.create);

  // Retrieve all 
  router.get("/tutorials/", tutorials.findAll);
  router.get("/users/", users.findAll);

  // Retrieve all published 
  router.get("/tutorials/published", tutorials.findAllPublished);
  router.get("/users/published", users.findAllPublished);
  router.get("/users/company", users.findAllCompany);

  // Retrieve a single Tutorial with id
  router.get("/tutorials/find/title", tutorials.getByTitle);
  router.get("/tutorials/:id", tutorials.findOne);
  router.get("/users/:id", users.findOne);

  // Update a Tutorial with id
  router.put("/tutorials/:id", tutorials.update);
  router.put("/users/:id", users.update);

  // Delete a Tutorial with id
  router.delete("/tutorials/:id", tutorials.delete);
  router.delete("/users/:id", users.delete);

  // Create a new Tutorial
  router.delete("/tutorials/", tutorials.deleteAll);
  router.delete("/users/", users.deleteAll);

  app.use("/api", router);
};
