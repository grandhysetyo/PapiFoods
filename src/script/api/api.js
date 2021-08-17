import axios from "axios";
const url = 'https://www.themealdb.com/api/json/v1/1/';
class Api{
    static getFoods(query){
        return new Promise((resolve, reject)=> {
            axios.get(`${url}${query}`)
            .then(function (res) {
                // handle success                                   
                resolve({status:200, data:res.data.meals[0]})
            })
            .catch(function (error) {
                // handle error
                reject({status:400, data: error})
            });
        })
    }
    static getListFoods(query){
        return new Promise((resolve, reject)=> {
            axios.get(`${url}${query}`)
            .then(function (res) {
                // handle success                                        
                resolve({status:200, data:res.data.meals})
            })
            .catch(function (error) {
                // handle error
                reject({status:400, data: error})
            });
        })
    }
    static getFoodCategory(query, id){
        return new Promise((resolve, reject)=> {
            axios.get(`${url}${query}`)
            .then(function (res) {
                // handle success
                const data = res.data.categories.filter(el => el.idCategory === id);                      
                resolve({status:200, data:data[0]})
            })
            .catch(function (error) {
                // handle error
                reject({status:400, data: error})
            });
        })
    }
    static getListFoodCategory(query){
        return new Promise((resolve, reject)=> {
            axios.get(`${url}${query}`)
            .then(function (res) {
                // handle success                                  
                resolve({status:200, data:res.data.meals})
            })
            .catch(function (error) {
                // handle error
                reject({status:400, data: error})
            });
        })
    }     
}
export default Api;