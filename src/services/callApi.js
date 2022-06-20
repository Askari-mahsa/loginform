import  axios  from "axios";

export const callApi = () =>{
  
  let baseURL = "https://jsonplaceholder.typicode.com/users";
  
 return  axios.get(baseURL)


}
export const callAdminApi = () =>{
  
  let baseURL = "https://api.github.com/search/users?q=admin";
  
 return  axios.get(baseURL)
}