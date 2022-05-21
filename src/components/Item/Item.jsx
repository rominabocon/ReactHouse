import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import s from './Item.module.css'

function Item({imagen, nombre, id, precio, stock}) {
  return (
    <div className={s.cardContainer} key={id}>
    <img src={imagen} alt={nombre} className={s.componentsImg}/>
    <div className={s.cardInfo}>
        <h4><b>{nombre}</b></h4> 
        <p>$ {precio}</p> 
    </div>
    <ItemCount stock={stock}/>
    </div>
  )
}

export default Item