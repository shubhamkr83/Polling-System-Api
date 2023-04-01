const Option = require('../models/options');
const Question = require('../models/questions');


// creating the options of the questions
module.exports.create = async function (req, res) {
    console.log(req.body, req.params.id)
    const opt = await Option.create({
        option: req.body.content,
        question: req.params.id,
    })
    // adding the vote to option using link
    const updateOption = await Option.findByIdAndUpdate(opt._id,
        { "add_vote": `http://localhost:3000/api/v1/options/${opt._id}/add_vote` }
    )

    // save to database
    updateOption.save()
    // now searching the question to add option
    const ques = await Question.findById(req.params.id);

    if (ques) {
        ques.options.push(updateOption)
        // save option
        ques.save()
        console.log(ques)
        res.send(ques)
    }
    else {
        res.send('question does not exists')
    }
}


// adding vote
module.exports.add_vote = async function (req, res) {

    // increment the vote
    const opt = await Option.findByIdAndUpdate(req.params.id, { $inc: { vote: 1 } })
    if (opt) {
        await opt.save();
        console.log(opt);
        res.send(opt)
    }
    else {
        res.send('option does not exits')
    }
}


// delete the option by ID
module.exports.delete = async function (req, res) {
    const opt = await Option.findById(req.params.id);

    if (opt) {
        const quesId = opt.question;
        // finding the question by id
        const ques = await Question.findByIdAndUpdate(
            quesId, { $pull: { options: req.params.id } }
        );
        // now absolutely deleting after getting the id
        await Option.findByIdAndDelete(req.params.id)

        console.log(ques);
        res.send('option deleted')
    }
    else {
        res.send('id not exists')
    }
}
