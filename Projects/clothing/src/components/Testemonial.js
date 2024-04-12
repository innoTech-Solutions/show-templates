import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * The `Testimonial` component displays a testimonial card with the name, designation, avatar, testimonial content, and date.
 * @param {string} name - The name of the person giving the testimonial.
 * @param {string} designation - The designation of the person giving the testimonial.
 * @param {string} avatarSrc - The URL of the avatar image of the person giving the testimonial.
 * @param {string} testimonial - The content of the testimonial.
 * @param {string} date - The date when the testimonial was posted.
 * @component
 * @returns {JSX.Element} The rendered Testimonial component.
 */
const Testimonial = ({ name, designation, avatarSrc, testimonial, date }) => {
  return (
    <Card className="bg-white shadow-md rounded-lg p-4 mb-8 mx-10 transition-transform transform hover:scale-105">
      <CardHeader>
        <div className="flex items-center">
          <div className="w-20 h-20 rounded-full overflow-hidden mr-4">
            <img src={avatarSrc} alt={name} className="w-full h-full object-cover" />
          </div>
          <div>
            <CardTitle>{name}</CardTitle>
            <CardDescription>{designation}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-800 mb-4">{testimonial}</p>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-gray-500">Posted on: {date}</p>
      </CardFooter>
    </Card>
  );
};

/**
 * The `Testimonials` component displays a list of testimonials using the `Testimonial` component.
 * @component
 * @returns {JSX.Element} The rendered Testimonials component.
 */
const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      designation: "CEO, Company Name",
      avatarSrc: "/images/member1.jpg",
      testimonial: "It was a pleasure working with this team. They delivered high-quality work within the given time frame and were very professional throughout the project.",
      date: "January 1, 2024",
    },
    {
      name: "Jane Smith",
      designation: "CTO, Company Name",
      avatarSrc: "/images/member2.jpg",
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies, quam eu tempor pellentesque, justo mauris lacinia eros, eu eleifend magna lorem at nisi.",
      date: "February 15, 2024",
    },
    {
      name: "Alice Johnson",
      designation: "COO, Company Name",
      avatarSrc: "/images/member3.jpg",
      testimonial: "Vivamus congue vehicula ex, nec ultrices dolor suscipit eu. Proin ullamcorper, justo a convallis vestibulum, lorem felis commodo erat, ac consequat nunc lectus vitae lorem.",
      date: "March 30, 2024",
    },
  ];

  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold my-8">Testimonials</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
