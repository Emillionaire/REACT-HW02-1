const ProjectList = ( { projects } ) => {
    return (
        <>
            {projects.map((project, index) => {
                return <img src={project.img} datatype={project.category} key={index}/>
            })}
        </>
    );
};

export default ProjectList;