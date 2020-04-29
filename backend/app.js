const express = require("express");
const app = express();
const mongoose = require("./database/mongoose");
const cors = require("cors");
const multer = require("multer");
const Recipe = require("./database/models/recipe");
const upload = multer({ dest: "./public/uploads/" });

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

/* GET ALL recipes */
app.get("/recipes", (req, res) => {
  Recipe.find({})
    .then((recipes) => res.send(recipes))
    .catch((error) => console.log(error));
});

/* GET ONE recipe */
app.get("/recipes/:recipeId", (req, res) => {
  Recipe.find({ _id: req.params.recipeId })
    .then((recipes) => res.send(recipes))
    .catch((error) => console.log(error));
});

/* CREATE a recipe */
app.post("/recipes", (req, res) => {
  upload.single("imageInput")(req, res, function (error) {
    if (error) {
      console.log(`upload.single error: ${error}`);
      return res.sendStatus(500);
    }
    new Recipe({
      title: req.body.title,
      servings: req.body.servings,
      time: req.body.time,
      ingredients: req.body.ingredients,
      directions: req.body.directions,
      picture: req.file,
    })
      .save()
      .then((recipe) => res.send(recipe))
      .catch((error) => console.log(error));
  });
});

/* UPDATE ONE recipe */
app.patch("/recipes/:recipeId", (req, res) => {
  upload.single("imageInput")(req, res, function (error) {
    if (error) {
      console.log(`upload.single error: ${error}`);
      return res.sendStatus(500);
    }
    Recipe.findOneAndUpdate(
      { _id: req.params.recipeId },
      {
        $set: {
          title: req.body.title,
          servings: req.body.servings,
          time: req.body.time,
          ingredients: req.body.ingredients,
          directions: req.body.directions,
          picture: req.file,
        },
      },
      { new: true }
    )
      .then((recipe) => {
        res.send(recipe);
      })
      .catch((error) => console.log(error));
  });
});

/* DELETE ONE recipe */
app.delete("/recipes/:recipeId", (req, res) => {
  Recipe.findByIdAndDelete(req.params.recipeId)
    .then((recipe) => res.send(recipe))
    .catch((error) => console.log(error));
  /* tbd: dynamically delete files stored in "uploads" */
});

app.listen(3000, () => console.log("Server connected on port 3000"));
