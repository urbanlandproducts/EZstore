import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product-actions";

export const metadata = {
  title: 'home'
}

const Homepage = async () => {
  const latestProducts = await getLatestProducts()
  // implement a limit of 4 products on screen
  return ( <div>
    <ProductList 
      data={latestProducts} 
      title="Newest Arrivals" 
      limit={4}
    />
  </div> );
}
 
export default Homepage;