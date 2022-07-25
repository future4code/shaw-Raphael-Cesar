import React, { useEffect, useState } from "react";
import axios from 'axios'
import { BASE_URL } from '../../Constants/url'
import { useParams } from 'react-router-dom'
import { ContainerRestaurant, CardRestaurant, SectionProductyByCategory, Category } from "./styled";
import CardsRestaurantDetails from "../../Components/CardsRestaurantDetails/CardsRestaurantDetails";
import CardProduct from "../../Components/Cardproduct/Cardproduct";


const Restaurant = () => {
    const { restaurantId } = useParams()
    const [restaurant, setRestaurant] = useState([])
    const [categories, setCategories] = useState([])

    const getRestaurant = async () => {
        const token = window.localStorage.getItem('token')
        await axios
            .get(`${BASE_URL}/restaurants/${restaurantId}`, {
                headers: {
                    auth: token
                }

            })
            .then((res) => {
                setRestaurant(res.data.restaurant)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err.response.data.message)
            })
    };
    useEffect(() => {
        getRestaurant()
    }, []);

    useEffect(() => {
        if (restaurant.products) {
            const newCategories = []
            for (const product of restaurant.products) {
                if (!newCategories.includes(product.category)) {
                    newCategories.push(product.category)
                }
            }
            setCategories(newCategories)
        }
    }, [restaurant])


    return (
        <ContainerRestaurant>
            <CardRestaurant>
                <CardsRestaurantDetails restaurant={restaurant} />

                {
                    restaurant.products && categories.map((category) => {
                        return <SectionProductyByCategory>
                            <Category>{category}</Category>
                            {
                                restaurant.products
                                .filter((product)=>{
                                    return product.category === category
                                }).map((product) => {
                                    return <CardProduct key={product.id} product={product} />
                                })
                            }
                        </SectionProductyByCategory>
                    })
                }

            </CardRestaurant>
        </ContainerRestaurant>
    )


}
export default Restaurant