import { RowItemView } from "./RowItemView"
import PropTypes from 'prop-types'

export const ListItemsView = ({title,items}) => {

    return (

        <>
            <h4>{title}</h4>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>productos</th>
                        <th>precio</th>
                        <th>cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(({id,product,price,quantity})=>(
                        //console.log(item)
                      //  return (
                           <RowItemView key={id} product={product} price={price} quantity={quantity}/>
                    ))}
                </tbody>
            </table>
        </>
    )
}

ListItemsView.propTypes={
    title:PropTypes.string.isRequired,
    item:PropTypes.array.isRequired,
}