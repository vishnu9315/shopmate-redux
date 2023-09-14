const {createSlice} = require('@reduxjs/toolkit')

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartList: [],
        total: 0
    },
    //what type of actions we can perform on our initial state
    reducers: {
        add(state, action){
            const updatedCartList = state.cartList.concat(action.payload)
            const total = state.total + action.payload.price;
            return {...state, total: total, cartList: updatedCartList}

        },
        remove(state, action){
            //action.payload means the product that we dispatched and we are accessing that product using action.payload.id which is simply product.id
            const updatedCartList = state.cartList.filter(item => item.id !== action.payload.id)
            const total = state.total - action.payload.price;
            return {...state, total:total, cartList: updatedCartList}

        }

    }
})

export const {add, remove} = cartSlice.actions;
//Registering all of these into the store
export const cartReducer = cartSlice.reducer;
