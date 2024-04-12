import Head from 'next/head'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    description: "John is the visionary behind our brand, guiding us with his passion for fashion and innovation.",
    image: "/images/member1.jpg",
  },
  {
    name: "Jane Smith",
    role: "Head Designer",
    description: "Jane leads our design team, bringing creativity and style to every collection.",
    image: "/images/member2.jpg",
  },
  {
    name: "Michael Johnson",
    role: "Marketing Manager",
    description: "Michael oversees our marketing efforts, ensuring our brand reaches fashion enthusiasts worldwide.",
    image: "/images/member3.jpg",
  },
  // Add more team members as needed
]

const About = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow bg-[#1a1a1a] text-white">
        <div className="container mx-auto p-8">
          <h1 className="text-4xl font-bold mb-4 text-center">About Us</h1>
          <div className="mb-8 p-5">
            <p className="mb-4 text-lg">Welcome to our clothing store! We are passionate about fashion and committed to providing our customers with the latest trends at affordable prices.</p>
            <p className="mb-4 text-lg">Our journey began in 20XX when we opened our first store in Washington, DC. Since then, we have grown into a global brand with a mission to make fashion accessible to all.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 m-20">
            <div className="w-full text-center">
              <p className="mb-4 text-white">Meet our team of designers, stylists, and fashion enthusiasts who work tirelessly to bring you the best in fashion:</p>
            </div>
            {teamMembers.map((member, index) => (
              <Card key={index} className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 cursor-pointer transform hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <img src={member.image} alt={member.name} className="h-70 object-cover aspect-w-1 aspect-h-1" />
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p>Thank you for choosing us as your fashion destination. We look forward to serving you!</p>
        </div>
        </div>
        <footer className="bg-cyan-500 text-center py-4">
          <p>&copy; 2024 Your Clothing Store. All Rights Reserved.</p>
        </footer>
      </div>
    </>
  )
}

export default About
