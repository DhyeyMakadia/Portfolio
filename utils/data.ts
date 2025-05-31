export const ProfileDetails = {
  personal: {
    EMAIL: "dhyeymakadia@gmail.com",
  },
  currentOrganization: {
    name: "Sigma Solve Inc",
    designation: "Software Engineer Intern",
    companyLink: "https://www.sigmasolve.com/",
  },
  college: {
    name: "L.J. Institute of Engineering and Technology",
    degree: "Bachelor's in Computer Engineering",
    collegeLink: "https://www.ljku.edu.in/",
  },
  links: {
    RESUME:
      "https://drive.google.com/file/d/1K8Mm1V3UjNs7G7-af0rHUr1GsmrjpCa6/view?usp=drive_link",
    INSTAGRAM: "https://www.instagram.com/_dhyey_24_/",
    GITHUB: "https://github.com/DhyeyMakadia",
    TWITTER: "https://twitter.com/Dhyey_Makadia",
    LINKEDIN: "https://www.linkedin.com/in/dhyeymakadia",
    FACEBOOK: "https://www.facebook.com/dhyey.patel.16503",
  },
  Experience: [
    {
      displayName: "Sigma Solve Inc",
      // displayName is used to show a more readable name in the UI
      name: "Sigma Solve Inc",
      designation: "Software Engineer",
      website: "https://www.sigmasolve.com/",
      duration: "Oct 2024 - Present",
      description: [
        `Currently working as a Software Engineer at Sigma Solve Inc, focusing on developing scalable web applications using React and Node.js.
              Involved in the full software development lifecycle, from requirements gathering to deployment.`,
        `Collaborating with cross-functional teams to ensure high-quality software delivery.`,
        `Participating in code reviews and contributing to the improvement of development processes.`,
      ],
    },
    {
      displayName: "TatvaSoft",
      name: "TatvaSoft",
      designation: "Software Engineer",
      website: "https://www.tatvasoft.com/",
      duration: "July 2022 - Sep 2024",
      description: [
        `Worked as a Software Engineer at TatvaSoft, where I developed and maintained web applications using React, Node.js, and GraphQL.
                Involved in designing and implementing RESTful APIs and integrating third-party services.`,
        `Collaborated with product managers and designers to deliver user-friendly applications.`,
        `Participated in Agile development processes, including sprint planning and retrospectives.`,
      ],
    },
    {
      displayName: "L.J Institute",
      name: "L.J. Institute",
      designation: "Engineering Student",
      website: "https://www.ljku.edu.in/",
      duration: "August 2019 - May 2023",
      description: [
        `Completed Bachelor's in Computer Engineering from L.J Institute of Engineering and Technology, where I gained a solid foundation in software development principles and practices.`,
        `Engaged in various projects that involved web development, data structures, and algorithms.`,
        `Participated in hackathons and coding competitions, enhancing problem-solving skills and teamwork.`,
      ],
    },
  ],
  Projects: [
    {
      order: 1,
      featured: true,
      title: "Realty Board",
      description:
        "Developed a comprehensive property management platform with features such as property listing, contact linking, task/note tracking, team-based access control, secure dataroom, in-app messaging, marketing landing pages, Stripe payments, internationalization, and AWS Cognito-based authentication.",
      technologies: [
        "Next.js",
        "Nest.js",
        "Micro-Service Architecture",
        "SQL Server",
        "AWS S3",
        "Socket.io",
        "Stripe",
        "i18n",
        "AWS Cognito",
        "OAuth",
      ],
      githubLink: "",
      externalLink: "",
    },
    {
      order: 2,
      featured: true,
      title: "WealthTrack",
      description:
        "Built a wealth management platform allowing users to manage assets such as cash, real estate, and cryptocurrencies. Features include a Wealth Planner, Twilio-powered chat and video, and real-time dashboards for tracking net worth and portfolio performance.",
      technologies: ["React.js", "Chart.js", "Twilio", "Stripe"],
      githubLink: "",
      externalLink: "",
    },
    {
      order: 3,
      featured: true,
      title: "Smart Marketplace",
      description:
        "Engineered a freelance marketplace with seamless user registration, real-time messaging, Stripe payment integration, and an admin dashboard for managing users and services.",
      technologies: [
        "Next.js",
        "React.js",
        "Nest.js",
        "Stripe",
        "Twilio",
        "Internationalization",
        "Sezzle",
      ],
      githubLink: "",
      externalLink: "",
    },
    {
      order: 4,
      featured: true,
      title: "Tweet Studio",
      description:
        "Developed a tweet management system for campaign administrators featuring role-based access, campaign setup, password protection, and document uploads for streamlined campaign execution.",
      technologies: ["Next.js", "Tailwind CSS", "Twitter APIs", "React Query"],
      githubLink: "",
      externalLink: "",
    },
    {
      order: 5,
      featured: false,
      title: "Helperland",
      description:
        "Designed and developed a service booking platform that allows users to schedule home cleaning services. Service providers can register on the platform, manage bookings, and offer services. The system facilitates smooth interactions between users and cleaners through an intuitive interface and role-based workflows.",
      technologies: ["Next.js", "React.js", "Node.js", "Express", "MongoDB"],
      githubLink: "",
      externalLink: "",
    },
  ],
};
