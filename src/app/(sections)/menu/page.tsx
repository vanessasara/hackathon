import Dessert from "@/components/Dessert";
import Drink from "@/components/Drinks";
import Experience from "@/components/Experience";
import MainCours from "@/components/MainCourse";
import StarterMenu from "@/components/StartMenu";
import PartnersAndClients from "@/components/PartnerClient";
const page = () => {
  return (
    <div>
      <StarterMenu />
      <MainCours />
      <Experience />
      <Dessert />
      <Drink />
      <PartnersAndClients />
    </div>
  )
}

export default page