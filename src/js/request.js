//https://jsonplaceholder.typicode.com/users/1

const getUsers = async (url) =>{
    const response = await fetch(url);
    return response.json();    
}

export default getUsers;