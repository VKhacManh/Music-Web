import axiosBaseQuery from "../axios.js"
import {user, setUser} from "../constant.js"

export const fetchUser = async () => {
  
  
    const res = await axiosBaseQuery.get("/users/me")
    setUser(res.data)
  
  
    /* setUser(userData); */

  }