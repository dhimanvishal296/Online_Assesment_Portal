const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "All tests"
  });
});

router.get("/:id", (req, res) => {
  const testId = req.params.id;
  res.json({
    message: `Test with ID: ${testId}`
  });
});

router.post("/", (req, res) => {
  const { name, description } = req.body;
  res.json({
    message: `Test created with name: ${name} and description: ${description}`
  });
});

router.put("/:id", (req, res) => {
  const testId = req.params.id;
  const { name, description } = req.body;
  res.json({
    message: `Test with ID: ${testId} updated with name: ${name} and description: ${description}`
  });
}); 

module.exports = router;