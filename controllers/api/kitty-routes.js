const { User, Kitty } = require("../../models");
const router = require("express").Router();


router.get("/", async (req, res) => {
  try {
    const rawKittyData = await Kitty.findAll({
      include: [
        {
          model: User,
          as: "kitty_owner",
          attributes: ["username"]
        },
      ]
    });
    const kittyData = rawKittyData.map((kitty) => kitty.get({ plain: true }));
    res.status(200).json(kittyData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/id/:id", async (req, res) => {
  try {
    const kittyData = await Kitty.findByPk(req.params.id, {
      include: [
        {
          model: User,
          as: "kitty_owner",
          attributes: ["username"]
        }
      ],
    });
    if (!kittyData) {
      res.status(404).json({ message: "No kitty found with this id!" });
      return;
    }
    res.status(200).json(kittyData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post("/", async (req, res) => {
  console.log('rsss', req.body);
  try {
    const newKitty = await Kitty.create({
      userId: req.body.id,
      kittyPicture: req.body.kittyPicture,
      kittyName: req.body.kittyName,
      kittyGender: req.body.kittyGender,
      kittyWeight: req.body.kittyWeight,
      kittyColor: req.body.kittyColor,
      kittyAge: req.body.kittyAge,
      kittyPets: req.body.kittyPets,
    });
    res.status(200).json(newKitty);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedKitty = await Kitty.destroy({
      where: { id: req.params.id }
    });
    res.status(200).json(deletedKitty);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
