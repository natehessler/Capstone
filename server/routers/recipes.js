const { Router } = require("express");
const Recipe = require("../models/Recipe");
const router = Router();

// Create record in MongoDB Atlas using Mongoose.js ORM
router.post("/", async (request, response) => {
  try {
    if (global.dbConnected) {
      const newRecipe = new Recipe(request.body);
      const savedRecipe = await newRecipe.save();
      response.json(savedRecipe);
    } else {
      // Return mock response when DB not connected
      response.json({...request.body, _id: "mock-id-" + Date.now()});
    }
  } catch (error) {
    console.error("Error in POST /recommendations:", error);
    response.status(500).json({error: "Server error"});
  }
});

// Get (read) all records from the collection
router.get("/", async (request, response) => {
  try {
    if (global.dbConnected) {
      const recipes = await Recipe.find();
      response.json(recipes);
    } else {
      // Always return empty array when DB not connected
      response.json([]);
    }
  } catch (error) {
    console.error("Error in GET /recommendations:", error);
    response.json([]);
  }
});

// Get a single record by ID using a query parameter
router.get("/:id", async (request, response) => {
  try {
    if (global.dbConnected) {
      const recipe = await Recipe.findById(request.params.id);
      if (recipe) {
        response.json(recipe);
      } else {
        response.status(404).json({error: "Recipe not found"});
      }
    } else {
      response.status(404).json({error: "Not found or database not connected"});
    }
  } catch (error) {
    console.error("Error in GET /recommendations/:id:", error);
    response.status(500).json({error: "Server error"});
  }
});

router.delete("/:id", async (request, response) => {
  try {
    if (global.dbConnected) {
      const result = await Recipe.findByIdAndDelete(request.params.id);
      if (result) {
        response.json({message: "Recipe deleted successfully"});
      } else {
        response.status(404).json({error: "Recipe not found"});
      }
    } else {
      response.json({message: "Delete operation simulated - no database connection"});
    }
  } catch (error) {
    console.error("Error in DELETE /recommendations/:id:", error);
    response.status(500).json({error: "Server error"});
  }
});

router.put("/:id", async (request, response) => {
  try {
    if (global.dbConnected) {
      const updatedRecipe = await Recipe.findByIdAndUpdate(
        request.params.id,
        request.body,
        { new: true }
      );
      if (updatedRecipe) {
        response.json(updatedRecipe);
      } else {
        response.status(404).json({error: "Recipe not found"});
      }
    } else {
      const body = request.body;
      response.json({
        ...body,
        _id: request.params.id,
        message: "Update simulated - no database connection"
      });
    }
  } catch (error) {
    console.error("Error in PUT /recommendations/:id:", error);
    response.status(500).json({error: "Server error"});
  }
});

module.exports = router;

