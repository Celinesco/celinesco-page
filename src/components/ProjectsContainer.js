import ProjectCard from "./ProjectCard";
import "./MainSection.scss";

const ProjectsContainer = () => {
    return (
        <section className="section__projects">
            <h2 data-aos="flip-down" data-aos-duration="1000">Projects</h2>
            <div className="container__cards-projects">
                <ProjectCard 
                img=""
                title="First Portfolio"
                alt=""/>
                <ProjectCard 
                img="https://i.etsystatic.com/32248327/r/il/614b2e/3442381236/il_340x270.3442381236_jxj5.jpg"
                title="Meme Generator"
                alt="Famous cat meme "/>
                <ProjectCard 
                img="https://blogger.googleusercontent.com/img/a/AVvXsEg2_0yrTTO2xuQm7hrMKIJNCELT70jXypEOW6NXhySMSqGgkLDJvnjPP4qQnbD_-yrLZP1qw8hIInAKinZamEVdIC3lc9EkAZJkJoAurRqAw0gvC-R6NPHt5gVmnrGMWYA3chptGvCn6OlL5XICv17iBbYIrW_f4Q5TKJQgc7XdMS4Hfi4RysF6ZdnPIg=s320"
                title="Comics"
                alt="Kapow exclamation "/>
                <ProjectCard 
                img="https://blogger.googleusercontent.com/img/a/AVvXsEjvvYItYKdgI-8jDOJJTmnqgeEcnZyAer7eBFwDVJIl1uEo3voUNf7k2GeAIvIkReNTkA--PNiZo8gficbgv0pXyRQIYKMoKN3xLxZ9dBZO3Dezde5cH2Vrry5xky6BPff8COKs_DGGHED8876GDMEcAQbbTGqO-1hJTgNff9lonFSY_TgXwUv0bFYdhA=s320"
                title="AhorrADAs"
                alt="Statistics graph"/>
                <ProjectCard 
                img="https://blogger.googleusercontent.com/img/a/AVvXsEiq822jcy76XX9xUD5vVqneksee2EbKYJ1zGJ8fH1bhaqT9yRTFh_Q97QaghXcUD5TzbIe4_2yX7Nd7VbIgjmbzAX18bV_Rg5OU7TuA8hyqt74yPyEP-h1pEbFtpUtF7SzRKKijQCplPKwIcRbU0aW6Du154r10i1SaimyE16a7yIW1Xz0lBTPdSuShzQ=w323-h399"
                title="Matcheadas" />
                <ProjectCard 
                img=""
                alt="Rick and Morty silhouette"
                title="Rick & Morty"/>
                <ProjectCard 
                img=""
                alt="A checkbox list, with some tasks checked"
                title="ToDO Lists"/>
                <ProjectCard 
                img="https://blogger.googleusercontent.com/img/a/AVvXsEjr85XwtU6erDfZETf5dVTGeQaT6e7DYI61R2NIuB5Hv-jPmMUHN8DdfOK-Ejvmm7QeHaDU_EzT1rYTmHFnytdSRzNkUrGwZfOVGTiH3XxtI_c0vq-MtRQBcx2XW0E4UJ2CpZnGBnRDvHHHBi6MbsFAy5pvg9hcMGMheZklrf3uMBJJyMPk1Cx7W8x4gg=s320"
                title="Movies"/>
            </div>

        </section>
    )
}

export default ProjectsContainer;