const express = require("express");
const router = express.Router();
const db = require("./project_model.js");
router.get("/", (req, res) => {
  db.find()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});
router.get("/:id", (req, res) => {
  db.findById(req.params.id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});
router.post("/project", validateBody, (req, res) => {
  db.makeProject(req.body)
    .then(data => {
      res.status(201).json(data);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});
router.post("/actions", validateBody, validateProject, (req, res) => {
  db.makeAction(req.body)
    .then(data => {
      res.status(201).json(data);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function validateBody(req, res, next) {
  if (req.body) {
    next();
  } else {
    res.send(400).json("please send a body");
  }
}
async function validateProject(req, res, next) {
  if (req.body.project_id) {
    let check = await db
      .findById(req.body.project_id)
      .then(data => {
        return data;
      })
      .catch(data => {
        res.status(500).json(data);
      });
    if (check.data.project.length) {
      next();
    } else {
      res.status(404).json("project doesnt exist");
    }
  } else {
    res.status(400).json("please provide project_id");
  }
}

module.exports = router;
