Routes...
A POST route to post the data to the database.

- A GET route to get the data of all the players.
- Add Filters as well:
* There should be a filter to get the players above a certain number of goals.
* There should be a filter to get the players below a certain age.
* There should be a filter to get the players of a particular nationality.
Hint: You can achieve this filtration by the help of queries. 

- A GET route to get the details of the player with a particular id. 
- A GET route to handle the pages and responses as well, basically apply pagination.
 * Should be able to pass a page number as a param and get the player details, 3 players are allowed per page.
- A GET route to get top 5 players having maximum number of goals 
- A PATCH route to update the data of any particular player.
- A DELETE route to delete the data of any particular player.
Middlewares
1. validator: This will validate the data while posting, it will validate that all the fields of the documents are present or not. If not present then it should send the following response.

{
"err": "Few fields are missing, cannot process the request"
}
-Age should be between 18 to 40 else send {"err":"You are not eligible to Play"}
-Position should be one of the following: "Forward", "Midfielder", "Defender", "Goalkeeper" else send {"err":"Incorrect details"}
-Goals should be more than 50 and assists should be more than 20 else send {"err":"You are not eligible to play"} 

 2. updateLimiter: This middleware will only allow the updating the document if it is mutable, which can be deduced from the document itself.

 3. record: This middleware will keep a record of all the players which are deleted or updated along with the time at which they are deleted or updated in a "records.txt" file, an example has been given below.

The player with id:63baae803240a41c75a4cb72 has been updated | Sat Feb 11 2023 01:10:56 GMT+0530 (India Standard Time).
The player with id:63baae803240a41c75a47892 has been deleted | Sun Feb 12 2023 01:15:56 GMT+0530 (India Standard Time).
Important Note
- You have to follow MVC structure.
       - models => will contains the models that you are going to use.
       - routes => will contain the routes.
       - middlewares => will contain the middlewares that yo are going to use.
- All the responses should be in JSON form even if they are errors, an example is given in validator middleware
- Use Environment variables to protect the vulnerable stuff.