export const addToCart = (productId,props) => {
    props.history.push(`/cart/${productId}`);
}