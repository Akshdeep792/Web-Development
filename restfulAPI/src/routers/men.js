const express = require("express");
const router = new express.Router();
const MensRanking = require("./models/mens")
router.post("/mens", async (req, res) => {
    try {
        const records = new MensRanking(req.body);
        console.log(req.body);
        const insert = await records.save();
        res.status(201).send(insert);
    }
    catch (err) {
        res.status(400).send(err);
    }

})


router.get("/mens", async (req, res) => {
    try {
        const getmen = await MensRanking.find({}).sort({"ranking":1});
        res.send(getmen);
    }
    catch (err) {
        res.status(400).send(err);
    }

})
router.get("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getmen = await MensRanking.findById(_id);
        res.send(getmen);
    }
    catch (err) {
        res.status(400).send(err);
    }

})
router.patch("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getmen = await MensRanking.findByIdAndUpdate(_id, req.body, {
            new:true
        });
        res.send(getmen);
    }
    catch (err) {
        res.status(500).send(err);
    }

})
router.delete("/mens/:id", async (req, res) => {
    try {
        
        const getmen = await MensRanking.findByIdAndDelete(req.params.id);
        res.send(getmen);
    }
    catch (err) {
        res.status(500).send(err);
    }

})

module.exports = router;