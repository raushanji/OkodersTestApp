import * as CONSTANT  from "./ApiConfig";


export async function get(url, header){        

        url = CONSTANT.SERVER_ADDRESS + url;        
                
        if(header == undefined){
            header = {
                'accept': 'application/json'
            }
        }
        return fetch(url, {
                method:'GET',
                headers:header
        })
        .then((response) => { 
            console.log(response);           
            return response.json()
        })
        .then(responseJson => {
          return responseJson
        })
        .catch(error => {
          return error
        });    
}