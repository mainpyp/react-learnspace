import './Card.css'
import SkillList from './SkillList.js'

function Card(props) {
    return (
        <div className='card-wrapper'>
            <img src={props.imgPath} alt="Me" />
            <h1>{props.title}</h1>
            <div>{props.content}</div>
            <SkillList skills={props.skills} />
        </div>
    )
};

export default Card;