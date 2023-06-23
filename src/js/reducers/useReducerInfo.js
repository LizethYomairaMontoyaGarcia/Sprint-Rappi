import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: null,
    restaurantes: [],
    selectedRestaurantId: null,
    platoSeleccionado: [],
    cantidad: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers:{
        setUser: (state, action) => {
            state.user = action.payload
        },
        setCantidad: (state, action) => {
            state.cantidad = action.payload
        }
    }
});

export const {setUser, user, setCantidad} = authSlice.actions;
export default  authSlice.reducer;