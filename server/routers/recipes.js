const { Router } = require("express");
const Recipe = require("../models/Recipe");
const router = Router();

// Create record in MongoDB Atlas using Mongoose.js ORM
router.post("/", (request, response) => {

  const newRecipe = new Recipe(request.body);

  newRecipe.save((error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });

});

// Get (read) all records from the collection
router.get("/", (request, response) => {

  Recipe.find({}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });

});

// Get a single record by ID using a query parameter
router.get("/:id", (request, response) => {

  Recipe.findById(request.params.id, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });

});

router.delete("/:id", (request, response) => {
  Recipe.findByIdAndRemove(request.params.id, {}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

router.put("/:id", (request, response) => {
  const body = request.body;
  Recipe.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        // Take note that the customer is not included, so it can't
        crust: body.crust,
        cheese: body.cheese,
        sauce: body.sauce,
        toppings: body.toppings
      }
    },
    {
      new: true,
      upsert: true
    },
    (error, record) => {
      if (error) return response.status(500).json(error);
      return response.json(record);
    }
  );
});

module.exports = router;

