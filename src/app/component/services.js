
import ServiceCard from './ServiceCard/card';

export function ServicesPage() {
const services = [
  {
    title: <span className="bg-[#B9FF66] text-black px-2 rounded">Search Engine Optimization</span>,
    image: <img src="/cardicon.svg" alt="logo" className="w-full h-full object-contain" />,
    buttonText: 'Learn More',
    bgColor: 'bg-gray-200',
  },
  {
    title: <span className="bg-white text-black px-2 rounded">Search Engine Optimization</span>,
    image: <img src="/cardicon.svg" alt="logo" className="w-full h-full object-contain" />,
    buttonText: 'Learn More',
    bgColor: 'bg-[#B9FF66]',
  },
  {
   title: <span className="bg-white text-black px-2 rounded">Search Engine Optimization</span>,
    image: <img src="/service_icon.svg" alt="logo" className="w-full h-full object-contain" />,
    buttonText: 'Learn More',
    bgColor: 'bg-black', 
    buttonClass: 'text-white',
  },
  {
    title: <span className="bg-[#B9FF66] text-black px-2 rounded">Search Engine Optimization</span>,
    image: <img src="/cardicon.svg" alt="logo" className="w-full h-full object-contain" />,
    buttonText: 'Learn More',
    bgColor: 'bg-gray-200',
  },
  {
    title: <span className="bg-white text-black px-2 rounded">Search Engine Optimization</span>,
    image: <img src="/cardicon.svg" alt="logo" className="w-full h-full object-contain" />,
    buttonText: 'Learn More',
    bgColor: 'bg-[#B9FF66]',
  },
  {
    title: <span className="bg-[#B9FF66] text-black px-2 rounded">Search Engine Optimization</span>,
    image: <img src="/service_icon.svg" alt="logo" className="w-full h-full object-contain" />,
    buttonText: 'Learn More', 
    bgColor: 'bg-black',
    buttonClass: 'text-white',
  },
];

return (
  <>
  <div className="px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-12 text-center">
  <h1 className="text-lg sm:text-xl py-1 px-4 sm:px-6 font-bold text-center bg-[#B9FF66] rounded-xl whitespace-nowrap">
    Services
  </h1>
  <p className="text-sm sm:text-base text-gray-700">
    At our digital marketing agency, we offer a range of services to<br className="hidden sm:block" />
    help businesses grow and succeed online. These services include:
  </p>
</div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 ">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
 <div className="w-[86%] sm:w-[96%] bg-gray-200 mx-auto rounded-3xl flex flex-col md:flex-row items-center justify-between my-4 relative overflow-visible px-4 sm:px-6 md:px-10 py-8">
  <div className="flex flex-col gap-4 w-full md:w-1/2 z-10 text-center md:text-left">
    <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800">
      Let's make things happen!
    </h3>
    <p className="text-sm sm:text-base text-gray-700">
      Contact us today to learn more about how our digital <br className="hidden sm:block" />
      marketing services can help your business grow and <br className="hidden sm:block" />
      succeed online.
    </p>
    <div className="flex justify-center md:justify-start">
      <button className="px-6 py-3 rounded-md bg-black text-white hover:bg-blue-600 transition text-sm sm:text-base">
        Get your free proposal
      </button> 
    </div>
  </div>

<div className="hidden md:flex w-full md:w-1/2 justify-end mt-6 md:mt-0 relative z-0">
  <div className="w-[200px] sm:w-[250px] h-auto relative md:static">
    <img src="./icon 2.svg" alt="icon" className="relative z-10 max-w-full h-auto" />
  </div>
</div>
</div>

    </>
);
}
export default ServicesPage;
