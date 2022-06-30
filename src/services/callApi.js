import  axios  from "axios";

export const callApi = () =>{
  
  let baseURL = "https://mohsen.samdev.ir/api/albums";
  
 return  axios.post(baseURL)
}
export const callAdminApi = () =>{
  
  let baseURL = "https://mohsen.samdev.ir/api/musics?lastId=-1";
  
 return  axios.post(baseURL)
}