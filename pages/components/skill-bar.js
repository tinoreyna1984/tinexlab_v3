export default function SkillBar({ skill, percentage, skillId }) {
    return (
        /* individual skills to be rendered */
        <div className="skill-bar">
            <div className="details">
                <span>{skill}</span>
                <span>{percentage}</span>
            </div>
            <div className="bar">
                <div id={skillId}></div>
            </div>
        </div>
    );
}