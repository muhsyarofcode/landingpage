import { useInView } from 'react-intersection-observer';
import style from '../../globalStyle/globalStyle.module.css'

function Skill(){
    const { ref:rankRef, inView:rankIsVisible } = useInView();

    return(
        <div className={style.daftarskill} ref={rankRef}>
            <ul className={style.skillsactive}>
                <li className={style.skillName}>HTML<span>
                            <div className={`${rankIsVisible ? style.rankhtml : style.rank}`}>
                                <p className={style.textr}>noob</p>
                                <p className={style.textr}>pro</p>
                            </div>
                        </span>
                    </li>
                <li className={style.skillName}>CSS<span>
                <div className={`${rankIsVisible ? style.rankcss : style.rank}`}>
                                <p className={style.textr}>noob</p>
                                <p className={style.textr}>pro</p>
                            </div></span></li>
                <li className={style.skillName}>Javascript<span>
                <div className={`${rankIsVisible ? style.rankjs : style.rank}`}>
                                <p className={style.textr}>noob</p>
                                <p className={style.textr}>pro</p>
                            </div></span></li>
                <li className={style.skillName}>PHP<span>
                <div className={`${rankIsVisible ? style.rankphp : style.rank}`}>
                                <p className={style.textr}>noob</p>
                                <p className={style.textr}>pro</p>
                            </div></span></li>
                <li className={style.skillName}>MYSQL<span>
                <div className={`${rankIsVisible ? style.rankmysql : style.rank}`}>
                                <p className={style.textr}>noob</p>
                                <p className={style.textr}>pro</p>
                            </div></span></li>
            </ul>
            <ul className={style.skillsactive}>
                <li className={style.skillName}>React JS<span>
                <div className={`${rankIsVisible ? style.rankrjs : style.rank}`}>
                                <p className={style.textr}>noob</p>
                                <p className={style.textr}>pro</p>
                            </div></span></li>
                <li className={style.skillName}>laravel<span>
                <div className={`${rankIsVisible ? style.ranklrv : style.rank}`}>
                                <p className={style.textr}>noob</p>
                                <p className={style.textr}>pro</p>
                            </div></span></li>
                <li className={style.skillName}>Bootstrap<span>
                <div className={`${rankIsVisible ? style.rankbs : style.rank}`}>
                                <p className={style.textr}>noob</p>
                                <p className={style.textr}>pro</p>
                            </div></span></li>
                <li className={style.skillName}>API<span>
                <div className={`${rankIsVisible ? style.rankapi : style.rank}`}>
                                <p className={style.textr}>noob</p>
                                <p className={style.textr}>pro</p>
                            </div></span></li>
            </ul>
        </div>
    )
}

export default Skill;