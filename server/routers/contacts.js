const { Router } = require("express");
const Contact = require("../models/Contact");
const router = Router();

// Create contact record
router.post("/", async (request, response) => {
  try {
    if (global.dbConnected) {
      const newContact = new Contact(request.body);
      const savedContact = await newContact.save();
      response.json(savedContact);
    } else {
      // Return mock response when DB not connected
      response.json({...request.body, _id: "mock-id-" + Date.now()});
    }
  } catch (error) {
    console.error("Error in POST /contacts:", error);
    response.status(500).json({error: "Server error"});
  }
});

// Get all contacts (admin only - would need authentication in production)
router.get("/", async (request, response) => {
  try {
    if (global.dbConnected) {
      const contacts = await Contact.find();
      response.json(contacts);
    } else {
      response.json([]);
    }
  } catch (error) {
    console.error("Error in GET /contacts:", error);
    response.json([]);
  }
});

module.exports = router;