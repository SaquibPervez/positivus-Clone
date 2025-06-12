import Navbar from "./component/navbar";
import Homepage from "./component/home";
import ServicesPage from "./component/services";
import CaseStudy from './component/caseStudy'
import WorkingProcess from './component/workProcess'
import Team from './component/team'
import TestimonialCarousel from './component/Textimony'
import ContactCard from './component/contactus'
import Footer from './component/Footer'
export default function Home() {
  return (
    <>
    <div className="m-auto m-w-[100%]">
    <Navbar />
    <Homepage />
    <ServicesPage />
    <CaseStudy />
    <WorkingProcess />
    <Team />
    <TestimonialCarousel />
    <ContactCard />
    <Footer />

    </div>
    </>
  );
}
