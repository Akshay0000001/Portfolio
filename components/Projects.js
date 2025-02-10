// components/Projects.js
import styles from '../app/page.module.css'; // Optional: Use CSS modules for specific styling

const Projects = () => {
  return (
    <section id="projects" className={styles.section}>
      <h2 className={styles.heading}>Projects</h2><br></br>
      <div className={styles.projectsContainer}>
        <div className={styles.projectCard}>
          <h3>FoodMenu</h3><br></br>
          <p>
            "The React food menu is an interactive and dynamic component for displaying a wide variety of food items in a structured and appealing layout. With responsive design and user-friendly navigation, customers can easily browse through different categories, view food details, and seamlessly add items to their cart. The menu supports features like search, filtering, and sorting, making it an efficient tool for users to find their favorite dishes while enhancing the overall user experience."
            <br /><br />
            <a href="https://react-food-menu-git-main-akshay0000001s-projects.vercel.app/" target="_blank">Visit Website</a>
          </p>
        </div>
        <div className={styles.projectCard}>
          <h3>Portfolio</h3><br></br>
          <p>
          "An interactive, visually appealing portfolio showcasing my work as a front-end developer. Built with Next.js and React, this portfolio displays various projects, including dynamic features like a contact form and project showcase. The responsive design ensures it works seamlessly across devices, while modern tools like Vercel allow for easy hosting and deployment. The portfolio demonstrates my skills in front-end technologies such as HTML, CSS, JavaScript, React, and Next.js, highlighting my ability to create engaging user experiences and maintain clean, modular code."
          </p>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </section>
  );
};

export default Projects;
