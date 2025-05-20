import sampleData from "../../db/sample-data";
import ProductList from "@/components/shared/product/product-list";

export const metadata = {
  title: 'home'
}

const Homepage = () => {
  // implement a limit of 4 products on screen
  return ( <div>
    <ProductList 
      data={sampleData.products} 
      title="Newest Arrivals" 
      limit={4}
    />
  </div> );
}
 
export default Homepage;