/* The DeleteProject function is another async function
that when user selects an item to delete, the item id
is passed to the function, fetched with await, and deleted
using DELETE method. 

On sucessful delete the page would be reloaded
however the task asks that the database must be cleared if the 
user leaves the page or refreshes the page so this functionality 
is removed  */
const DeleteProject = async(id) => {
            console.log(id);
            
            const response = await fetch(`/list/?trackId=${id}`,{
            method: "DELETE",
            })
            if (!response.ok) {
            throw new Error('Data coud not be Deleted!')
            } else {
            console.log(response)
            alert("Item Deleted!");
            
            return response.json()
            }
            //window.location.reload(false); 
            
        }
        

export default DeleteProject
