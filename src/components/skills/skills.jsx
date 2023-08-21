import Skill from "../skill/skill";
import '../../globalStyle/globalStyle.css'

function Skills (){
    return (
        <div className="myskills">
            <h1 className="text">My Skills</h1>
            <Skill className='sk'/>
        </div>
    )
}

export default Skills;