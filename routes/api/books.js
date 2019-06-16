const router = require("express").Router();
const booksController = require("../../controllers/bookscontroller");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

  router
  .get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

module.exports = router;