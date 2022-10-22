//https://jsonplaceholder.typicode.com/users/1

const getUsers = async (url) =>{
    try {
        const response = await fetch(url);
        return response.json(); 
        
    } catch (error) {
        return error
    }
      
}

export default getUsers;