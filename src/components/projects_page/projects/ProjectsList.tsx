import ProjectItem from "./ProjectItem";

function ProjectsList() {
  return (
    <div className='mt-5 grid grid-cols-2 gap-5 md:grid-cols-3  md:gap-5 xl:grid-cols-4'>
      {projects.map((project) => (
        <ProjectItem project={project} key={project.id} />
      ))}
    </div>
  );
}

export default ProjectsList;

const projects = [
  {
    id: "1",
    title: "Website Redesign",
    description: "Redesign company website to improve user experience.",
    emoji: "🎨",
    color: "#FF5733",
    deadline: new Date("2024-06-30"),
    tasks: [
      { id: "1", checked: false, title: "Complete design mockups" },
      { id: "2", checked: true, title: "Develop frontend components" },
      { id: "3", checked: false, title: "Write API documentation" },
      { id: "4", checked: true, title: "Test application for bugs" },
      { id: "5", checked: false, title: "Deploy to production server" },
    ],
  },
  {
    id: "2",
    title: "Mobile App Development",
    description: "Develop a new mobile app for iOS and Android platforms.",
    emoji: "📱",
    color: "#4CAF50",
    deadline: new Date("2024-08-15"),
    tasks: [
      { id: "6", checked: false, title: "Design app UI/UX" },
      {
        id: "7",
        checked: false,
        title: "Implement login and authentication system",
      },
      { id: "8", checked: true, title: "Develop core functionality" },
      { id: "9", checked: false, title: "Test app on multiple devices" },
      { id: "10", checked: false, title: "Publish app to app stores" },
    ],
  },
  {
    id: "3",
    title: "Marketing Campaign",
    description: "Launch a new marketing campaign for product promotion.",
    emoji: "💼",
    color: "#FFC107",
    deadline: new Date("2024-09-30"),
    tasks: [
      { id: "11", checked: false, title: "Define target audience" },
      { id: "12", checked: true, title: "Create marketing materials" },
      { id: "13", checked: true, title: "Plan social media strategy" },
      { id: "14", checked: true, title: "Execute email marketing campaign" },
      { id: "15", checked: false, title: "Analyze campaign performance" },
    ],
  },
  {
    id: "4",
    title: "Product Testing",
    description: "Conduct thorough testing of the new product before release.",
    emoji: "🔬",
    color: "#3F51B5",
    deadline: new Date("2024-10-20"),
    tasks: [
      { id: "16", checked: true, title: "Create test cases" },
      { id: "17", checked: true, title: "Perform unit testing" },
      { id: "18", checked: true, title: "Run integration tests" },
      { id: "19", checked: true, title: "Check for security vulnerabilities" },
      { id: "20", checked: false, title: "Generate test reports" },
    ],
  },
  {
    id: "5",
    title: "Customer Support Enhancement",
    description:
      "Improve customer support system for better user satisfaction.",
    emoji: "🛠️",
    color: "#9C27B0",
    deadline: new Date("2024-11-30"),
    tasks: [
      { id: "21", checked: true, title: "Gather user feedback" },
      {
        id: "22",
        checked: false,
        title: "Identify pain points in current support system",
      },
      { id: "23", checked: true, title: "Develop new help documentation" },
      { id: "24", checked: false, title: "Implement live chat support" },
      {
        id: "25",
        checked: false,
        title: "Monitor support ticket resolution times",
      },
    ],
  },
];
