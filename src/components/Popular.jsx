import { useEffect, useState } from "react";


function Popular() {

  const [ popular ,setPopular] = useState([])

  useEffect( () =>{
    getPopular();
  
  },[])

  console.log(popular);

  const getPopular = async () =>{

    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`);
    const data = await api.json()

  
    setPopular(data.recipes)




  }
  return (
    <div>{popular.map( (recipe ) => {

      return(
        <div key={recipe.id}>{recipe.title}</div>
      )
    })}</div>
  )
}

export default Popular