
import axios from 'axios';
import { useState, useEffect } from 'react';
import '../Styles/Categories.css'
import Sidenav from './Sidenav';

function Categories() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
          .then((response) => setCategories(response.data.categories))
      }, [])
  
    //const onSubmit = (e) => {
    //  e.preventDefault();
    //   setCategories();
    // }
  
  
    //if (!categories) return null;
  
    return (
      <div className="cover">
        <h1 className='heading'>Explore our top categories of Meals🍔</h1>
  
        <div className='container'>
          {categories.map((category, index) => {
            return (
              <div key={index} className='cardplate'>
                <img src={category.strCategoryThumb} alt='img' />
                {category.idCategory}  <h3>{category.strCategory}</h3>
                <h3>{category.strCategoryDescription}</h3>
  
              </div>
            )
          })}
        </div>
        <Sidenav />
      </div>
    )
}

export default Categories