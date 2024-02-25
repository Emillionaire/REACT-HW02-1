import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";
import data from './portfolio.data';
import { useState } from "react";

const projectsFilter = (selected) => {
    if (selected === 'All') {
        return data
    } else {
        
        let a = data.filter((el) => (el.category === selected))
        return a
    }
};

const Portfolio = () => {
    const [selected, setSelected] = useState('All');

    return (
        <>
            <Toolbar
                filters={['All', 'Websites', 'Flayers', 'Buisness Cards']}
                selected={selected}
                onSelectFilter={(filter) => {
                    console.log(filter)
                    setSelected(filter.target.innerHTML);
                    projectsFilter(selected);
                }}
            />
            <ProjectList projects={projectsFilter(selected)}/>
        </>
    );
};

export default Portfolio;