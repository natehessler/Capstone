const { Router } = require("express");
const Recipes = require("../models/Recipe");
const router = Router();

// Create record in MongoDB Atlas using Mongoose.js ORM
router.post("/", (request, response) => {

  const newRecipes = new Recipes(request.body);

  newRecipes.save((error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });

});

// Get (read) all records from the collection
router.get("/", (request, response) => {

  Recipes.find({}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });

});

// Get a single record by ID using a query parameter
router.get("/:id", (request, response) => {

  Recipes.findById(request.params.id, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });

});

router.delete("/:id", (request, response) => {
  Recipes.findByIdAndRemove(request.params.id, {}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

router.put("/:id", (request, response) => {
  const body = request.body;
  Recipes.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        // Take note that the customer is not included, so it can't
        user: body.user,
        name: body.name,
        ingredients: body.ingredients,
        instructions: body.instructions
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

