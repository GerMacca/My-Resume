import './MainContent.css';
import AboutMe from './AboutMe/AboutMe.jsx';
import Education from './Education/Education.jsx';
import Professional from './ProfessionalExp/Professional.jsx';
import Projects from './Projects/Projects.jsx';
import Languages from './Languages/Languages.jsx'

export default function MainContent() {
    return (
        <main className='grid-model'>
            <AboutMe />
            <Education />
            <Professional />
            <Projects />
            <Languages />
        </main>
    );
}