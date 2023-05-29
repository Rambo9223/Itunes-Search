1. Itunes API app

2. Within the GIT repo is a basic app created with create-react-app and express.

The App allows the user to search the epansive data available in the Apple Itunes API and add any of the
items they search to a personal favourites page, they can add as many search items as they like and serach 
for as many items as they like, they can also delete any items from their list.

Challeneges I had with creating this app included filtering through the returned object for common data that
could be used accross all functions ie the add and delete, (some items ie. books/movies have different
named data in the objects that changed how they would be presented).

In the future I'd like to change the project, for this build I had to implement a function that deletes the 
data if the user refreshes or navigates away from the page, however in future it might be better to have a user
login that would allow the app to retain the specific data based on the user.

3. How to Install

Download the zipped file from GitHub and unzip in to your chosen directory.

Open the terminal or VSCode and navigate to the directory that contains the files using cd

![terminal](Images/Screenshot%20(39).png)

Type npm start , then enter, the required packages should install and once compiled you will be able to use the app on your browser at localhost:3000

![Succrssful Compile](Images/Screenshot%20(40).png)

4. How to access

If you are unable to install you can access the app online at Netlify using the following link
- https://646dd6358442827cafbb68e1--resplendent-kelpie-03ccf5.netlify.app/

5. How to use

Once the App is opened you should have a screen that resembles the below. 

![Opening Screen](Images/Screenshot%20(41).png)

Click the search link to open the search form, from there you can type in the 
item name you wish to search for. If you want to narrow down the results you 
can also select the type of media you wish to search. 

![Search example](Images/Screenshot%20(44).png)

Click the search button and the results will return below the form. 

![results](Images/Screenshot%20(42).png)

You can add any of the results to your favourites list by clicking the 
Add to favourites button. 

To view your favourites list click the My Favourites link. 
Any item you have added to favourites from any searches will be in the list. 
You can follow the link to the Apple store to by the items or if you no 
longer wish to have an item in your list you can remove it clicking the
delete button. 

![Favourites](Images/Screenshot%20(43).png)

Note! Any time you navigate away from the page or refresh the items in your favourites 
will not be saved. 

The App has been secured with helmet with the default levels of protection applied.
Check by Security Headers

![Security Check](Images/Screenshot%20(45).png)


