import {
  IconBell,
  IconBooks,
  IconBrandBlogger,
  IconBuildingBank,
  IconHome,
  IconSchool,
} from "@tabler/icons-react";

export const navbarvalues = [
  {
    id: 1,
    name: "Courses",
    link: "/our-courses",
  },
  {
    id: 2,
    name: "Tutors",
    link: "/meet-our-tutors",
  },
  {
    id: 3,
    name: "Testimonials",
    link: "/testimonials",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/blog",
  },
  {
    id: 5,
    name: "Upcoming Events",
    link: "/upcoming-events",
    group: true,
  },
  {
    id: 6,
    name: "Jobs Opportunities",
    link: "/jobs-opportunities",
  },
  {
    id: 7,
    name: "Contact Us",
    link: "/contact-us",
  },
  // {
  //   id: 15,
  //   name: "Login",
  //   link: "/admin-login",
  // },
  {
    id: 8,
    name: "Schedule A Call",
    link: "/schedule-a-call",
  },
  {
    id: 10,
    name: "About Us",
    link: "/about-us",
    group: true,
  },
  {
    id: 9,
    name: "Privacy Policy",
    link: "/privacy-policy",
    group: true,
  },
];

export const footerLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About Us",
    link: "/about-us",
  },
  {
    id: 3,
    name: "Courses",
    link: "/our-courses",
  },
  {
    id: 4,
    name: "Tutors",
    link: "/meet-our-tutors",
  },
  {
    id: 5,
    name: "Testimonials",
    link: "/testimonials",
  },
  {
    id: 6,
    name: "Blog",
    link: "/blog",
  },
  {
    id: 7,
    name: "Upcoming Events",
    link: "/upcoming-events",
  },
  {
    id: 8,
    name: "Jobs Opportunities",
    link: "/jobs-opportunities",
  },
  {
    id: 9,
    name: "Contact Us",
    link: "/contact-us",
  },
  {
    id: 10,
    name: "Schedule A Call",
    link: "/schedule-a-call",
  },
  {
    id: 11,
    name: "Privacy Policy",
    link: "/privacy-policy",
  },
];
export const socialMedialinks = [
  {
    id: 1,
    name: "Facebook",
    link: "https://www.facebook.com/med.games.org",
  },
  {
    id: 2,
    name: "Instagram",
    link: "https://www.instagram.com/medgamesorg/?hl=en",
  },
  {
    id: 3,
    name: "Whatsapp",
    link: "https://chat.whatsapp.com/DQzgKDzNJOlCN9z1A80mYw",
  },
  // {
  //   id: 4,
  //   name: "LinkedIn",
  //   link: "https://www.linkedin.com/medgames_ai",
  // },
  {
    id: 5,
    name: "YouTube",
    link: "https://www.youtube.com/@medgames943",
  },
];

export const services = [
  {
    id: 1,
    title: "CARS Program",
    description: [
      "Learn from medical students who have mastered the CARS section and possess the expertise to guide you toward.",
      "Take up of 1 test every weekend to ensure optimal practice.",
    ],
    link: "/our-courses/1",
  },
  {
    id: 2,
    title: "CASPerProgram",
    description: [
      "We value personal attention. Small class sizes give you plenty of time with mentors and peers.",
      "CASPer demands a strategic mindset. Our program guides you in crafting well-structured.",
    ],
    link: "/our-courses/2",
  },
  {
    id: 3,
    title: "Med Applications",
    description: [
      "Elevate your application with insights from current students at your target medical schools.",
      "Our mentorship goes beyond proofreading, shaping your narrative to address gaps.",
    ],
    link: "/our-courses/6",
  },
  {
    id: 4,
    title: "Mentorship",
    description: [
      "MCAT Preparation: Strategies, study plans, and resources.",
      "Extracurricular Activities: Recommendations and planning for impactful involvement.",
    ],
    link: "/our-courses/4",
  },
  {
    id: 5,
    title: "UBC Interview Program",
    description: [
      "Learn from UBC med students with insider knowledge.",
      "Interactive sessions with small class sizes and mock MMI practice.",
    ],
    link: "/our-courses/7",
  },
];
export const courses = [
  {
    id: 1,
    name: "CARS Program",
    description:
      "Our flexible weekend classes are tailored to accommodate your schedule, allowing you to engage fully without disrupting your weekday commitments , Our program focuses on hands-on practice with MCAT-style CARS passages to build confidence ",
    image: "/cars.png",
    details_image: "/cars_img.png",
    link: "/mcat",

    price: "600",
    start_date: "Jan 12,2024",
    end_date: "Apr 12,2025",
    star: "5",
    downloadable_pdf: "/cars_pdf.pdf",
    rating: "3",
    objective:
      "Gain confidence in actively reading and analyzing passages, learn effective strategies for answering questions, and improve timing and accuracy in the CARS section.",

    key_features: [
      "Customizable study schedule.",
      "Small class sizes for personalized attention.",
      "Interactive sessions to discuss reasoning and strategies.",
    ],
    topic_covered: [
      "Comprehensive review of CARS strategies.",
      "High-yield resources for practice.",
      "Test-taking strategies, including timing and active reading techniques.",
    ],
    benefits: [
      "Weekly practice tests to improve performance.",
      "In-depth review of strategies and reasoning.",
      "Safe, interactive learning environment.",
    ],
    additional_resources: [
      "Study notes and cheat sheets.",
      "Weekly performance analytics.",
    ],
    via: "Virtual program, zoom",
    daily_start_time: "6:00 PM",
    daily_end_time: "9:00 PM",
    classDay: "Sunday's",
    instructor: "Martha Hudson",
    instructor_image: "/cars_ins.png",
    enrollerd_student: "120",
    lessons: "15",
    teaching_language: "English",
    reviews: [
      {
        id: 1,
        name: "Olivia H.",
        review_content:
          "I struggled with CARS for months, but this program completely transformed my approach. Weekly practice tests helped me score 131 on the actual exam!",
        image: "/man.png",
        rating: 5,
        small_description: "CARS improvement",
      },
      {
        id: 2,
        name: "Aarav M.",
        review_content:
          "The tutors broke down difficult passages and improved my timing. Their tips helped me complete passages faster without sacrificing accuracy.",
        image: "/man.png",
        rating: 5,
        small_description: "Improved timing",
      },
      {
        id: 3,
        name: "Jessica L.",
        review_content:
          "I loved the interactive sessions. The small group setting felt like a personalized class, and tutors ensured we understood strategies before moving on.",
        image: "/man.png",
        rating: 5,
        small_description: "Interactive sessions",
      },
      {
        id: 4,
        name: "Nikhil R.",
        review_content:
          "CARS was my weakest section, but Med Games turned it into a strength. They focused on strategies that helped me understand test writer intentions.",
        image: "/man.png",
        rating: 4,
        small_description: "Test strategies",
      },
      {
        id: 5,
        name: "Sarah C.",
        review_content:
          "Their focus on active reading and time management transformed how I approached passages. Challenging practice tests prepared me perfectly for the real thing.",
        image: "/man.png",
        rating: 5,
        small_description: "Active reading",
      },
    ],

    course_faqs: [
      {
        id: 1,
        question: "What are the objectives of the CARS program?",
        answer:
          "To help students actively read, understand passages, and apply effective strategies to improve accuracy and timing.",
      },
      {
        id: 2,
        question: "When does the CARS program start?",
        answer:
          "The program runs from January 11, 2025, to April 12, 2025, with sessions every Sunday from 6 PM to 9 PM EST.",
      },
      {
        id: 3,
        question: "What materials are provided for practice?",
        answer:
          "Students receive ten CARS tests, customizable study schedules, and participate in interactive sessions.",
      },
      {
        id: 4,
        question: "Who teaches the CARS program?",
        answer:
          "Expert tutors with 130+ scores in the CARS section teach the program.",
      },
      {
        id: 5,
        question: "What strategies are covered in the program?",
        answer:
          "Strategies include active reading, timing techniques, and methods for reviewing strategies and reasoning.",
      },
    ],
  },
  {
    id: 2,
    name: "CASPer Program",
    description:
      "Our program provides you with four authentic CASPer practice tests in PDF format. These practice tests mirror the actual CASPer experience, helping you familiarize yourself with the test structure, question types, and time constraints",
    image: "/casper.png",
    details_image: "/casper_img.png",
    link: "/mcat",
    price: "400",
    downloadable_pdf: "/casper_pdf.pdf",
    star: "5",
    rating: "3",
    objective:
      "Master CASPer test strategies to excel in both written and oral components.",

    key_features: [
      "Six pre-recorded video lessons covering common CASPer scenarios.",
      "Two live sessions for real-time practice and feedback.",
      "Four PDF tests with suggested answers.",
    ],
    topic_covered: [
      "General strategies for ethical scenarios, policy scenarios, and personal questions.",
      "Practice with timed responses and clear, structured answers.",
      "High ethical standards and professional conduct.",
    ],
    benefits: [
      "Hands-on practice for real CASPer scenarios.",
      "Feedback on responses to improve clarity and coherence.",
      "Comprehensive guidance from experienced mentors.",
    ],
    additional_resources: [
      "Video recordings of live sessions.",
      "Practice tests with detailed solutions.",
    ],
    start_date: "Jan 12,2024",
    end_date: "Apr 12,2025",
    via: "Virtual program, zoom",
    daily_start_time: "6:00 PM",
    daily_end_time: "9:00 PM",
    classDay: "Sunday's",
    instructor: "Juan Lawson",
    instructor_image: "/casper_inc.png",
    enrollerd_student: "120",
    lessons: "15",
    teaching_language: "English",
    reviews: [
      {
        id: 1,
        name: "Meera G.",
        review_content:
          "CASPer seemed so intimidating at first, but the Med Games program broke it down step by step. The live sessions were invaluable, and the tutors’ feedback on my responses helped me see where I needed improvement. I felt confident on test day and scored in the 4th quartile!",
        image: "/man.png",
        rating: 5,
        small_description: "CASPer confidence",
      },
      {
        id: 2,
        name: "Omar K.",
        review_content:
          "I liked how comprehensive this program was. From practice scenarios to ethical reasoning tips, they covered everything I needed. The video recordings were a bonus—I could revisit them anytime for extra practice.",
        image: "/man.png",
        rating: 5,
        small_description: "Comprehensive approach",
      },
      {
        id: 3,
        name: "Hannah B.",
        review_content:
          "I’m so glad I joined this program! The mock CASPer scenarios gave me a clear idea of what to expect, and the feedback was incredibly detailed. I knew exactly what to work on to improve my performance.",
        image: "/man.png",
        rating: 5,
        small_description: "Mock scenarios",
      },
      {
        id: 4,
        name: "Zain A.",
        review_content:
          "The focus on structure and clarity made a huge difference in my written responses. The tutors also helped me stay professional and empathetic in my answers, which I think really set me apart.",
        image: "/man.png",
        rating: 5,
        small_description: "Structure & clarity",
      },
      {
        id: 5,
        name: "Priya T.",
        review_content:
          "Before Med Games, I had no idea how to approach CASPer. The tutors not only taught me strategies but also helped me understand the importance of considering different perspectives. Highly recommend this program!",
        image: "/man.png",
        rating: 5,
        small_description: "Perspective & strategy",
      },
    ],

    course_faqs: [
      {
        id: 1,
        question: "What does the CASPer program include?",
        answer:
          "It includes two live sessions, video recordings, four PDF tests, and six pre-recorded videos.",
      },
      {
        id: 2,
        question: "Who teaches the CASPer program?",
        answer:
          "Medical students with 4th-quartile CASPer scores and experience teaching successful sessions.",
      },
      {
        id: 3,
        question: "Are practice scenarios provided?",
        answer:
          "Yes, sample scenarios and feedback on timed responses are part of the program.",
      },
      {
        id: 4,
        question: "What are the main strategies taught for CASPer?",
        answer:
          "Focus on concise, ethical, and professional responses, as well as addressing questions clearly with examples.",
      },
      {
        id: 5,
        question: "When is the program available?",
        answer:
          "Live sessions are held in August, September, or October, depending on the student’s CASPer exam date.",
      },
    ],
  },
  {
    id: 3,
    name: "Longitudinal MCAT",
    description:
      "Our program provides you with four authentic CASPer practice tests in PDF format. These practice tests mirror the actual CASPer experience, helping you familiarize yourself with the test structure, question types, and time constraints",
    image: "/med_app_img.png",
    details_image: "/med_app_img.png",
    link: "/mcat",
    price: "300",
    downloadable_pdf: "/long_pdf1.pdf",
    star: "5",
    rating: "3",
    start_date: "Jan 12,2024",
    objective:
      "Comprehensive preparation for the MCAT, focusing on high-yield concepts and practice.",

    key_features: [
      "200+ hours of virtual lessons.",
      "Self-paced videos and an organic chemistry crash course.",
      "Recordings of live lectures for future reference.",
    ],
    topic_covered: [
      "Comprehensive content review aligned with the AAMC syllabus.",
      "High-yield topics in biology, chemistry, physics, and organic chemistry.",
      "Practice with 5000+ passages and 4+ mock tests.",
    ],
    benefits: [
      "Personalized learning experience with small class sizes.",
      "Mentorship for guidance and feedback.",
      "Performance analytics to track progress.",
    ],
    additional_resources: [
      "Study notes, cheat sheets, and high-yield resources.",
      "Self-paced crash course videos.",
    ],
    end_date: "Apr 12,2025",
    via: "Virtual program, zoom",
    daily_start_time: "6:00 PM",
    daily_end_time: "9:00 PM",
    classDay: "Sunday's",
    instructor: "Juan Lawson",
    instructor_image: "/casper_inc.png",
    enrollerd_student: "120",
    lessons: "15",
    teaching_language: "English",
    reviews: [
      {
        id: 1,
        name: "Daniel K.",
        review_content:
          "Med Games completely changed the way I prepared for the MCAT. The live sessions were detailed, interactive, and made even complex topics easy to grasp. The tutors were so approachable, and the small class sizes ensured that I got the attention I needed. Scored a 518, and I couldn’t be happier!",
        image: "/man.png",
        rating: 5,
        small_description: "Interactive sessions",
      },
      {
        id: 2,
        name: "Maria P.",
        review_content:
          "I loved the structure of the program—it kept me consistent. The performance analytics and practice passages were especially useful in identifying where I was struggling. What I appreciated most was the mix of live classes and self-paced resources, which allowed me to study at my own rhythm.",
        image: "/man.png",
        rating: 5,
        small_description: "Performance analytics",
      },
      {
        id: 3,
        name: "Ethan J.",
        review_content:
          "This program is worth every penny. The tutors not only taught the material but also helped with test-taking strategies, which made all the difference. My Chem/Phys score improved dramatically after going through their lessons.",
        image: "/man.png",
        rating: 5,
        small_description: "Test-taking strategies",
      },
      {
        id: 4,
        name: "Ritika S.",
        review_content:
          "I was initially hesitant about joining a virtual program, but Med Games exceeded my expectations. The mentorship aspect gave me someone to turn to when I felt overwhelmed. By the end, I felt confident and prepared for the MCAT.",
        image: "/man.png",
        rating: 5,
        small_description: "Mentorship support",
      },
      {
        id: 5,
        name: "Liam T.",
        review_content:
          "What stood out to me was how experienced and relatable the tutors were. They’ve been through the process and know exactly what’s important. I finally understood challenging topics like electrochemistry, which had always been a weak point for me.",
        image: "/man.png",
        rating: 5,
        small_description: "Experienced tutors",
      },
    ],

    course_faqs: [
      {
        id: 1,
        question: "What is covered in the Longitudinal MCAT program?",
        answer:
          "It includes a comprehensive review based on the AAMC Official Syllabus, high-yield concepts, 5000+ practice passages, mock tests, and 50+ self-paced videos.",
      },
      {
        id: 2,
        question: "When does the program take place?",
        answer:
          "It runs from October 12, 2024, to April 12, 2025, with live sessions on Saturdays and Sundays from 10 AM to 1 PM EST.",
      },
      {
        id: 3,
        question: "What makes this program unique?",
        answer:
          "It is taught by experienced medical students who have scored 130+ in the MCAT and features small class sizes, customizable schedules, and high-yield resources.",
      },
      {
        id: 4,
        question: "Can I access recordings if I miss a session?",
        answer:
          "Yes, all live lectures are recorded and provided for student access.",
      },
      {
        id: 5,
        question: "Does this program include personalized support?",
        answer:
          "Yes, it includes detailed performance analytics, mentorship, and a buddy system to facilitate studying.",
      },
    ],
  },
  {
    id: 4,
    name: "Ultimate package",
    description:
      "Our program provides you with four authentic CASPer practice tests in PDF format. These practice tests mirror the actual CASPer experience, helping you familiarize yourself with the test structure, question types, and time constraints",
    image: "/home_mentorship_img.png",
    details_image: "/mentorship.png",
    link: "/mcat",
    price: "3999",
    star: "5",
    rating: "3",
    downloadable_pdf: "/mentorship_pdf.pdf",
    start_date: "Jan 12,2024",
    objective:
      "Provide ongoing support and guidance for the medical school journey, covering MCAT, CASPer, applications, and more.",

    key_features: [
      "Monthly one-on-one meetings with expert mentors.",
      "Personalized support tailored to individual goals.",
      "Access to experienced medical student mentors.",
    ],
    topic_covered: [
      "MCAT preparation strategies and resources.",
      "CASPer practice scenarios and feedback.",
      "Extracurricular activity planning and course selection advice.",
    ],
    benefits: [
      "Comprehensive, ongoing support for all aspects of the medical journey.",
      "Guidance for impactful extracurricular activities.",
      "Feedback on letters of recommendation and personal statements.",
    ],
    additional_resources: [
      "Tailored study plans.",
      "Personalized extracurricular recommendations.",
    ],
    end_date: "Apr 12,2025",
    via: "Virtual program, zoom",
    daily_start_time: "6:00 PM",
    daily_end_time: "9:00 PM",
    classDay: "Sunday's",
    instructor: "Juan Lawson",
    instructor_image: "/casper_inc.png",
    enrollerd_student: "120",
    lessons: "15",
    teaching_language: "English",
    reviews: [
      {
        id: 1,
        name: "James L.",
        review_content:
          "The UBC Interview Program truly prepared me for the MMI. The mock interviews and feedback were invaluable. I felt more confident and ready for the real thing!",
        image: "/man.png",
        rating: 5,
        small_description: "Mock interviews and feedback",
      },
      {
        id: 2,
        name: "Joshua",
        review_content:
          "The step-by-step approach for MCAT and detailed feedback on my CASPer responses made all the difference. This program truly understands what medical schools are looking for.",
        image: "/man.png",
        rating: 5,
        small_description: "Comprehensive MCAT and CASPer preparation",
      },
      {
        id: 3,
        name: "Sathya",
        review_content:
          "Thanks to the expert advice, I felt fully prepared and performed beyond my expectations on the MCAT (received a 520 score) and CASPer (received 4th quartile). I highly recommend Med Games to any premed student.",
        image: "/man.png",
        rating: 5,
        small_description: "High MCAT and CASPer performance",
      },
    ],
    course_faqs: [
      {
        id: 1,
        question: "What is covered in the Monthly Mentorship Program?",
        answer:
          "It covers MCAT strategies, CASPer practice, course selection, extracurricular planning, and personalized support.",
      },
      {
        id: 2,
        question: "How long is each mentorship meeting?",
        answer:
          "Each meeting lasts for a minimum of one hour or more, depending on the discussion topics.",
      },
      {
        id: 3,
        question: "Who are the mentors in this program?",
        answer:
          "Mentors are experienced medical students who have successfully navigated the medical school admission process.",
      },
      {
        id: 4,
        question: "How often will I meet with my mentor?",
        answer:
          "You will have monthly one-on-one meetings with your mentor to discuss progress and challenges.",
      },
      {
        id: 5,
        question: "Can I receive personalized advice on my application?",
        answer:
          "Yes, the program offers tailored advice for MCAT prep, CASPer, extracurriculars, course selections, and more.",
      },
    ],
  },
  {
    id: 5,
    name: "Med Interview Program",
    description:
      "Our program provides you with four authentic CASPer practice tests in PDF format. These practice tests mirror the actual CASPer experience, helping you familiarize yourself with the test structure, question types, and time constraints",
    details_image: "/interview_img.png",
    link: "/mcat",
    price: "300",
    star: "5",
    rating: "3",
    downloadable_pdf: "/cars_pdf.pdf",
    start_date: "Jan 12,2024",
    objective:
      "Equip students with strategies and confidence to excel in medical school interviews, focusing on both oral and written components.",

    key_features: [
      "Six pre-recorded videos covering General strategies, Ethical scenarios,Policy scenarios,Personal questions,Oral responses,Final tips",
      "Two live sessions for real-time practice and feedback.",
      "Four PDF tests with suggested answers.",
    ],
    topic_covered: [
      "The course includes preparation for both written and oral components.",
      "The written component focuses on structuring responses with clear introductions, main points, and conclusions, practicing timed responses to sample scenarios, and ensuring responses are ethical, professional, and concise.",

      "The oral component emphasizes speaking clearly and confidently in front of a camera, incorporating relevant personal or professional experiences into responses, and considering multiple perspectives and potential consequences.",
    ],
    benefits: [
      "Hands-on practice for both written and oral interview scenarios.",
      "Personalized feedback to refine responses.",
      "Preparation for ethical, policy, and personal questions.",
    ],
    additional_resources: [
      "Video recordings of live sessions for future reference.",
      "Sample answers and strategies in PDF format.",
    ],
    end_date: "Apr 12,2025",
    via: "Virtual program, zoom",
    daily_start_time: "6:00 PM",
    daily_end_time: "9:00 PM",
    classDay: "Sunday's",
    instructor: "Juan Lawson",
    instructor_image: "/casper_inc.png",
    enrollerd_student: "120",
    lessons: "15",
    teaching_language: "English",
    reviews: [
      {
        id: 1,
        name: "Noah F.",
        review_content:
          "The mock interviews were so realistic and helpful. The tutors pointed out things I wouldn’t have noticed, like body language and pacing. I walked into my interviews feeling confident and prepared, and I got offers from two schools!",
        image: "/man.png",
        rating: 5,
        small_description: "Realistic mock interviews",
      },
      {
        id: 2,
        name: "Ayesha Z.",
        review_content:
          "This program was exactly what I needed to refine my interview skills. The tutors provided practical tips and tailored feedback that made a huge difference. Highly recommend it!",
        image: "/man.png",
        rating: 5,
        small_description: "Tailored feedback",
      },
      {
        id: 3,
        name: "Evelyn P.",
        review_content:
          "Med Games’ interview prep program was fantastic. They helped me polish my answers and practice tricky MMI scenarios. I felt so prepared on interview day!",
        image: "/man.png",
        rating: 5,
        small_description: "Polished answers and scenarios",
      },
      {
        id: 4,
        name: "Ryan C.",
        review_content:
          "I was nervous about the MMI format, but this program made it seem so much less daunting. The variety of practice scenarios and detailed feedback really helped me improve.",
        image: "/man.png",
        rating: 5,
        small_description: "Variety of practice scenarios",
      },
      {
        id: 5,
        name: "Nadia H.",
        review_content:
          "The personalized feedback was incredible. The tutors were so supportive and made sure I felt ready for any type of question. This program made a huge difference in my confidence!",
        image: "/man.png",
        rating: 5,
        small_description: "Personalized feedback",
      },
    ],
    course_faqs: [
      {
        id: 1,
        question: "What makes this program unique?",
        answer:
          "Six strategy videos, live interactive sessions, and four CASPer practice tests with personalized feedback covering both written and oral interview components.",
      },
      {
        id: 2,
        question: "Will this improve my interview chances?",
        answer:
          "We build confidence through realistic mock interviews and targeted strategies, helping students improve performance and secure medical school offers.",
      },
      {
        id: 3,
        question: "What interview formats are covered?",
        answer:
          "Multiple Mini Interviews (MMI), traditional interviews, and written assessments like CASPer. Comprehensive preparation for all interview styles.",
      },
      {
        id: 4,
        question: "What support is provided?",
        answer:
          "Personalized guidance from experienced medical students, two live practice sessions, detailed feedback, and video recording references.",
      },
      {
        id: 5,
        question: "How will I stand out in interviews?",
        answer:
          "Develop unique storytelling skills, demonstrate empathy, and confidently showcase your passion for medicine through strategic preparation.",
      },
      {
        id: 6,
        question: "What if I'm nervous?",
        answer:
          "Our program transforms interview anxiety into confidence through supportive tutoring and comprehensive practice scenarios.",
      },
      {
        id: 7,
        question: "I have no interview experience. Can I join?",
        answer:
          "Absolutely! We welcome all experience levels with a structured, step-by-step approach to mastering interview techniques.",
      },
    ],
  },
  {
    id: 6,
    name: "Med Applications",
    description:
      "Our program provides you with four authentic CASPer practice tests in PDF format. These practice tests mirror the actual CASPer experience, helping you familiarize yourself with the test structure, question types, and time constraints",
    details_image: "/med_application_img.png",
    link: "/mcat",
    downloadable_pdf: "/med_app_pdf.pdf",
    price: "300",
    star: "5",
    rating: "3",
    objective:
      "Develop strong applications tailored to specific medical schools in Canada.",
    key_features: [
      "Three edits by medical students.",
      "One-on-one mentorship meetings for personalized support.",
      "Customizable packages to suit individual needs.",
    ],
    topic_covered: [
      "Essay writing for various universities, such as UofT, Western, Dalhousie, and more.",
      "OMSAS ABS (150-character entries for activities).",
      "Personalized feedback and editing.",
    ],
    benefits: [
      "Tailored support for each school’s unique requirements.",
      "Detailed, iterative feedback on essays and applications.",
      "Mentorship for all aspects of the application process.",
    ],
    additional_resources: [
      "Templates for essay structures.",
      "Guidelines for activity descriptions.",
    ],
    start_date: "Jan 12,2024",
    end_date: "Apr 12,2025",
    via: "Virtual program, zoom",
    daily_start_time: "6:00 PM",
    daily_end_time: "9:00 PM",
    classDay: "Sunday's",
    instructor: "Juan Lawson",
    instructor_image: "/casper_inc.png",
    enrollerd_student: "120",
    lessons: "15",
    teaching_language: "English",
    reviews: [
      {
        id: 1,
        name: "Isabella M.",
        review_content:
          "Med Games’ application program was a lifesaver. Their feedback on my essays and ABS entries was detailed and actionable. I especially appreciated the mentorship—it kept me motivated and confident throughout the application process.",
        image: "/man.png",
        rating: 5,
        small_description: "Application mentorship",
      },
      {
        id: 2,
        name: "Arjun V.",
        review_content:
          "This program really stood out because of its personalized approach. The one-on-one meetings with tutors made me feel supported, and their advice on how to frame my extracurriculars was invaluable. I got into three schools, and I owe it all to Med Games!",
        image: "/man.png",
        rating: 5,
        small_description: "Personalized approach",
      },
      {
        id: 3,
        name: "Sophia D.",
        review_content:
          "I was overwhelmed by the application process, but Med Games broke it down into manageable steps. Their expertise in crafting strong personal statements and essays was evident. I felt so much more confident submitting my applications.",
        image: "/man.png",
        rating: 5,
        small_description: "Personal statements",
      },
      {
        id: 4,
        name: "Lucas E.",
        review_content:
          "What I loved most was how flexible the program was. I could choose which parts of my application to focus on, and the tutors provided expert guidance every step of the way. This program is a must for anyone applying to med school.",
        image: "/man.png",
        rating: 5,
        small_description: "Flexible program",
      },
      {
        id: 5,
        name: "Tara W.",
        review_content:
          "The tutors are incredible! Their insights into what med schools look for made all the difference in my application. I received interview invites from my top-choice schools!",
        image: "/man.png",
        rating: 5,
        small_description: "Med school insights",
      },
    ],

    course_faqs: [
      {
        id: 1,
        question: "What does the Med Applications program cover?",
        answer:
          "It offers support for OMSAS ABS entries, essays for various universities, and top activities for schools like UCalgary and UBC.",
      },
      {
        id: 2,
        question: "What type of mentorship is included?",
        answer:
          "Monthly one-on-one meetings focusing on MCAT preparation, CASPer guidance, and course selection.",
      },
      {
        id: 3,
        question: "Can I customize the package?",
        answer:
          "Yes, you can select three application services and add more for an additional charge.",
      },
      {
        id: 4,
        question: "What makes this program effective?",
        answer:
          "It offers a mentorship-based approach, expert edits by medical students, and tailored support.",
      },
      {
        id: 5,
        question: "How many edits are included for essays?",
        answer:
          "Each essay receives up to three edits by experienced medical students.",
      },
    ],
  },
  {
    id: 7,
    name: "UBC Interview Program",
    description:
      "Congratulations on receiving a UBC medical school interview! Our comprehensive UBC Interview Program is specifically tailored for students like you who have been invited to showcase their potential in the competitive Multi-Mini Interview (MMI) format.",
    image: "/mmi_img.jpg",
    details_image: "/mmi_img.jpg",
    link: "/mcat",
    price: "700",
    start_date: "Jan 12,2024",
    end_date: "Apr 12,2025",
    star: "5",
    downloadable_pdf: "/ubc_pdf.pdf",
    rating: "3",
    objective:
      " Prepare students for the UBC medical school interview, specifically the Multi-Mini Interview (MMI) format, with expert guidance and insider tips from current UBC medical students.",
    key_features: [
      "Learn from UBC med students with insider knowledge.",
      "Interactive sessions with small class sizes and mock MMI practice.",
      "Expert feedback to improve performance, plus access to guides and resources.",
    ],
    topic_covered: [
      "CanMEDS Competencies: Master the CanMEDS roles, practice situational questions, and receive personalized feedback from UBC med students.",
      "Creativity and Communication: Learn creative approaches for abstract questions, practice mock interviews, and receive instant feedback.",
      "Ethics and Policy: Build confidence in addressing ethical dilemmas and policy questions with insights into healthcare principles and frameworks.",
    ],
    benefits: [
      "Personalized, real-world practice in the MMI format.",
      "Clear, structured guidance on key themes like CanMEDS roles, creativity, ethics, and policy.",
      "Expert feedback to build confidence and improve interview performance.",
    ],
    additional_resources: [
      "Access to guides, sample questions, and recordings of sessions.",
    ],

    via: "Virtual program, zoom",
    daily_start_time: "6:00 PM",
    daily_end_time: "9:00 PM",
    classDay: "Sunday's",
    instructor: "Martha Hudson",
    instructor_image: "/cars_ins.png",
    enrollerd_student: "120",
    lessons: "15",
    teaching_language: "English",
    reviews: [
      {
        id: 1,
        name: "James L.",
        review_content:
          "The UBC Interview Program truly prepared me for the MMI. The mock interviews and feedback were invaluable. I felt more confident and ready for the real thing!",
        image: "/man.png",
        rating: 5,
        small_description: "Mock interviews and feedback",
      },
      {
        id: 2,
        name: "Chloe R.",
        review_content:
          "This program helped me understand the CanMEDS roles and apply them effectively. The personalized feedback from UBC med students made all the difference.",
        image: "/man.png",
        rating: 5,
        small_description: "Personalized feedback and CanMEDS focus",
      },
      {
        id: 3,
        name: "Ethan W.",
        review_content:
          "I was struggling with abstract questions in MMIs, but the creativity session gave me strategies that made a huge impact. The real-world practice sessions were fantastic.",
        image: "/man.png",
        rating: 5,
        small_description: "Abstract question strategies and practice",
      },
      {
        id: 4,
        name: "Sarah P.",
        review_content:
          "The ethical dilemma training really helped me tackle challenging questions during my interviews. I now approach ethical and policy questions with confidence.",
        image: "/man.png",
        rating: 5,
        small_description: "Ethical and policy dilemma training",
      },
      {
        id: 5,
        name: "Mark T.",
        review_content:
          "The UBC Interview Program was an excellent investment. I gained insider tips and learned practical frameworks for responding to ethical dilemmas. I felt more prepared than ever.",
        image: "/man.png",
        rating: 5,
        small_description: "Insider tips and ethical frameworks",
      },
    ],

    course_faqs: [
      {
        id: 1,
        question: "What is this UBC MMI Program?",
        answer:
          "A targeted preparation program for UBC medical school interview candidates, led by current UBC medical students.",
      },
      {
        id: 2,
        question: "What will I learn?",
        answer:
          "Strategies for MMI stations, interview techniques, and how to effectively communicate your experiences and motivations.",
      },
      {
        id: 3,
        question: "How is the program structured?",
        answer:
          "Interactive online sessions with mock interviews, expert feedback, and personalized coaching.",
      },
      {
        id: 4,
        question: "Who should join?",
        answer:
          "Students invited to UBC medical school interviews or preparing for future applications.",
      },
      {
        id: 5,
        question: "What's included?",
        answer:
          "Practice stations, feedback sessions, interview guides, and strategies from successful UBC medical students.",
      },
    ],
  },
];
export const const_tutors = [
  {
    id: 1,
    name: "Depen Sharma",
    description: "MD Candidate",
    rating: 4.8,
    reviews: 120,
    college: "University of Ottawa",
    specialist: "Customized Medical Training",
    image: "/depen.png",
    location: "Alberta", // Location randomly assigned from 3 options
    socialsLinks: [
      {
        id: 1,
        name: "whatsapp",
        link: "https://www.whatsapp.com/depen.sharma",
      },
      {
        id: 2,
        name: "Instagram",
        link: "https://www.instagram.com/depen.sharma/",
      },
      {
        id: 3,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/depen-sharma-b63030222/",
      },
    ],
  },
  {
    id: 2,
    name: "Adina Borenstein",
    description: "MD/PhD Candidate",
    rating: 4.8,
    reviews: 120,
    college: "University of Toronto",
    specialist: "Specialized Medical Expertise",
    image: "/adina.png",
    location: "British Columbia", // Random location
    socialsLinks: [
      {
        id: 1,
        name: "whatsapp",
        link: "https://www.whatsapp.com/adina.borenstein",
      },
      {
        id: 2,
        name: "Instagram",
        link: "https://www.instagram.com/adina.borenstein/",
      },
      {
        id: 3,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/adina-borenstein-md-phd-candidate-7007001b0/",
      },
    ],
  },
  {
    id: 3,
    name: "Dr. Lakindu Somaweera",
    description: "Internal Medicine Resident",
    rating: 4.8,
    reviews: 120,
    college: "Queens University",
    specialist: "Tailored Expert Guidance",
    image: "/lakindu.png",
    location: "Ontario", // Random location
    socialsLinks: [
      {
        id: 1,
        name: "whatsapp",
        link: "https://www.whatsapp.com/lakindu.somaweera",
      },
      {
        id: 2,
        name: "Instagram",
        link: "https://www.instagram.com/lakindu.somaweera/",
      },
      {
        id: 3,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/lakindu-somaweera-8a9a14230/",
      },
    ],
  },
  {
    id: 4,
    name: "Fiona Huang",
    description: "MD Candidate",
    rating: 4.8,
    reviews: 120,
    college: "University of British Columbia",
    specialist: "Focused Medical Mentorship",
    image: "/fiona.png",
    location: "Alberta", // Random location
    socialsLinks: [
      {
        id: 1,
        name: "whatsapp",
        link: "https://www.whatsapp.com/fiona.huang",
      },
      {
        id: 2,
        name: "Instagram",
        link: "https://www.instagram.com/fiona.huang/",
      },
      {
        id: 3,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/fiona-huang-0b8b5b1b0/",
      },
    ],
  },
  {
    id: 5,
    name: "William Ding",
    description: "MD Candidate",
    rating: 4.8,
    reviews: 120,
    college: "University of Toronto",
    specialist: "Individualized Clinical Insight",
    image: "/william.png",
    location: "British Columbia", // Random location
    socialsLinks: [
      {
        id: 1,
        name: "whatsapp",
        link: "https://www.whatsapp.com/fiona.huang",
      },
      {
        id: 2,
        name: "Instagram",
        link: "https://www.instagram.com/fiona.huang/",
      },
      {
        id: 3,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/fiona-huang-0b8b5b1b0/",
      },
    ],
  },
  {
    id: 6,
    name: "Buvani Sivagnanasunderam",
    description: "MD Candidate",
    rating: 4.8,
    reviews: 120,
    college: "McMaster University",
    specialist: "Dedicated Clinical Support",
    image: "/buvani.png",
    location: "Ontario", // Random location
    socialsLinks: [
      {
        id: 1,
        name: "whatsapp",
        link: "https://www.whatsapp.com/fiona.huang",
      },
      {
        id: 2,
        name: "Instagram",
        link: "https://www.instagram.com/fiona.huang/",
      },
      {
        id: 3,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/fiona-huang-0b8b5b1b0/",
      },
    ],
  },
  {
    id: 7,
    name: "Rida Sheikh",
    description: "MD Candidate",
    rating: 4.8,
    reviews: 120,
    college: "University of Western Ontario",
    specialist: "Advanced Medical Coaching",
    image: "/rida.png",
    location: "Ontario", // Random location
    socialsLinks: [
      {
        id: 1,
        name: "whatsapp",
        link: "https://www.whatsapp.com/fiona.huang",
      },
      {
        id: 2,
        name: "Instagram",
        link: "https://www.instagram.com/fiona.huang/",
      },
      {
        id: 3,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/fiona-huang-0b8b5b1b0/",
      },
    ],
  },
  {
    id: 8,
    name: "Patricia Machekera",
    description: "MD Candidate",
    rating: 4.8,
    reviews: 120,
    college: "University of Manitoba",
    specialist: "Tailored Expert Guidance",
    image: "/patricia.png",
    location: "British Columbia", // Random location
    socialsLinks: [
      {
        id: 1,
        name: "whatsapp",
        link: "https://www.whatsapp.com/fiona.huang",
      },
      {
        id: 2,
        name: "Instagram",
        link: "https://www.instagram.com/fiona.huang/",
      },
      {
        id: 3,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/fiona-huang-0b8b5b1b0/",
      },
    ],
  },
];

export const brand_Info = {
  name: "Med Games",
  description: "The best platform to study medicine in the world",
  image: "/logo.png",
  social_links: [
    {
      id: 1,
      name: "WhatsApp",
      link: "https://chat.whatsapp.com/DQzgKDzNJOlCN9z1A80mYw",
      display_content: "WhatsApp",
    },
    {
      id: 2,
      name: "Email",
      link: "med.games.org@gmail.com",
      display_content: "med.games.org@gmail.com",
    },
    {
      id: 3,
      name: "Instagram",
      link: "https://www.instagram.com/medgamesorg/",
      display_content: "@medgamesorg",
    },
  ],
};

export const reviews = [
  {
    id: 1,
    name: "Samantha K.",
    review_content:
      "Med Games was a game-changer! The mentorship and analytics were invaluable. Thrilled to have received three medical school interview invites!",
    image: "/a1women.png",
    position: "student",
    rating: 5,
  },
  {
    id: 4,
    name: "Isaac M.",
    review_content:
      "Small class sizes and one-on-one mentorship created a supportive, stress-free learning environment.",
    image: "/a2men.png",
    position: "student",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Ananya R.",
    review_content:
      "The personalized approach made all the difference. Tutors tailored the program to my strengths and weaknesses.",
    image: "/a4women.png",
    position: "student",
    rating: 5,
  },
  {
    id: 2,
    name: "Jordan L.",
    review_content:
      "The tutors truly understand what med schools seek. Their insights and guidance were spot on!",
    image: "/a3men.png",
    position: "student",
    rating: 4.5,
  },
  {
    id: 5,
    name: "Priya S.",
    review_content:
      "From the MCAT to CASPer and applications, Med Games had it all covered. Their comprehensive approach made me feel confident and prepared for everything the admissions process threw at me.",
    image: "/a5women.png",
    position: "student",
    rating: 5,
  },
];

export const courses_titles = [
  "CARS Program",
  "CASPer Program",
  "Longitudinal MCAT",
  "Mentorship",
  "Interview Program",
  "Med Applications",
  "UBC Interview Program",
];

export const blogs = [
  {
    id: 1,
    title: "Mastering the CARS Program: Key Strategies for Success",
    description:
      "Explore how our flexible weekend classes, hands-on MCAT-style CARS passages, and expert mentorship help students build confidence and excel.",
    date: "Jan 12, 2024",
    time: "6:00 PM",
    image: "/blog1.png",
    category: "CARS Program",
    tags: ["CARS", "MCAT Preparation", "Active Reading"],
    blog_details: [
      {
        type: "standard_section",
        heading: "What is the CARS Program?",
        content:
          "The CARS Program is designed to help students develop critical analysis and reasoning skills needed to ace the MCAT.",
        icons: ["🧠", "📚"],
      },
      {
        type: "highlight_section",
        heading: "Key Program Insights",
        highlightedText: "Unlock your potential with our unique approach!",
        importantLinks: [
          {
            text: "CARS Preparation Guide",
            url: "https://example.com/cars-guide",
            icon: "🔗",
          },
        ],
        embeddedLinks: [
          {
            text: "critical thinking",
            url: "https://example.com/critical-thinking",
            context: "Develop your {link} skills",
          },
        ],
      },
      {
        type: "numbered_list",
        heading: "Program Highlights",
        listItems: [
          "3 expert-led editing sessions",
          "Personalized feedback meetings",
          "Comprehensive study materials",
        ],
      },
      {
        type: "quote_section",
        quote: "Success is not just about hard work, but smart preparation.",
        author: "Medical Admissions Expert",
        icon: "💡",
      },
      {
        type: "statistic_section",
        heading: "Student Success Rates",
        statistics: [
          { label: "Average Score Improvement", value: "15%" },
          { label: "Student Satisfaction", value: "95%" },
        ],
      },
      {
        type: "testimonial_section",
        testimonials: [
          {
            text: "This program transformed my CARS performance!",
            author: "Jane Doe",
            role: "Medical School Applicant",
          },
        ],
      },
      {
        type: "resource_section",
        heading: "Recommended Resources",
        resources: [
          {
            title: "MCAT Prep Book",
            description: "Comprehensive CARS strategy guide",
            link: "https://example.com/mcat-book",
          },
        ],
      },
      {
        type: "interactive_section",
        heading: "Self-Assessment Quiz",
        quizLink: "https://example.com/cars-quiz",
        description: "Test your CARS readiness!",
      },
      {
        type: "timeline_section",
        heading: "MCAT Preparation Journey",
        timelineEvents: [
          {
            date: "Month 1",
            title: "Diagnostic Test",
            description:
              "Understand your current level and create a personalized study plan",
            icon: "🏁",
          },
          {
            date: "Month 2-3",
            title: "Intensive Study",
            description: "Deep dive into content review and practice passages",
            icon: "📚",
          },
          {
            date: "Month 4",
            title: "Mock Exams",
            description:
              "Full-length practice tests and detailed performance analysis",
            icon: "🎯",
          },
        ],
      },
      {
        type: "comparison_section",
        heading: "Study Methods Comparison",
        comparisonTitle: "Traditional vs. Our Approach",
        comparisons: [
          {
            category: "Study Materials",
            traditional: "Generic textbooks",
            ourApproach: "Customized, high-yield resources",
          },
          {
            category: "Mentorship",
            traditional: "Limited guidance",
            ourApproach: "Personalized 1-on-1 mentorship",
          },
          {
            category: "Practice Strategy",
            traditional: "Passive reading",
            ourApproach: "Active learning and strategy development",
          },
        ],
      },
      {
        type: "multimedia_section",
        heading: "Multimedia Learning Resources",
        mediaItems: [
          {
            type: "video",
            title: "CARS Strategy Masterclass",
            duration: "45 mins",
            thumbnail: "/video-thumbnail.jpg",
            url: "https://example.com/cars-masterclass",
          },
          {
            type: "podcast",
            title: "Medical School Admissions Insights",
            duration: "30 mins",
            thumbnail: "/podcast-thumbnail.jpg",
            url: "https://example.com/admissions-podcast",
          },
          {
            type: "webinar",
            title: "MCAT Preparation Strategies",
            duration: "60 mins",
            thumbnail: "/webinar-thumbnail.jpg",
            url: "https://example.com/mcat-webinar",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Mastering the CARS Program: Key Strategies for Success",
    description:
      "Explore how our flexible weekend classes, hands-on MCAT-style CARS passages, and expert mentorship help students build confidence and excel.",
    date: "Jan 12, 2024",
    time: "6:00 PM",
    image: "/blog1.png",
    category: "Med Application",
    tags: ["CARS", "MCAT Preparation", "Active Reading"],
    blog_details: [
      {
        type: "standard_section",
        heading: "What is the CARS Program?",
        content:
          "The CARS Program is designed to help students develop critical analysis and reasoning skills needed to ace the MCAT.",
        icons: ["🧠", "📚"],
      },
      {
        type: "highlight_section",
        heading: "Key Program Insights",
        highlightedText: "Unlock your potential with our unique approach!",
        importantLinks: [
          {
            text: "CARS Preparation Guide",
            url: "https://example.com/cars-guide",
            icon: "🔗",
          },
        ],
        embeddedLinks: [
          {
            text: "critical thinking",
            url: "https://example.com/critical-thinking",
            context: "Develop your {link} skills",
          },
        ],
      },
      {
        type: "numbered_list",
        heading: "Program Highlights",
        listItems: [
          "3 expert-led editing sessions",
          "Personalized feedback meetings",
          "Comprehensive study materials",
        ],
      },
      {
        type: "quote_section",
        quote: "Success is not just about hard work, but smart preparation.",
        author: "Medical Admissions Expert",
        icon: "💡",
      },
      {
        type: "statistic_section",
        heading: "Student Success Rates",
        statistics: [
          { label: "Average Score Improvement", value: "15%" },
          { label: "Student Satisfaction", value: "95%" },
        ],
      },
      {
        type: "testimonial_section",
        testimonials: [
          {
            text: "This program transformed my CARS performance!",
            author: "Jane Doe",
            role: "Medical School Applicant",
          },
        ],
      },
      {
        type: "resource_section",
        heading: "Recommended Resources",
        resources: [
          {
            title: "MCAT Prep Book",
            description: "Comprehensive CARS strategy guide",
            link: "https://example.com/mcat-book",
          },
        ],
      },
      {
        type: "interactive_section",
        heading: "Self-Assessment Quiz",
        quizLink: "https://example.com/cars-quiz",
        description: "Test your CARS readiness!",
      },
      {
        type: "timeline_section",
        heading: "MCAT Preparation Journey",
        timelineEvents: [
          {
            date: "Month 1",
            title: "Diagnostic Test",
            description:
              "Understand your current level and create a personalized study plan",
            icon: "🏁",
          },
          {
            date: "Month 2-3",
            title: "Intensive Study",
            description: "Deep dive into content review and practice passages",
            icon: "📚",
          },
          {
            date: "Month 4",
            title: "Mock Exams",
            description:
              "Full-length practice tests and detailed performance analysis",
            icon: "🎯",
          },
        ],
      },
      {
        type: "comparison_section",
        heading: "Study Methods Comparison",
        comparisonTitle: "Traditional vs. Our Approach",
        comparisons: [
          {
            category: "Study Materials",
            traditional: "Generic textbooks",
            ourApproach: "Customized, high-yield resources",
          },
          {
            category: "Mentorship",
            traditional: "Limited guidance",
            ourApproach: "Personalized 1-on-1 mentorship",
          },
          {
            category: "Practice Strategy",
            traditional: "Passive reading",
            ourApproach: "Active learning and strategy development",
          },
        ],
      },
      {
        type: "multimedia_section",
        heading: "Multimedia Learning Resources",
        mediaItems: [
          {
            type: "video",
            title: "CARS Strategy Masterclass",
            duration: "45 mins",
            thumbnail: "/video-thumbnail.jpg",
            url: "https://example.com/cars-masterclass",
          },
          {
            type: "podcast",
            title: "Medical School Admissions Insights",
            duration: "30 mins",
            thumbnail: "/podcast-thumbnail.jpg",
            url: "https://example.com/admissions-podcast",
          },
          {
            type: "webinar",
            title: "MCAT Preparation Strategies",
            duration: "60 mins",
            thumbnail: "/webinar-thumbnail.jpg",
            url: "https://example.com/mcat-webinar",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Mastering the CARS Program: Key Strategies for Success",
    description:
      "Explore how our flexible weekend classes, hands-on MCAT-style CARS passages, and expert mentorship help students build confidence and excel.",
    date: "Jan 12, 2024",
    time: "6:00 PM",
    image: "/blog1.png",
    category: "MCAT Program",
    tags: ["CARS", "MCAT Preparation", "Active Reading"],
    blog_details: [
      {
        type: "standard_section",
        heading: "What is the CARS Program?",
        content:
          "The CARS Program is designed to help students develop critical analysis and reasoning skills needed to ace the MCAT.",
        icons: ["🧠", "📚"],
      },
      {
        type: "highlight_section",
        heading: "Key Program Insights",
        highlightedText: "Unlock your potential with our unique approach!",
        importantLinks: [
          {
            text: "CARS Preparation Guide",
            url: "https://example.com/cars-guide",
            icon: "🔗",
          },
        ],
        embeddedLinks: [
          {
            text: "critical thinking",
            url: "https://example.com/critical-thinking",
            context: "Develop your {link} skills",
          },
        ],
      },
      {
        type: "numbered_list",
        heading: "Program Highlights",
        listItems: [
          "3 expert-led editing sessions",
          "Personalized feedback meetings",
          "Comprehensive study materials",
        ],
      },
      {
        type: "quote_section",
        quote: "Success is not just about hard work, but smart preparation.",
        author: "Medical Admissions Expert",
        icon: "💡",
      },
      {
        type: "statistic_section",
        heading: "Student Success Rates",
        statistics: [
          { label: "Average Score Improvement", value: "15%" },
          { label: "Student Satisfaction", value: "95%" },
        ],
      },
      {
        type: "testimonial_section",
        testimonials: [
          {
            text: "This program transformed my CARS performance!",
            author: "Jane Doe",
            role: "Medical School Applicant",
          },
        ],
      },
      {
        type: "resource_section",
        heading: "Recommended Resources",
        resources: [
          {
            title: "MCAT Prep Book",
            description: "Comprehensive CARS strategy guide",
            link: "https://example.com/mcat-book",
          },
        ],
      },
      {
        type: "interactive_section",
        heading: "Self-Assessment Quiz",
        quizLink: "https://example.com/cars-quiz",
        description: "Test your CARS readiness!",
      },
      {
        type: "timeline_section",
        heading: "MCAT Preparation Journey",
        timelineEvents: [
          {
            date: "Month 1",
            title: "Diagnostic Test",
            description:
              "Understand your current level and create a personalized study plan",
            icon: "🏁",
          },
          {
            date: "Month 2-3",
            title: "Intensive Study",
            description: "Deep dive into content review and practice passages",
            icon: "📚",
          },
          {
            date: "Month 4",
            title: "Mock Exams",
            description:
              "Full-length practice tests and detailed performance analysis",
            icon: "🎯",
          },
        ],
      },
      {
        type: "comparison_section",
        heading: "Study Methods Comparison",
        comparisonTitle: "Traditional vs. Our Approach",
        comparisons: [
          {
            category: "Study Materials",
            traditional: "Generic textbooks",
            ourApproach: "Customized, high-yield resources",
          },
          {
            category: "Mentorship",
            traditional: "Limited guidance",
            ourApproach: "Personalized 1-on-1 mentorship",
          },
          {
            category: "Practice Strategy",
            traditional: "Passive reading",
            ourApproach: "Active learning and strategy development",
          },
        ],
      },
      {
        type: "multimedia_section",
        heading: "Multimedia Learning Resources",
        mediaItems: [
          {
            type: "video",
            title: "CARS Strategy Masterclass",
            duration: "45 mins",
            thumbnail: "/video-thumbnail.jpg",
            url: "https://example.com/cars-masterclass",
          },
          {
            type: "podcast",
            title: "Medical School Admissions Insights",
            duration: "30 mins",
            thumbnail: "/podcast-thumbnail.jpg",
            url: "https://example.com/admissions-podcast",
          },
          {
            type: "webinar",
            title: "MCAT Preparation Strategies",
            duration: "60 mins",
            thumbnail: "/webinar-thumbnail.jpg",
            url: "https://example.com/mcat-webinar",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Mastering the CARS Program: Key Strategies for Success",
    description:
      "Explore how our flexible weekend classes, hands-on MCAT-style CARS passages, and expert mentorship help students build confidence and excel.",
    date: "Jan 12, 2024",
    time: "6:00 PM",
    image: "/blog1.png",
    category: "CARS Program",
    tags: ["CARS", "MCAT Preparation", "Active Reading"],
    blog_details: [
      {
        type: "standard_section",
        heading: "What is the CARS Program?",
        content:
          "The CARS Program is designed to help students develop critical analysis and reasoning skills needed to ace the MCAT.",
        icons: ["🧠", "📚"],
      },
      {
        type: "highlight_section",
        heading: "Key Program Insights",
        highlightedText: "Unlock your potential with our unique approach!",
        importantLinks: [
          {
            text: "CARS Preparation Guide",
            url: "https://example.com/cars-guide",
            icon: "🔗",
          },
        ],
        embeddedLinks: [
          {
            text: "critical thinking",
            url: "https://example.com/critical-thinking",
            context: "Develop your {link} skills",
          },
        ],
      },
      {
        type: "numbered_list",
        heading: "Program Highlights",
        listItems: [
          "3 expert-led editing sessions",
          "Personalized feedback meetings",
          "Comprehensive study materials",
        ],
      },
      {
        type: "quote_section",
        quote: "Success is not just about hard work, but smart preparation.",
        author: "Medical Admissions Expert",
        icon: "💡",
      },
      {
        type: "statistic_section",
        heading: "Student Success Rates",
        statistics: [
          { label: "Average Score Improvement", value: "15%" },
          { label: "Student Satisfaction", value: "95%" },
        ],
      },
      {
        type: "testimonial_section",
        testimonials: [
          {
            text: "This program transformed my CARS performance!",
            author: "Jane Doe",
            role: "Medical School Applicant",
          },
        ],
      },
      {
        type: "resource_section",
        heading: "Recommended Resources",
        resources: [
          {
            title: "MCAT Prep Book",
            description: "Comprehensive CARS strategy guide",
            link: "https://example.com/mcat-book",
          },
        ],
      },
      {
        type: "interactive_section",
        heading: "Self-Assessment Quiz",
        quizLink: "https://example.com/cars-quiz",
        description: "Test your CARS readiness!",
      },
      {
        type: "timeline_section",
        heading: "MCAT Preparation Journey",
        timelineEvents: [
          {
            date: "Month 1",
            title: "Diagnostic Test",
            description:
              "Understand your current level and create a personalized study plan",
            icon: "🏁",
          },
          {
            date: "Month 2-3",
            title: "Intensive Study",
            description: "Deep dive into content review and practice passages",
            icon: "📚",
          },
          {
            date: "Month 4",
            title: "Mock Exams",
            description:
              "Full-length practice tests and detailed performance analysis",
            icon: "🎯",
          },
        ],
      },
      {
        type: "comparison_section",
        heading: "Study Methods Comparison",
        comparisonTitle: "Traditional vs. Our Approach",
        comparisons: [
          {
            category: "Study Materials",
            traditional: "Generic textbooks",
            ourApproach: "Customized, high-yield resources",
          },
          {
            category: "Mentorship",
            traditional: "Limited guidance",
            ourApproach: "Personalized 1-on-1 mentorship",
          },
          {
            category: "Practice Strategy",
            traditional: "Passive reading",
            ourApproach: "Active learning and strategy development",
          },
        ],
      },
      {
        type: "multimedia_section",
        heading: "Multimedia Learning Resources",
        mediaItems: [
          {
            type: "video",
            title: "CARS Strategy Masterclass",
            duration: "45 mins",
            thumbnail: "/video-thumbnail.jpg",
            url: "https://example.com/cars-masterclass",
          },
          {
            type: "podcast",
            title: "Medical School Admissions Insights",
            duration: "30 mins",
            thumbnail: "/podcast-thumbnail.jpg",
            url: "https://example.com/admissions-podcast",
          },
          {
            type: "webinar",
            title: "MCAT Preparation Strategies",
            duration: "60 mins",
            thumbnail: "/webinar-thumbnail.jpg",
            url: "https://example.com/mcat-webinar",
          },
        ],
      },
    ],
  },
];

export const consultation_details = [
  {
    id: 1,
    percentage: "90%",
    description: "of students who have used our services ",
  },
  {
    id: 2,
    percentage: "85%",
    description: "of students who have used our services ",
  },
  {
    id: 3,
    percentage: "85%",
    description: "of students who have used our services ",
  },
  {
    id: 4,
    percentage: "90%",
    description: "of students who have used our services ",
  },
];

export const home_FAQs = [
  {
    id: 1,
    question: "What makes Med Games different from other services?",
    answer:
      "Med Games focuses on small class sizes, interactive sessions, and mentorship by experienced medical students.",
  },
  {
    id: 2,
    question: "Are programs available virtually?",
    answer: "Yes, all programs are conducted virtually via Zoom.",
  },
  {
    id: 3,
    question: "Can I book a consultation before enrolling?",
    answer:
      "Yes, you can book a free 15-minute consultation by emailing med.games.org@gmail.com.",
  },
  {
    id: 4,
    question: "What is the success rate of Med Games students?",
    answer:
      "96% of students with the Ultimate Package received medical school interview invites last year.",
  },
  {
    id: 5,
    question: "How do I enroll in a program?",
    answer:
      "Visit the website or contact Med Games via email or Instagram for enrollment details",
  },
];

export const customized_privacy_policy = [
  {
    type: "heading with content",
    title: "Who we are",
    content: [
      "Our website address is: https://medgamesorg.com. We are a group of passionate medical students who are dedicated to helping aspiring medical students succeed in their journey to becoming a doctor.",
    ],
  },
  {
    type: "heading with content",
    title: "Comments",
    content: [
      "When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.",
      "An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.",
      "We collect information about you during the checkout process on our store.",
    ],
  },
  {
    type: "list with content",
    title: "What we collect and store",
    list_tittle: "While you visit our site, we’ll track:",
    list_content: [
      "Products you’ve viewed: we’ll use this to, for example, show you products you’ve recently viewed",
      "Location, IP address, and browser type: we’ll use this for purposes like estimating taxes and shipping.",
    ],
    content: [
      "We generally store information about you for as long as we need the information for the purposes for which we collect and use it, and we are not legally required to continue to keep it. For example, we will store order information for 10 years for tax and accounting purposes. This includes your name, email address and billing and shipping addresses",
      "We will also store comments or reviews, if you choose to leave them.",
    ],
  },
  {
    type: "list with content",
    title: "Who on our team has access",
    list_tittle:
      "Members of our team have access to the information you provide us. For example, both Administrators and Shop Managers can access:",
    list_content: [
      "Order information like what was purchased, when it was purchased and where it should be sent, and",
      "Customer information like your name, email address, and billing and shipping information.",
    ],
    content: [
      "Our team members have access to this information to help fulfill orders, process refunds and support you.",
    ],
  },
  {
    type: "link with content",
    title: "Payments",
    content: [
      "We accept payments through Stripe. When processing payments, some of your data will be passed to Stripe, including information required to process or support the payment, such as the purchase total and billing information.",
      {
        content: "For more details, please visit the ",
        link: "Stripe Privacy Policy",
        url: "https://stripe.com/privacy",
      },
      ".",
    ],
  },

  {
    type: "heading with content",
    title: "Media",
    content: [
      "If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.",
    ],
  },
  {
    type: "heading with content",
    title: "Cookies",
    content: [
      "If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.",
      "When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.",
    ],
  },
  {
    type: "heading with content",
    title: "Embedded content from other websites",
    content: [
      "Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website. These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.",
      "For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.",
    ],
  },
  {
    type: "heading with content",
    title: "What rights you have over your data",
    content: [
      "If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.",
    ],
  },
  {
    type: "heading with content",
    title: "Where your data is sent",
    content: [
      "Our Akismet anti-spam service is sent information that we collect, which includes the commenter’s IP address, user agent, referrer, and Site URL (along with other information directly provided by the commenter such as their name, username, email address, and the comment itself). This helps us to prevent spam on our site and ensure the integrity of the comment system.",
    ],
  },
];

export const upcoming_events = [
  {
    id: 1,
    title: "Summer MCAT Info Session ",
    description:
      "Med Games is holding an essay competition. The deadline to submit is April 1st 2025, at midnight EST.",
    via: "Virtual program",
    event_date: "1",
    event_month: "March",
    event_year: "2025",
    time: "8:00 AM - 8:30 PM EST",
    language: "English",
    imageURL: "/event_1.png",
    price: "free",
    // content_of_event: [
    //   {
    //     type: "heading",
    //     content: "About The Event",
    //   },
    //   {
    //     type: "paragraph",
    //     content: [
    //       {
    //         type: "text",
    //         content: "In your essay, please discuss how",
    //       },
    //       {
    //         type: "bold",
    //         content: "Artificial Intelligence",
    //       },
    //       {
    //         type: "text",
    //         content:
    //           " can be effectively utilized to enhance the preparation process for the ",
    //       },
    //       {
    //         type: "bold",
    //         content: "MCAT",
    //       },
    //     ],
    //   },
    //   {
    //     type: "list",
    //     list_items: [
    //       {
    //         type: "text",
    //         content:
    //           "Identification of key challenges faced by premed students in preparing for the",
    //       },
    //       {
    //         type: "bold",
    //         content: "MCAT",
    //       },
    //       {
    //         type: "text",
    //         content:
    //           "Explanation of how AI technologies can be used by Med Games to address these challenges and improve study efficiency and effectiveness for students as part of the MCAT program",
    //       },
    //       {
    //         type: "text",
    //         content: "Bulk of the essay should focus on:",
    //       },
    //       {
    //         type: "list-disc",
    //         content:
    //           "Examples of AI-powered tools, applications, or platforms that can be used by Med Games to aid premed students in various aspects of MCAT preparation (e.g., content review, practice questions, test-taking strategies, study schedule creation, etc.).",
    //       },
    //     ],
    //   },
    //   {
    //     type: "heading",
    //     content: "Submission Guidelines",
    //   },
    //   {
    //     type: "list",
    //     list_items: [
    //       {
    //         type: "bold",
    //         content: "Eligibility:",
    //       },
    //       {
    //         type: "text",
    //         content:
    //           "The competition is open to all pre-med students hoping to write their MCAT during the summer of 2024.",
    //       },
    //       {
    //         type: "bold",
    //         content: "Eligibility:",
    //       },
    //       {
    //         type: "text",
    //         content:
    //           "The competition is open to all pre-med students hoping to write their MCAT during the summer of 2024.",
    //       },
    //       {
    //         type: "bold",
    //         content: "Eligibility:",
    //       },
    //       {
    //         type: "text",
    //         content:
    //           "The competition is open to all pre-med students hoping to write their MCAT during the summer of 2024.",
    //       },
    //       {
    //         type: "highlight",
    //         content: " med.games.org@gmail.com.:",
    //       },
    //     ],
    //   },
    // ],
  },
  {
    id: 2,
    title: "MCAT Info Session",
    description:
      "Med Games is holding an essay competition. The deadline to submit is April 15th 2025, at midnight EST.",
    via: "Virtual program",
    event_date: "15",
    event_month: "March",
    event_year: "2025",

    time: "8:00 AM - 8:30 PM EST",
    language: "English",
    imageURL: "/event_2.png",
    price: "free",
    // content_of_event: [
    //   {
    //     type: "heading",
    //     content: "About The Event",
    //   },
    //   {
    //     type: "paragraph",
    //     content: [
    //       {
    //         type: "text",
    //         content: "In your essay, please discuss how",
    //       },
    //       {
    //         type: "bold",
    //         content: "Artificial Intelligence",
    //       },
    //       {
    //         type: "text",
    //         content:
    //           " can be effectively utilized to enhance the preparation process for the ",
    //       },
    //       {
    //         type: "bold",
    //         content: "MCAT",
    //       },
    //     ],
    //   },
    //   {
    //     type: "list",
    //     list_items: [
    //       {
    //         type: "text",
    //         content:
    //           "Identification of key challenges faced by premed students in preparing for the",
    //       },
    //       {
    //         type: "bold",
    //         content: "MCAT",
    //       },
    //       {
    //         type: "text",
    //         content:
    //           "Explanation of how AI technologies can be used by Med Games to address these challenges and improve study efficiency and effectiveness for students as part of the MCAT program",
    //       },
    //       {
    //         type: "text",
    //         content: "Bulk of the essay should focus on:",
    //       },
    //       {
    //         type: "list-disc",
    //         content:
    //           "Examples of AI-powered tools, applications, or platforms that can be used by Med Games to aid premed students in various aspects of MCAT preparation (e.g., content review, practice questions, test-taking strategies, study schedule creation, etc.).",
    //       },
    //     ],
    //   },
    //   {
    //     type: "heading",
    //     content: "Submission Guidelines",
    //   },
    //   {
    //     type: "list",
    //     list_items: [
    //       {
    //         type: "bold",
    //         content: "Eligibility:",
    //       },
    //       {
    //         type: "text",
    //         content:
    //           "The competition is open to all pre-med students hoping to write their MCAT during the summer of 2024.",
    //       },
    //       {
    //         type: "bold",
    //         content: "Eligibility:",
    //       },
    //       {
    //         type: "text",
    //         content:
    //           "The competition is open to all pre-med students hoping to write their MCAT during the summer of 2024.",
    //       },
    //       {
    //         type: "bold",
    //         content: "Eligibility:",
    //       },
    //       {
    //         type: "text",
    //         content:
    //           "The competition is open to all pre-med students hoping to write their MCAT during the summer of 2024.",
    //       },
    //       {
    //         type: "highlight",
    //         content: " med.games.org@gmail.com.:",
    //       },
    //     ],
    //   },
    // ],
  },
  {
    id: 3,
    title: "MCAT Info Session",
    description:
      "Med Games is holding an essay competition. The deadline to submit is April 31st 2025, at midnight EST.",
    via: "Virtual program",
    event_date: "1",
    event_month: "April",
    event_year: "2025",
    time: "8:00 AM - 8:30 PM EST",
    language: "English",
    imageURL: "/event_3.png",
    price: "free",
    // content_of_event: [
    //   {
    //     type: "heading",
    //     content: "About The Event",
    //   },
    //   {
    //     type: "paragraph",
    //     content: [
    //       {
    //         type: "text",
    //         content: "In your essay, please discuss how",
    //       },
    //       {
    //         type: "bold",
    //         content: "Artificial Intelligence",
    //       },
    //       {
    //         type: "text",
    //         content:
    //           " can be effectively utilized to enhance the preparation process for the ",
    //       },
    //       {
    //         type: "bold",
    //         content: "MCAT",
    //       },
    //     ],
    //   },
    //   {
    //     type: "list",
    //     list_items: [
    //       {
    //         type: "text",
    //         content:
    //           "Identification of key challenges faced by premed students in preparing for the",
    //       },
    //       {
    //         type: "bold",
    //         content: "MCAT",
    //       },
    //       {
    //         type: "text",
    //         content:
    //           "Explanation of how AI technologies can be used by Med Games to address these challenges and improve study efficiency and effectiveness for students as part of the MCAT program",
    //       },
    //       {
    //         type: "text",
    //         content: "Bulk of the essay should focus on:",
    //       },
    //       {
    //         type: "list-disc",
    //         content:
    //           "Examples of AI-powered tools, applications, or platforms that can be used by Med Games to aid premed students in various aspects of MCAT preparation (e.g., content review, practice questions, test-taking strategies, study schedule creation, etc.).",
    //       },
    //     ],
    //   },
    //   {
    //     type: "heading",
    //     content: "Submission Guidelines",
    //   },
    //   {
    //     type: "list",
    //     list_items: [
    //       {
    //         type: "bold",
    //         content: "Eligibility:",
    //       },
    //       {
    //         type: "text",
    //         content:
    //           "The competition is open to all pre-med students hoping to write their MCAT during the summer of 2024.",
    //       },
    //       {
    //         type: "bold",
    //         content: "Eligibility:",
    //       },
    //       {
    //         type: "text",
    //         content:
    //           "The competition is open to all pre-med students hoping to write their MCAT during the summer of 2024.",
    //       },
    //       {
    //         type: "bold",
    //         content: "Eligibility:",
    //       },
    //       {
    //         type: "text",
    //         content:
    //           "The competition is open to all pre-med students hoping to write their MCAT during the summer of 2024.",
    //       },
    //       {
    //         type: "highlight",
    //         content: " med.games.org@gmail.com.:",
    //       },
    //     ],
    //   },
    // ],
  },
  {
    id: 4,
    title: "CARS program",
    description:
      "Med Games is holding an essay competition. The deadline to submit is April 1st 2024, at midnight EST.",
    via: "Zoom",
    event_date: "12",
    event_month: "Jan",
    event_year: "2025",
    event_end_date: "12",
    event_end_month: "Apr",
    event_end_year: "2025",
    day: ["Sunday's"],
    time: "6:00 AM - 9:00 PM EST",
    language: "English",
    imageURL: "/event_4.png",
    priceInValue: "$ 450",
    price: "Paid",
    // content_of_event: [
    //   {
    //     type: "heading",
    //     content: "About The Event",
    //   },
    //   {
    //     type: "paragraph",
    //     content: [
    //       {
    //         type: "text",
    //         content: "In your essay, please discuss how",
    //       },
    //       {
    //         type: "bold",
    //         content: "Artificial Intelligence",
    //       },
    //       {
    //         type: "text",
    //         content:
    //           " can be effectively utilized to enhance the preparation process for the ",
    //       },
    //       {
    //         type: "bold",
    //         content: "MCAT",
    //       },
    //     ],
    //   },
    //   {
    //     type: "list",
    //     list_items: [
    //       {
    //         type: "text",
    //         content:
    //           "Identification of key challenges faced by premed students in preparing for the",
    //       },
    //       {
    //         type: "bold",
    //         content: "MCAT",
    //       },
    //       {
    //         type: "text",
    //         content:
    //           "Explanation of how AI technologies can be used by Med Games to address these challenges and improve study efficiency and effectiveness for students as part of the MCAT program",
    //       },
    //       {
    //         type: "text",
    //         content: "Bulk of the essay should focus on:",
    //       },
    //       {
    //         type: "list-disc",
    //         content:
    //           "Examples of AI-powered tools, applications, or platforms that can be used by Med Games to aid premed students in various aspects of MCAT preparation (e.g., content review, practice questions, test-taking strategies, study schedule creation, etc.).",
    //       },
    //     ],
    //   },
    //   {
    //     type: "heading",
    //     content: "Submission Guidelines",
    //   },
    //   {
    //     type: "list",
    //     list_items: [
    //       {
    //         type: "bold",
    //         content: "Eligibility:",
    //       },
    //       {
    //         type: "text",
    //         content:
    //           "The competition is open to all pre-med students hoping to write their MCAT during the summer of 2024.",
    //       },
    //       {
    //         type: "bold",
    //         content: "Eligibility:",
    //       },
    //       {
    //         type: "text",
    //         content:
    //           "The competition is open to all pre-med students hoping to write their MCAT during the summer of 2024.",
    //       },
    //       {
    //         type: "bold",
    //         content: "Eligibility:",
    //       },
    //       {
    //         type: "text",
    //         content:
    //           "The competition is open to all pre-med students hoping to write their MCAT during the summer of 2024.",
    //       },
    //       {
    //         type: "highlight",
    //         content: " med.games.org@gmail.com.:",
    //       },
    //     ],
    //   },
    // ],
  },
  // {
  //   id: 5,
  //   title: "CASPer Program",
  //   description:
  //     "Med Games is holding an essay competition. The deadline to submit is April 1st 2024, at midnight EST.",
  //   via: "Virtual program",
  //   event_date: "27",
  //   event_month: "Sep",
  //   event_year: "2025",
  //   event_end_date: "28",
  //   event_end_month: "Sep",
  //   event_end_year: "2025",
  //   day: ["Saturday's", "Sunday's"],
  //   time: "8:00 AM - 8:00 PM EST",
  //   language: "English",
  //   imageURL: "/event_4.png",
  //   priceInValue: "$ 100",
  //   price: "Paid",
  //   // content_of_event: [
  //   //   {
  //   //     type: "heading",
  //   //     content: "About The Event",
  //   //   },
  //   //   {
  //   //     type: "paragraph",
  //   //     content: [
  //   //       {
  //   //         type: "text",
  //   //         content: "In your essay, please discuss how",
  //   //       },
  //   //       {
  //   //         type: "bold",
  //   //         content: "Artificial Intelligence",
  //   //       },
  //   //       {
  //   //         type: "text",
  //   //         content:
  //   //           " can be effectively utilized to enhance the preparation process for the ",
  //   //       },
  //   //       {
  //   //         type: "bold",
  //   //         content: "MCAT",
  //   //       },
  //   //     ],
  //   //   },
  //   //   {
  //   //     type: "list",
  //   //     list_items: [
  //   //       {
  //   //         type: "text",
  //   //         content:
  //   //           "Identification of key challenges faced by premed students in preparing for the",
  //   //       },
  //   //       {
  //   //         type: "bold",
  //   //         content: "MCAT",
  //   //       },
  //   //       {
  //   //         type: "text",
  //   //         content:
  //   //           "Explanation of how AI technologies can be used by Med Games to address these challenges and improve study efficiency and effectiveness for students as part of the MCAT program",
  //   //       },
  //   //       {
  //   //         type: "text",
  //   //         content: "Bulk of the essay should focus on:",
  //   //       },
  //   //       {
  //   //         type: "list-disc",
  //   //         content:
  //   //           "Examples of AI-powered tools, applications, or platforms that can be used by Med Games to aid premed students in various aspects of MCAT preparation (e.g., content review, practice questions, test-taking strategies, study schedule creation, etc.).",
  //   //       },
  //   //     ],
  //   //   },
  //   //   {
  //   //     type: "heading",
  //   //     content: "Submission Guidelines",
  //   //   },
  //   //   {
  //   //     type: "list",
  //   //     list_items: [
  //   //       {
  //   //         type: "bold",
  //   //         content: "Eligibility:",
  //   //       },
  //   //       {
  //   //         type: "text",
  //   //         content:
  //   //           "The competition is open to all pre-med students hoping to write their MCAT during the summer of 2024.",
  //   //       },
  //   //       {
  //   //         type: "bold",
  //   //         content: "Eligibility:",
  //   //       },
  //   //       {
  //   //         type: "text",
  //   //         content:
  //   //           "The competition is open to all pre-med students hoping to write their MCAT during the summer of 2024.",
  //   //       },
  //   //       {
  //   //         type: "bold",
  //   //         content: "Eligibility:",
  //   //       },
  //   //       {
  //   //         type: "text",
  //   //         content:
  //   //           "The competition is open to all pre-med students hoping to write their MCAT during the summer of 2024.",
  //   //       },
  //   //       {
  //   //         type: "highlight",
  //   //         content: " med.games.org@gmail.com.:",
  //   //       },
  //   //     ],
  //   //   },
  //   // ],
  // },
];

export const why_Us_contents = [
  {
    id: "1",
    title: "Expert Guidance",
    description:
      "Our team consists of experienced professionals who are dedicated to helping you achieve your goals in the medical field",
  },
  {
    id: "2",
    title: "Personalized Approach",
    description:
      "Each student receives customized plans tailored to their weaknesses, maximizing their potential and enhancing their chances of success",
  },
  {
    id: "3",
    title: "Comprehensive Support",
    description:
      "Our team consists of experienced professionals who are dedicated to helping you achieve your goals in the medical field",
  },
];

export const admin_sidebar_items = [
  {
    id: 1,
    title: "Dashboard",
    icon: <IconHome />,
    link: "/admin-dashboard",
  },
  {
    id: 2,
    title: "Tutors",
    icon: <IconSchool />,
    link: "/admin-tutors",
  },
  {
    id: 3,
    title: "Courses",
    icon: <IconBooks />,
    link: "/admin-courses",
  },
  {
    id: 4,
    title: "Contact Details",
    icon: <IconBell />,
    link: "/admin-contact-details",
  },
  {
    id: 5,
    title: "Payments",
    icon: <IconBuildingBank />,
    link: "/admin-payments",
  },
  {
    id: 6,
    title: "Blog",
    icon: <IconBrandBlogger />,
    link: "/admin-blog",
  },
];

export const sections = [
  {
    key: "objective",
    label: "Course Objective",
    type: "textarea",
    icon: "🎯",
  },
  {
    key: "key_features",
    label: "Key Features",
    type: "list",
    icon: "⭐",
  },
  {
    key: "topic_covered",
    label: "Topics Covered",
    type: "list",
    icon: "📚",
  },
  {
    key: "benefits",
    label: "Course Benefits",
    type: "list",
    icon: "🏆",
  },
  {
    key: "additional_resources",
    label: "Additional Resources",
    type: "list",
    icon: "📦",
    optional: true,
  },
];

export const subscribe_const = [
  "Monthly Medical Career Insights",
  "Exclusive Interview Preparation Guides",
  "Early Access to Specialized Courses",
];
