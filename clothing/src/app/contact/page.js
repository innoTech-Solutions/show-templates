import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import Separator from '@/components/ui/separator';
import Footer from '@/components/Footer';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const Contact = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8 my-24">
        <h1 className="text-5xl font-bold m-10">Get in touch</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl font-bold mb-2">Send Message</h2>
            <p className="mb-4">Proident enim velit ex eiusmod ullamco excepteur dolore occaecat.</p>
            
            <form className="flex flex-col mr-10">

              <div className="mb-4 flex">

                <div className="w-1/2 mr-2">
                  <label htmlFor="name" className="block text-lg font-bold text-black">Name</label>
                  <Input type="text" id="name" name="name" className="border border-gray-300 px-3 py-2 w-full" />
                </div>

                <div className="w-1/2 mr-2">
                  <label htmlFor="email" className="block text-lg font-bold text-black">Email Address</label>
                  <Input type="email" id="email" name="email" className="border border-gray-300 px-3 py-2 w-full" />
                </div>
              </div>

              <div className="mb-4 flex">
                <div className="w-1/2 ml-2">
                  <label htmlFor="interested" className="block text-lg font-bold text-black">Interested in</label>
                  <Select id="interested" name="interested" className="border border-gray-300 px-3 py-2 w-full">
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option"/>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                      <SelectItem value="option3">Option 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="w-1/2 ml-2">
                  <label htmlFor="phone" className="block text-lg font-bold text-black">Phone Number</label>
                  <Input type="tel" id="phone" name="phone" className="border border-gray-300 px-3 py-2 w-full" />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-lg font-bold text-black">Message</label>
                <Textarea id="message" name="message" rows="4" className="border border-gray-300 px-3 py-2 w-full"></Textarea>
              </div>

              <button type="submit" className="bg-black text-white px-4 py-2 self-end"> -{'>'} Send Message</button>
            </form>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-1/2">
              <h2 className="text-xl font-bold mb-2">Call Us</h2>
              <p className="mb-4">Proident enim velit ex eiusmod ullamco excepteur dolore occaecat.</p>
              <a href="tel:+1234567890" className="flex items-center mb-4">
                <span className="text-blue-500 mr-2">+1234567890</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 1a9 9 0 0 0-9 9c0 4.418 3.196 8.09 7.383 8.868v-2.059a1 1 0 0 1 .293-.707l1.414-1.414a1 1 0 0 1 1.414 0l.82.822c1.937.674 3.515.901 4.776.901 1.785 0 3.088-.539 3.945-1.678l.915-.913a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1 .292.707v2.059C16.804 18.09 20 14.418 20 10A9 9 0 0 0 10 1zM1.121 7.464a8 8 0 0 1 12.414-.587l-1.758 1.758a1 1 0 0 0-.293.707v2.53l-1.556-1.556a1 1 0 0 0-1.414 0L8 12.293l-1.414-1.414a1 1 0 0 0-1.414 0L4.707 12 3.293 10.586a1 1 0 0 0-1.414 0L.707 12.757a.5.5 0 0 0 0 .707l1.757 1.758a8 8 0 0 1-1.643-7.758z"/>
                </svg>
              </a>
              <h2 className="text-xl font-bold mb-2">Visit Us</h2>
              <p className="mb-4">Proident enim velit ex eiusmod ullamco excepteur dolore occaecat.</p>
              <a href="#" className="text-blue-500 mb-4">Visit Us</a>
              <h2 className="text-xl font-bold mb-2">Live Chat</h2>
              <p className="mb-4">Proident enim velit ex eiusmod ullamco excepteur dolore occaecat.</p>
              <a href="#" className="text-blue-500 mb-4">Live Chat</a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center my-20">
        <div className="w-3/4">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123774.33968751953!2d120.72905479726562!3d14.1978164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd821014e92dfd%3A0x6845fb3c06ec30c8!2sCavite%20State%20University%20-%20Don%20Severino%20Delas%20Alas%20Campus!5e0!3m2!1sen!2sph!4v1712058323428!5m2!1sen!2sph" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>


      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl font-bold m-10">FAQ</h2>
            <h1 className="text-7xl font-bold mb-8">Frequently<br></br>asked<br></br>questions</h1>
          </div>
          <div className=" text-black py-8 my-20">
            <div className="container mx-auto">
              <h2 className="text-2xl font-bold mb-4">FAQs</h2>
              <p className="text-md mb-4 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                          Sed nec augue nec justo tristique faucibus. 
                                          Curabitur sit amet justo vitae justo feugiat fermentum. 
                                          Fusce id volutpat justo.</p>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-medium">
                    Is it accessible?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm">
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium">
                    Do you offer international shipping?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm">
                    Yes. We offer international shipping to most countries.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-medium">
                    How can I track my order?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm">
                    Once your order has shipped, you will receive a tracking number via email.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default Contact;
