import React, { useEffect, useState } from 'react'
import customFetch from '../../utils/CustomFetch';
import productos from '../../utils/productos';
import ItemList from './ItemList';
import style from './ItemListContainer.module.css';

function ItemListContainer() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        customFetch(1000, productos)
        .then(resultado => setItems(resultado))
        
    }, []);

    console.log(items);

  return (
    <div className={style.contenedor}>
        <ItemList productos={items} />
    </div>
  )
}

export default ItemListContainer