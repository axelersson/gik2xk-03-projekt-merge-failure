export default function findRating(products, id) {
    for (let index = 0; index < products.length; index++) {
        if (products[index].id == id){
            return products[index].ratings
        }
        
    }

}