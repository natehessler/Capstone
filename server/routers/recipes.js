const { Router } = require("express");
const router = Router();

// Create record in MongoDB Atlas using Mongoose.js ORM
router.post("/", (request, response) => {
  try {
    // Return mock response when DB not connected
    response.json({...request.body, _id: "mock-id-" + Date.now()});
  } catch (error) {
    console.error("Error in POST /recommendations:", error);
    response.status(500).json({error: "Server error"});
  }
});

// Get (read) all records from the collection
router.get("/", (request, response) => {
  try {
    // Always return empty array when DB not connected
    response.json([]);
  } catch (error) {
    console.error("Error in GET /recommendations:", error);
    response.json([]);
  }
});

// Get a single record by ID using a query parameter
router.get("/:id", (request, response) => {
  try {
    response.status(404).json({error: "Not found or database not connected"});
  } catch (error) {
    console.error("Error in GET /recommendations/:id:", error);
    response.status(500).json({error: "Server error"});
  }
});

router.delete("/:id", (request, response) => {
  try {
    response.json({message: "Delete operation simulated - no database connection"});
  } catch (error) {
    console.error("Error in DELETE /recommendations/:id:", error);
    response.status(500).json({error: "Server error"});
  }
});

router.put("/:id", (request, response) => {
  try {
    const body = request.body;
    response.json({
      ...body,
      _id: request.params.id,
      message: "Update simulated - no database connection"
    });
  } catch (error) {
    console.error("Error in PUT /recommendations/:id:", error);
    response.status(500).json({error: "Server error"});
  }
});

module.exports = router;

