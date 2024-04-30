const Day = require("../models/day");


async function createDay(req, res) {
    try {
        const {date, weight} = req.body
        const newDay = await Day.create({date, weight});
        return res.status(200).json(newDay);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

async function getDays(req, res) {
    try {
        return res.status(200).json(await Day.find());
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

async function updateDay(req, res) {
    try {
        const {_id, date, weight, isCompleted} = req.body
        const updatedDay = await Day.findByIdAndUpdate(_id, {$set: {date, weight, isCompleted}}, {new: true})
        return res.status(200).json(updatedDay);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports=  {createDay, getDays, updateDay};
