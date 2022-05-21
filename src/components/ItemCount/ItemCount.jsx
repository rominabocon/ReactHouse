import React, { useState } from 'react'
import s from './ItemCount.module.css'

function ItemCount({stock}) {
    const [count, setCount] = useState(0);

    function adding () {
        if(count < stock) {
            setCount(count + 1);
        }
    }
    function subs () {
        if(count > 0) {
            setCount(count - 1);
        }
    }

    function onAdd () {
        if(count <=0) { alert("You didn't add any item")
        }else {
        alert('You added ' + count + ' items to your cart');
        }
    }
    
  return (
    <div>
        <div className={s.countContainer}>
            <button onClick={subs} className={s.danger} >-</button>
            <p className={s.contador}>{count}</p>
            <button onClick={adding} className={s.success}>+</button>
        </div>
        <button onClick={onAdd} className={s.addProduct}>Comprar</button>
    </div>
  )
}

export default ItemCount