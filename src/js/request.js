
const getUsers = async (url) =>{
    try {
        const response = await fetch(url);
        return response.json(); 
        
    } catch (error) {
        return error
    }
      
}

export default getUsers;