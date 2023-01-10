import { createSlice ,createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios"




export const loginUser = createAsyncThunk("user/loginUser",async(info, {rejectWithValue})=>{
    try {
 const res =   await axios.post('http://localhost:5000/api/v1/users/login',info)
 console.log(res.data)
        return res?.data

    } catch (error) {
       return rejectWithValue(error?.response?.data?.msg)
    }
 })


 export const RegistreUser = createAsyncThunk("user/RegistreUser",async(info, {rejectWithValue})=>{
    try {
 const res =   await axios.post('http://localhost:5000/api/v1/users/registre',{
    ...info.data})
        info.nav('/login')
        return res?.data

    } catch (error) {
       return rejectWithValue(error?.response?.data?.msg)
    }
 })

 export const getuserInfo = createAsyncThunk("user/getuserInfo",async(info, {rejectWithValue})=>{
    try {
 const res =   await axios.get('http://localhost:5000/api/v1/users/userdata',{
            headers:{Authorization:`Bearer ${localStorage.getItem('token')}`} })
      
        return res?.data

    } catch (error) {
       return rejectWithValue(error?.response?.data?.msg)
    }
 })


const userSlice = createSlice({
    name: "user",
    initialState :{
        userInfo :{},
       // userInfo: JSON.parse(localStorage.getItem("userInfo")) ||{},
        token:localStorage.getItem("token")?localStorage.getItem("token") :null,
        isAuth : Boolean(localStorage.getItem("isAuth")) || false,
        errors:null,
    },
    reducers:{
        logout:(state)=>{
           state.userInfo = {}
           state.isAuth = false
           state.token =null
           localStorage.removeItem("token")
           localStorage.removeItem("isAuth")
        }

    },
    extraReducers:{
        [loginUser.pending]:(state)=>{
            state.loading = true

        },
        [loginUser.fulfilled]:(state,action)=>{
            state.loading = false
            state.token = action.payload.token
            localStorage.setItem("token",action.payload.token)
            action.userInfo = action.payload.userData
            localStorage.setItem("userInfo",JSON.stringify(action.payload.userData))
            state.isAuth =true
            localStorage.setItem("isAuth",true)
            state.errors =null


        },
        [loginUser.rejected]:(state,action)=>{
            state.loading = false
            state.errors = action.payload

        },

      [getuserInfo.fulfilled]:(state,action)=>{
          state.userInfo = action.payload

 },}


})
export default userSlice.reducer
export const {logout} = userSlice.actions