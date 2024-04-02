import React from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import Separator from '@/components/ui/separator';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Get in touch</h1>
      <div className="flex">
        <div className="w-1/2 pr-4">
          <h2 className="text-xl font-bold mb-2">Send Message</h2>
          <p className="mb-4">Some descriptions here...</p>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <Input type="text" id="name" name="name" className="border border-gray-300 px-3 py-2 w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <Input type="email" id="email" name="email" className="border border-gray-300 px-3 py-2 w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="interested" className="block text-sm font-medium text-gray-700">Interested in</label>
              <Select id="interested" name="interested" className="border border-gray-300 px-3 py-2 w-full">
                <SelectTrigger>
                  <SelectValue>Select an option</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <Input type="tel" id="phone" name="phone" className="border border-gray-300 px-3 py-2 w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <Textarea id="message" name="message" rows="4" className="border border-gray-300 px-3 py-2 w-full"></Textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2">Send Message</button>
          </form>
        </div>
        <Separator orientation="vertical" />
        <div className="w-1/2 pl-4">
          <h2 className="text-xl font-bold mb-2">Call Us</h2>
          <p className="mb-4">Some description about calling...</p>
          <a href="tel:+1234567890" className="flex items-center mb-4">
            <span className="text-blue-500 mr-2">+1234567890</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 1a9 9 0 0 0-9 9c0 4.418 3.196 8.09 7.383 8.868v-2.059a1 1 0 0 1 .293-.707l1.414-1.414a1 1 0 0 1 1.414 0l.82.822c1.937.674 3.515.901 4.776.901 1.785 0 3.088-.539 3.945-1.678l.915-.913a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1 .292.707v2.059C16.804 18.09 20 14.418 20 10A9 9 0 0 0 10 1zM1.121 7.464a8 8 0 0 1 12.414-.587l-1.758 1.758a1 1 0 0 0-.293.707v2.53l-1.556-1.556a1 1 0 0 0-1.414 0L8 12.293l-1.414-1.414a1 1 0 0 0-1.414 0L4.707 12 3.293 10.586a1 1 0 0 0-1.414 0L.707 12.757a.5.5 0 0 0 0 .707l1.757 1.758a8 8 0 0 1-1.643-7.758z"/>
            </svg>
          </a>
          <h2 className="text-xl font-bold mb-2">Visit Us</h2>
          <p className="mb-4">Some description about visiting...</p>
          <a href="#" className="text-blue-500 mb-4">Visit Us</a>
          <h2 className="text-xl font-bold mb-2">Live Chat</h2>
          <p className="mb-4">Some description about live chat...</p>
          <a href="#" className="text-blue-500 mb-4">Live Chat</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
