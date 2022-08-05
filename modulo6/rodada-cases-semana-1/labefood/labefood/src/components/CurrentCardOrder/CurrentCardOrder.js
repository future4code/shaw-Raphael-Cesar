import React from 'react'
import { CurrentCardOrderContainer, CurrentOrderInformation, OrderItenTitle, OrderTotal } from './styled'
import AccessTimeIcon from '@mui/icons-material/AccessTime';


export default function CurrentCardOrder({ order }) {

    return (
        <CurrentCardOrderContainer>
            <AccessTimeIcon  />
            <CurrentOrderInformation>
                <h3>Pedido em andamento</h3>
                <OrderItenTitle>{order.restaurantName}</OrderItenTitle>
                <OrderTotal>subtotal R${parseFloat(order.totalPrice).toFixed(2).toString().replace(".", ",")}</OrderTotal>
            </CurrentOrderInformation>
        </CurrentCardOrderContainer>
    )
}
