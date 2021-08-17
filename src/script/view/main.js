
import Api from '../api/api';
import '../component/list-foods.js';
import '../component/card-category.js';
import '../component/card-detail.js';
import '../component/button.js';

const main = () => {   
    const foodListElement = document.querySelector("list-food");
    const cardCategoryElement = document.querySelector("card-category");
    const cardDetailElement = document.querySelector("card-detail");
    const searchInput = document.getElementById("search");
    const searchBtn = document.getElementById("searchBtn");
    const button = document.querySelector("button-comp");
    const list = document.getElementById('list');    

    const getData = async () => {   
        const data = []          
        try {
            for (let index = 0; index <8; index++) {
                const res = await Api.getFoods('random.php');
                data.push(res.data)                  
            }                                  
            foodListElement.foods = data;             
        } catch (e){
            foodListElement.renderError(e);
        }           
    };
    

    const getCategoryData = async (id) => {
        try {
            const res = await Api.getFoodCategory('categories.php',id);
            const res2  = await Api.getListFoodCategory(`filter.php?c=${res.data.strCategory}`)
            cardCategoryElement.data = res.data;
            foodListElement.foods = res2.data;            
        } catch (error) {
            console.log(error)
        }
    }

    const getDetailData = async (id) => {                    
        try {        
            const res = await Api.getFoods(`lookup.php?i=${id}`);                                                                                            
            const ingridients = Object.entries(res.data).slice(9,28).map(entry => entry[1]).filter(item => item.length > 1 ? item !== null : '');
            const measure = Object.entries(res.data).slice(29,48).map(entry => entry[1]).filter(item => item.length > 1 ? item !== null : '');
            const data = {detail: res.data, ingridients, measure};            
            cardDetailElement.data = data;            
        } catch (e){            
            console.log(e)
        }           
    };

    const redirectSearch = () => {
        window.location.replace(`/result.html?search=${searchInput.value}`);
    }

    const getResultSearch = async(keyword) => {
        try {   
            searchInput.value = keyword;     
            const res = await Api.getListFoods(`search.php?s=${keyword}`);                
            foodListElement.foods = res.data;            
        } catch (e){            
            foodListElement.renderError(keyword);
        }   
    }

    const saveRecipe = ()=> { 
        const param = window.location.search
        const id = param.slice(param.indexOf('=')+1, param.length);    
        const dataSaved = [];   
        const stored = JSON.parse(localStorage.getItem("recipes"));        
        if (stored !== null){
            dataSaved.push(...stored);                              
            if(stored.filter(item => item.id !== id).length !== 0){
                dataSaved.push({id})
                localStorage.setItem("recipes", JSON.stringify(dataSaved));
                button.setAttribute("title", "CANCEL SAVE");                
            }else{
                button.setAttribute("title", "CANCEL SAVE");
            }
        }else{            
            localStorage.setItem("recipes", JSON.stringify([{id}]));
            button.setAttribute("title", "SAVED");
        }                                     
    }
    const deleteRecipe = (id) => {
        const stored = JSON.parse(localStorage.getItem("recipes"));  
        const data = stored.filter(item => item.id !== id);
        if (data.length > 0){
            localStorage.setItem("recipes", JSON.stringify(data));
        }else{
            localStorage.clear();
        }
        
        window.location.replace(`/list.html`);
    }
    const listRecipe = async () => {
        const recipes = JSON.parse(localStorage.getItem("recipes"));                 
        const data = [];
        try {
            for (let index = 0; index < recipes.length; index++) {
                const res = await Api.getFoods(`lookup.php?i=${recipes[index].id}`);                  
                data.push(res.data)                
            }                                                                                                                                       
        } catch (error) {
            console.log(error)
        }
        
        let tr = ``;  
        if(data.length > 0){
            data.map((el, idx) => {
                tr +=`
                <tr>
                    <td>${idx+1}</td>
                    <td><img class='img-tb' src='${el.strMealThumb}' alt='' /></td>
                    <td>${el.strMeal}</td>
                    <td>${el.strCategory}</td>
                    <td>${el.strArea}</td>
                    <td>
                        <a href='/index.html?id=${el.idMeal}' class='btn btn-danger mr-2'>Delete</button>
                        <a href='/detail.html?id=${el.idMeal}' class='btn btn-primary'>Detail</a>
                    </td>
                </tr>            
                `;            
            });
        }else{
            tr = `
                <tr>
                    <td colspan='6' class='text-center'> No recipes saved <td>
                <tr>
            `
        }                             
        
        list.innerHTML = tr;            
    }

    const param = window.location.search
    const id = param.slice(param.indexOf('=')+1, param.length);
    if(window.location.pathname==='/'){
        getData();
    }else if(window.location.pathname === '/category.html'){        
        getCategoryData(id);  
    }else if(window.location.pathname === '/detail.html'){
        getDetailData(id);    
        button.clickEvent = saveRecipe
    }else if(window.location.pathname === '/result.html'){
        getResultSearch(id);
    }else if(window.location.pathname === '/list.html'){
        listRecipe();        
    }else if(window.location.pathname === '/index.html'){
        deleteRecipe(id);
    }
    
    searchBtn.addEventListener('click', redirectSearch);
        
};


export default main;