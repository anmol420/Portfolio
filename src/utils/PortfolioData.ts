export const PortfolioData = {
    name: "John Doe",
    title: "Full Stack Developer",
    about: "I'm a passionate developer with 5 years of experience in web technologies.",
    skills: ["JavaScript", "React", "Node.js", "Python", "SQL"],
    projects: [
        {
            name: "E-commerce Platform",
            description: "Built a full-stack e-commerce solution using MERN stack.",
            link: "https://github.com/johndoe/ecommerce",
        },
        {
            name: "Weather App",
            description: "Developed a weather application using React and OpenWeatherMap API.",
            link: "https://github.com/johndoe/weather-app",
        },
    ],
    contact: {
        email: "john.doe@example.com",
        github: "https://github.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
    },
};

export type Command = "help" | "about" | "skills" | "projects" | "contact" | "clear";