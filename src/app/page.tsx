import Sale from "./components/Sale";
import HeroBanner from "./components/HeroBanner";
import LatestProducts from "./components/LatestProducts";

 export default  function Home() {

  return (
   <main>
      <HeroBanner/>
      <LatestProducts/>
      <Sale/>
   </main>
    
  );
}
