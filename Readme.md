<h1>A Polling Api System</h1>

<h3>Video Explaination:</h3> <br>
<h3>Hosting Link:</h3>
<hr>
<h2>-Tech stack </h2><br>
    - NodeJS <br>
    - ExpressJS <br>
    - MongoDB <br>
    - Mongoose <br>
<hr>
<h2>Features ✨✨</h2> <br>
    Create a question <br>
    Add options to a question <br>
    Add a vote to an option of question <br>
    Delete a question <br>
    Delete an option <br>
    View a question <br>
<hr>
<h2>Url Paths for performing actions 🔗🔗</h2> <br>
    To create a question :- http://localhost:3000/question/create <br>
    To add options to a specific question :- http://localhost:3000/question/options/:QuesID/create <br>
    To view a question and it’s options :- http://localhost:3000/question/view/:QuesID <br>
    To increment the count of votes :- http://localhost:3000/options/:OptionID/add_vote <br>
    To delete an option :- http://localhost:3000/options/delete/:OptionID <br>
    To delete a question :- http://localhost:3000/question/delete/:QuesID <br>
<hr>
<h2>Run the code</h2> <br>
    $ git clone https://github.com/shubhamkr83/Polling-Api-System <br>
    $ cd Polling-Api-System <br>
    $ npm install <br>
    $ npm start <br>
