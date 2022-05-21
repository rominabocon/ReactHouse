import React from 'react'
import Item from './Item'

function ItemList ({productos}) {
    return (
        productos.map(p => (
            <Item

            key={p.id}
            nombre={p.nombre}
            imagen={p.imagen}
            precio={p.precio}
            stock={p.stock}
            />
        )
    )
    )
}

export default ItemList