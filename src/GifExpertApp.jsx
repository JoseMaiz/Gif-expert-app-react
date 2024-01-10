import {useState} from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const initialStateCagory = JSON.parse(localStorage.getItem('category'));
  const [categories, setCategories] = useState(initialStateCagory || []);

  const onAddCategory = (newCategory)=>{
    
    const validarCategories = categories.includes(newCategory);
    if (validarCategories) return;

    //* Primera solucción
    // setCategories(categories.concat("Valorant"));
    // *Segunda solucción
    setCategories([ newCategory ,...categories ]);
    localStorage.setItem('category', JSON.stringify([ newCategory ,...categories ]))
  }

  const onClickHistory = ()=>{
    localStorage.clear();
    setCategories([]);
  }


  return (
    <>

      <h1 className='titulo'>GifExpertApp</h1>


      <AddCategory
        // *Manera importando la funcion del useState set setCategories 
        // setCategories = {setCategories}
        
        // * Manera importando una funcion normal que haga toda la modificacion del useState setCategories en el parent component
        onNewCategory = {(value) => onAddCategory(value)}
        />

        <div className='btn-container'>
          <button
            onClick={onClickHistory}
          >
            Borrar historial
          </button>
        </div>

      {categories.map(category =>(
          <GifGrid 
            key={category}
            category={category}
          />
        ))
      }

    </>
  )
}


