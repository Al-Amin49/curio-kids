
import course3 from "@/assets/courses/course-1.jpg";
import course2 from "@/assets/courses/course-2.jpg";
import course1 from "@/assets/courses/course-3.jpg";
import teacher1 from "@/assets/teachers/teacher-1.jpg";
import teacher2 from "@/assets/teachers/teacher-2.jpg";
import teacher3 from "@/assets/teachers/teacher-3.jpg";
import teacher4 from "@/assets/teachers/teacher-4.jpg";

export const coursesData=

[
    {
        id: 1,
        title: "Creative Arts and Crafts",
        description: "Encourage your child's creativity with our arts and crafts class, where they can explore different materials and techniques.",
        age: "3-5",
        time: "10:00 AM - 11:30 AM",
        seat: 15,
        price: "$20",
        img: course1
      },
      {
        id: 2,
        title: "History and Adventures",
        description: "Take your child on a journey through time with exciting stories and activities that bring history to life.",
        age: "4-6",
        time: "12:00 PM - 1:30 PM",
        seat: 12,
        price: "$25",
        img: course2
      },
      {
        id: 3,
        title: "Mathematics Adventures",
        description: "Join us on a journey through the world of numbers with fun and engaging math activities.",
        age: "3-5",
        time: "2:00 PM - 3:00 PM",
        seat: 20,
        price: "$15",
        img:course3
      },
    
  ]
  
  export const teachersData=[
    {
        id: 1,
        name: "Sarah Johnson",
        designation: "Math Teacher",
        image: teacher1,
        socialLinks: {
          linkedin: "https://www.linkedin.com/in/sarah-johnson",
          facebook: "https://www.facebook.com/sarah.johnson",
          twitter: "https://twitter.com/sarahjohnson",
          instagram: "https://www.instagram.com/sarahjohnson",
        },
      },
      {
        id: 2,
        name: "Michael Brown",
        designation: "Science Teacher",
        image:teacher2,
        socialLinks: {
          linkedin: "https://www.linkedin.com/in/michael-brown",
          facebook: "https://www.facebook.com/michael.brown",
          twitter: "https://twitter.com/michaelbrown",
          instagram: "https://www.instagram.com/michaelbrown",
        },
      },
      {
        id: 3,
        name: "Emily Davis",
        designation: "English Teacher",
        image: teacher3,
        socialLinks: {
          linkedin: "https://www.linkedin.com/in/emily-davis",
          facebook: "https://www.facebook.com/emily.davis",
          twitter: "https://twitter.com/emilydavis",
          instagram: "https://www.instagram.com/emilydavis",
        },
      },
      {
        id: 4,
        name: "David Wilson",
        designation: "Art Teacher",
        image: teacher4,
        socialLinks: {
          linkedin: "https://www.linkedin.com/in/david-wilson",
          facebook: "https://www.facebook.com/david.wilson",
          twitter: "https://twitter.com/davidwilson",
          instagram: "https://www.instagram.com/davidwilson",
        },
      },
  ]