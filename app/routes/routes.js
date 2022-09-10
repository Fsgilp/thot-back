module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");
  const users = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Login
  router.post("/auth/signin", users.signin);

  // Admin
  router.get("/users/admin/", users.findOrCreateAdmin);

  // Creates
  router.post("/tutorials/", tutorials.create);
  router.post("/users/", users.create);

  // Retrieve all 
  router.get("/tutorials/", tutorials.findAll);
  router.get("/users/", users.findAll);

  // Retrieve all
  router.get("/tutorials/published", tutorials.findAllPublished);
  router.get("/users/published", users.findAllPublished);
  router.get("/users/company", users.findAllCompany);
  router.get("/users/bycompany/:cif", users.findByCompany);

  // Retrieve a single Tutorial with id
  router.get("/tutorials/find/title", tutorials.getByTitle);
  router.get("/tutorials/:id", tutorials.findOne);
  router.get("/users/:id", users.findOne);

  // Updates
  router.put("/tutorials/:id", tutorials.update);
  router.put("/users/:id", users.update);

  // Deletes
  router.delete("/tutorials/:id", tutorials.delete);
  router.delete("/users/:id", users.delete);
  router.delete("/tutorials/", tutorials.deleteAll);
  router.delete("/users/", users.deleteAll);

  app.use("/api", router);
};
