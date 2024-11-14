

export const addToCart= (Product)=>{
    return{
        type:"ADDITEM",
        Payload: Product
    }
}
export const delcart=(product)=>{
    return{
        type: "DELITEM",
        payload: product
    }
} 