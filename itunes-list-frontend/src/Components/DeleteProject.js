/* The DeleteProject function is another async function
that when user selects an item to delete, the item id
is passed to the function, fetched with await, and deleted
using DELETE method. 
*/
const DeleteProject = async(id) => {
            //console.log(id);
            
            const response = await fetch(`/list/${id}`,{
            method: "DELETE",
            })
            if (!response.ok) {
            throw new Error('Data coud not be Deleted!')
            } else { 
            return response.json()
            }
            
            
        }
        

export default DeleteProject
