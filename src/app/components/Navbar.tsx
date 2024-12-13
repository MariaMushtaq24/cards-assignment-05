import Image from "next/image"
import Link from "next/link"
export default function Navbar(){
return(
   <div className="flex flex-row">
<div>
<Image 
    src="/public/preview.jpg "
    alt="Logo"
    width={120}
    height={120}/>
    
    <div className="container justify-between w-full flex flex-row items-center bg-gray-400 h-20 ">
<Link href="/Home" className="font-bold mx-16"> Home </Link>
<Link href="/About" className="font-bold mx-16"> About </Link>
<Link href="/Services" className="font-bold mx-16"> Services </Link>
<Link href="/Products" className="font-bold mx-16"> Products </Link>
<Link href="/ContactUs" className="font-bold mx-16"> Contact Us </Link>
<Link href="/Testimonials" className="font-bold mx-16"> Testimonials </Link>
    </div>
<main>
    <section className=" bg-gray-400 flex justify-center gap-5 h-auto w-full p-4 mt-8">
        <div className="h-80 w-[450px] bg-blue-800 rounded-md shadow-2xl"></div>
        <div className="h-80 w-[450px] bg-blue-800 rounded-md shadow-2xl"></div>
        <div className="h-80 w-[450px] bg-blue-800 rounded-md shadow-2xl"></div>
    </section>
    <section className=" bg-gray-400 flex justify-center gap-2 h-auto w-full p-4 mt-8">
        <div className="h-80 w-[450px] bg-blue-800 rounded-md shadow-2xl"></div>
        <div className="h-80 w-[450px] bg-blue-800 rounded-md shadow-2xl"></div>
    </section>
</main>
</div>
</div>
)
};