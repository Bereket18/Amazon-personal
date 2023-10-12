import axios from "axios";

export async function ProductsData(error) {
	// let products = await axios.get("https://fakestoreapiserver.reactbd.com/tech");
	// let products = await axios.get("https://dummyjson.com/products");
	let products = await axios.get("https://fakestoreapi.com/products");
	return products;
}
