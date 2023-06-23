import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: null,
    restaurants: [],
    selectedRestaurant: null,
    platoSeleccionado: [],
    dish: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers:{
        setUser: (state, action) => {
            state.user = action.payload
        },
        setCantidad: (state, action) => {
            state.dish = action.payload
        }
    }
});

export const {setUser, user, setCantidad} = authSlice.actions;
export default  authSlice.reducer;