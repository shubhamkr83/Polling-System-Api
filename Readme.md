A Polling Api System

Video Explaination: <br>
Hosting Link:
<hr>
-Tech stack <br>
    - NodeJS <br>
    - ExpressJS <br>
    - MongoDB <br>
    - Mongoose <br>
<hr>
Features ✨✨ <br>
    Create a question <br>
    Add options to a question <br>
    Add a vote to an option of question <br>
    Delete a question <br>
    Delete an option <br>
    View a question <br>
<hr>
Url Paths for performing actions 🔗🔗 <br>
    To create a question :- http://localhost:3000/question/create <br>
    To add options to a specific question :- http://localhost:3000/question/options/:QuesID/create <br>
    To view a question and it’s options :- http://localhost:3000/question/view/:QuesID <br>
    To increment the count of votes :- http://localhost:3000/options/:OptionID/add_vote <br>
    To delete an option :- http://localhost:3000/options/delete/:OptionID <br>
    To delete a question :- http://localhost:3000/question/delete/:QuesID <br>
<hr>
Run the code <br>
    $ git clone https://github.com/shubhamkr83/Polling-Api-System <br>
    $ cd Polling-Api-System <br>
    $ npm install <br>
    $ npm start <br>
