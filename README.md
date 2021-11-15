# Web-API-code-quiz

In the challenge I first created my HTML to display this page 
![codequiz-main](https://user-images.githubusercontent.com/91164950/141715294-4aa52bf7-6b3d-474b-bbd2-0cd44b647896.PNG)
In the top right hand corner I have my view Highscores link to take you to the high scores list, (didn't have time to finish the highscores page, however initials and score are stored locally)

using an eventListener when clicking start Quiz you're taken to the first set of questions such as:
![questionImg](https://user-images.githubusercontent.com/91164950/141715434-ba7de9a4-e834-4185-a716-86aed4b3cdb4.PNG)
conditional statements (if/else) along with an object array allowed me to place the title and list items using the innerHTMl method
the if/else statements also apply to the selection of Answers. Should a user click on the wrong answer they will be deducted 15 seconds off their time and will be prompted with "Incorrect" at the bottom of the screen for 1 second

Finally after fully completing the test or after the 75 seconds have run out you get redirected to this page: 
![endpageimg](https://user-images.githubusercontent.com/91164950/141715796-e00df520-5d0e-4a0a-aa4f-410e1a7fd50c.PNG)
this page gives you an input for your Initials and a submit button which will send both your name and score to the local storage. 
