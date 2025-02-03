export const PortfolioData = {
    name: "Anmol Anand",
    title: "Backend Developer",
    about: "I'm a passionate developer with 5 years of experience in web technologies.",
    skills: ["JavaScript", "React", "Node.js", "Python", "SQL"],
    projects: [
        {
            name: "E-commerce Platform",
            description: "Built a full-stack e-commerce solution using MERN stack.",
            link: "https://github.com/anmol420",
        },
        {
            name: "Weather App",
            description: "Developed a weather application using React and OpenWeatherMap API.",
            link: "https://github.com/anmol420",
        },
    ],
    contact: {
        email: "anand.anmol004@example.com",
        github: "https://github.com/anmol420",
        linkedin: "https://linkedin.com/in/anmol420",
    },
};

export type Command = "help" | "about" | "skills" | "projects" | "contact" | "clear";