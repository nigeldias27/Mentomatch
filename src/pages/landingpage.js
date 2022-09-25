import Navbar from "../components/Navbar.js";
import { FaLongArrowAltRight } from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import backgroundLanding from "../images/back.png"
function Landing(){
    let navigate = useNavigate()
    function go(){
        navigate('/signup');
    }

    return(
        <div class="landing-page" >
        <div style={{backgroundImage:`url(${backgroundLanding})`, backgroundRepeat: "no-repeat", backgroundSize: "100%", margin: "0px"}}>
        <Navbar />
        <div class="landing-slide">
            <div class="landing-slide-top">
                <div class="mentomatch-text-fancy">ment<div class="fancy-o">o</div>match</div>
                <div class="mentomatch-tagline-text">meet like minded people - do great things</div></div>
            </div>
            <div class="landing-slide-bottom">
                <div class="mentee-card"><button onClick={()=>{
                    go()
                }}>
                    <div class="mentee-card-big-text">MENTEE</div>
                    <div class="mentee-card-small-text">receive guidance from expert mentors</div>
                    </button>
            </div>
                <div class="signup-text">SIGN UP</div>
                <div class="mentor-card"><button onClick={()=>{
                    go()
                }}>
                    <div class="mentor-card-big-text">MENTOR</div>
                    <div class="mentor-card-small-text">provide guidance to average mentees</div>
                </button>

                </div>
            </div>
        </div>
            

            <div class="second-slide">
                <div class="sst1">What is</div>
                <div class="sst2">ment<div class="highlight"> o </div>match?</div>
                <div class="sst3">A <div class="highlight"> platform </div> to match</div>
                <div class="sst4">students <div class="highlight"> mentees </div> to seniors students <div class="highlight"> mentors </div></div>
                <div class="sst5">based on matching common <div class="highlight"> interests </div></div>
            </div>

            <div class="uses">
            <div class="uses-for-mentee">
                <div class="uses-mentee-left">
                    <div class="uses-for-mentee-text-label">
                        <div>M</div>
                        <div>E</div>
                        <div>N</div>
                        <div>T</div>
                        <div>E</div>
                        <div>E</div>
                    </div>
                </div>
                <div class="uses-mentee-right">
                    <div class="mentee-uses">
                        <div class="mentee-use-top">
                            <FaLongArrowAltRight size={"40"}/>
                            <div class="mentee-use1-big-text">learn from what you love</div>
                        </div>
                        <div class="mentee-use1-bottom">
                            <div class="mentee-use1-small-text">pick any of your interests and learn with a mentor</div>
                        </div>

                        <div class="mentee-use-top">
                            <FaLongArrowAltRight size={"40"}/>
                            <div class="mentee-use1-big-text"></div>
                        </div>
                        <div class="mentee-use1-bottom">
                            <div class="mentee-use1-small-text">pick any of your interests and learn with a mentor</div>
                        </div>

                        <div class="mentee-use-top">
                            <FaLongArrowAltRight size={"40"}/>
                            <div class="mentee-use1-big-text">learn from what you love</div>
                        </div>
                        <div class="mentee-use1-bottom">
                            <div class="mentee-use1-small-text">pick any of your interests and learn with a mentor</div>
                        </div>

                        <div class="mentee-use-top">
                            <FaLongArrowAltRight size={"40"}/>
                            <div class="mentee-use1-big-text">learn from what you love</div>
                        </div>
                        <div class="mentee-use1-bottom">
                            <div class="mentee-use1-small-text">pick any of your interests and learn with a mentor</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="uses-for-mentee">
            <div class="uses-mentor-right">
                    <div class="mentor-uses">
                        <div class="mentee-use-top">
                            <FaLongArrowAltRight size={"40"}/>
                            <div class="mentee-use1-big-text">learn from what you love</div>
                        </div>
                        <div class="mentee-use1-bottom">
                            <div class="mentee-use1-small-text">pick any of your interests and learn with a mentor</div>
                        </div>

                        <div class="mentee-use-top">
                            <FaLongArrowAltRight size={"40"}/>
                            <div class="mentee-use1-big-text">learn from what you love</div>
                        </div>
                        <div class="mentee-use1-bottom">
                            <div class="mentee-use1-small-text">pick any of your interests and learn with a mentor</div>
                        </div>

                        <div class="mentee-use-top">
                            <FaLongArrowAltRight size={"40"}/>
                            <div class="mentee-use1-big-text">learn from what you love</div>
                        </div>
                        <div class="mentee-use1-bottom">
                            <div class="mentee-use1-small-text">pick any of your interests and learn with a mentor</div>
                        </div>

                        <div class="mentee-use-top">
                            <FaLongArrowAltRight size={"40"}/>
                            <div class="mentee-use1-big-text">learn from what you love</div>
                        </div>
                        <div class="mentee-use1-bottom">
                            <div class="mentee-use1-small-text">pick any of your interests and learn with a mentor</div>
                        </div>
                    </div>
                </div>
                <div class="uses-mentee-left">
                    <div class="uses-for-mentee-text-label">
                        <div>M</div>
                        <div>E</div>
                        <div>N</div>
                        <div>T</div>
                        <div>O</div>
                        <div>R</div>
                    </div>
                </div>
            </div>
            </div>

            <div class="video-howto-slide">
                <div class="video-div1">
                    <div class="video-div1-header"></div>
                    <iframe></iframe>
                </div>
                <div class="video-div2">
                    <div class="video-div2-header"></div>
                    <iframe></iframe>
                </div>
            </div>
        </div>)

}
    
export default Landing;