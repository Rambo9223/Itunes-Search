/* The Add Favourite function is triggered on click of 
the Add to favourites button, it takes the selected
returned result from the search and uses the POST method to 
add the item to our database */
const AddFavourite = async(item) => {

alert("added to favourites");

    const response = await fetch("/list/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    if (!response.ok) {
      throw new Error("Data coud not be Added!");
    } else {
      console.log(response.ok);
      return response.json();
    }
  };
export default AddFavourite;
