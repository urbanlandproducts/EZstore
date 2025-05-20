import { resolve } from "path";

export const metadata = {
  title: 'home'
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms)) 

const Homepage = async () => {
  await delay(2000)
  return ( <>EZ Store</> );
}
 
export default Homepage;