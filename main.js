import toDos from "./todos.json";

export default () => {
    for(let i= 0; i < toDos.results.length; i++){
        
        console.log(toDos.results[i].title);
    }
}