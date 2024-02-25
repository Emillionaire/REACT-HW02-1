import styles from './Toolbar.module.css';

const Toolbar = ( props ) => {
    return (
        <>{props.filters.map(filter =>
            <button key={filter} datatype={filter} onClick={props.onSelectFilter} className={filter === props.selected ? styles.activeButton : ""}>
                {filter}
            </button>
        )}</>
    );
};

export default Toolbar;