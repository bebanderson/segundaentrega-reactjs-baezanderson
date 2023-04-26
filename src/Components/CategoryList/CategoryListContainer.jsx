import React, { useEffect, useState, useContext } from 'react';
import { CategoryContext } from '../../Contexts/CategoryContext';
import { Spinner } from 'react-bootstrap';
import CategoryItem from '../CategoryItem/CategoryItem';
import CategoryList from "./CategoryList";

function CategoryListContainer(props) {

  const { categorys } = useContext(CategoryContext);
  const [ categoryItem , setCategoryItem] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCategoryItem(categorys.map((item) => 
      <CategoryItem item={item} key={item.id}/>));
      setLoading(false);
  }, [categorys])

  return (
      <>
        { loading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <CategoryList categorys={categoryItem}/>
        )
        }
      </>
    
  )
}

export default CategoryListContainer;