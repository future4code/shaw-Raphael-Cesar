import { useState } from "react"



const UsePost = (initialState) => {

    const [posts, setPosts] = useState(initialState)

    return [posts, setPosts]
}
export default UsePost