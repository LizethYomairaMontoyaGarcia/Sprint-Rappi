import { setCantidad} from "../reducers/useReducerInfo";



export const cantidadPlato = (cantidad) =>{
    return async (dispatch) => {
        try {
            dispatch(setCantidad(cantidad));
        } catch (error) {
            console.log('error cantidad', error);
        }
    }   
}