const express = require("express");
const router = express.Router();
const {
  createMessage,
  getMessagesByApplicantId,
} = require("../services/database/message");

router.post("/profile/:public_profile_id", async (req, res) => {
  const message = req.body;
  try {
    await createMessage(message);
    res.status(201).send("message is created");
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/applicant/:applicant_id", async (req, res) => {
  const id = req.params.applicant_id;

  try {
    let messages = await getMessagesByApplicantId(id);

    res.send(messages);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
