const Question = require('../models/questions')
const Option = require('../models/options')

//  Question created
module.exports.create = async function (req, res) {
    console.log(req.url);
    console.log(req.body);
    await Question.create(req.body, function (err, ques) {
        if (err) { console.log("error in creating the question schema", err); }
        console.log(ques);
        res.send(ques);
    })

}

// question details is shown
module.exports.showDetails = async function (req, res) {
    console.log(req.params.id)
    const ques = await Question.findById(req.params.id).populate('options')
    if (ques) {
        res.send(ques);
    }
    else {
        res.send("id does not exits");
    }
}

// deleting the question
module.exports.deleteQues = async function (req, res) {
    const ques = await Question.findById(req.params.id).clone().catch(function (err) { console.log(err) })
    if (ques) {
        // deleting all the option of that question
        await Option.deleteMany({ question: req.params.id }).clone().catch(function (err) { console.log(err) })
        res.send("ques deleted");
    }
    else {
        res.send('question does not exists')
    }
}
