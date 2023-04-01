<h1>A Polling Api System</h1>

<h3>Video Explaination:</h3>
<h3>Hosting Link:</h3>

<h2>Tech stack </h2><br>
<ul>
 <li>NodeJS </li>
 <li>ExpressJS<li> 
 <li>MongoDB <li>
 <li>Mongoose <li>
</ul>

<h2>Features ✨✨</h2> <br>
<ul>
    <li>Create a question</li> <br>
    <li>Add options to a question</li> <br>
    <li>Add a vote to an option of question</li> <br>
    <li>Delete a question</li> <br>
    <li>Delete an option</li> <br>
    <li>View a question</li> <br>
</ul>

<h2>Url Paths for performing actions 🔗🔗</h2> <br>
<ul>
    <li>To create a question :- http://localhost:3000/question/create </li><br>
    <li>To add options to a specific question :- http://localhost:3000/question/options/:QuesID/create </li><br>
    <li>To view a question and it’s options :- http://localhost:3000/question/view/:QuesID </li><br>
    <li>To increment the count of votes :- http://localhost:3000/options/:OptionID/add_vote </li><br>
   <li>To delete an option :- http://localhost:3000/options/delete/:OptionID </li><br>
    <li>To delete a question :- http://localhost:3000/question/delete/:QuesID </li><br>
    </ul>

<h2>Run the code</h2> <br>
    $ git clone https://github.com/shubhamkr83/Polling-Api-System <br>
    $ cd Polling-Api-System <br>
    $ npm install <br>
    $ npm start <br>
