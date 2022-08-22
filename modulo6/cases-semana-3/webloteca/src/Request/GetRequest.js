import axios from 'axios'
import { Base_Url } from './../Constants/Base_Url';

export const GetRequest = async (input) => {
    input.setLoading(true)
    try {
       const lotteries =  await axios.get(Base_Url + input.endpoint)
       input.setData(lotteries.data)
       input.setLoading(false)
    } catch (error) {
        input.setLoading(false)
        input.setMessageError("Sorry, something went wrong. Try again later!")

    }
}