A Polling Api System

Video Explaination: Hosting Link:

-Tech stack
- NodeJS
- ExpressJS
- MongoDB
- Mongoose

    Features ✨✨
        Create a question
        Add options to a question
        Add a vote to an option of question
        Delete a question
        Delete an option
        View a question

    Url Paths for performing actions 🔗🔗
        To create a question :- http://localhost:3000/question/create
        To add options to a specific question :- http://localhost:3000/question/options/:QuesID/create
        To view a question and it’s options :- http://localhost:3000/question/view/:QuesID
        To increment the count of votes :- http://localhost:3000/options/:OptionID/add_vote
        To delete an option :- http://localhost:3000/options/delete/:OptionID
        To delete a question :- http://localhost:3000/question/delete/:QuesID

    Run the code
    $ git clone https://github.com/shubhamkr83/Polling-Api-System
    $ cd Polling-Api-System
    $ npm install
    $ npm start 