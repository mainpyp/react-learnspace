import './SkillList.css'

function SkillList(props) {
    return (
    <ul className="skill-list">
        {Object.entries(props.skills).map(([skill, [emoji, color]]) => (
            <li key={skill} style={{backgroundColor: color, color: "white", padding: "3px", borderRadius: "5px", marginTop: "15px"}}>
                {skill} {emoji}
            </li>
        ))}
    </ul>
    )
}

export default SkillList;