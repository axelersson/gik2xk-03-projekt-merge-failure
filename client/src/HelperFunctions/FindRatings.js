export default function FindRatings(products, params){
    
    for (let index = 0; index < products.length; index++) {
        if (products[index].id== params.id){
            console.log(products[index])
            return products[index].ratings
        }
    } 
}