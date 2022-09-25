import NavbarDashboard from "../components/navbardashboard"
import {useParams} from "react-router-dom";
function ProfilePage(props){
    let params = useParams();
    return(
        <div>
            <NavbarDashboard/>
            <div class="profile-div">
                <div class="profile-left">
                    <div class="info-div">
                        <div class="info-top">
                            <div class="profile-picture"><img src={require("../images/profile-picture.jpeg")}></img></div>
                            <div class="info-name">{params.name}</div>
                        </div>
                        <div class="info-desc">
                            <div class="info-desc-header">About Me</div>
                            <div class="info-desc-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                        </div>
                    </div>

                    <div class="profile-interests-div">
                        <div class="profile-interests-text">Interests</div>
                    </div>
                </div>

                <div class="profile-right">
                    <div class="profile-badges-text">Badges</div>
                    <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2017%2F03%2F21%2F21%2F05%2Fmedal-2163345__480.png&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fgold%2520medal%2F&tbnid=IaZpvPp2MiWBSM&vet=12ahUKEwiC3J67wa_6AhU3z6ACHWZUAbQQMygEegUIARDuAQ..i&docid=uG3P7iT6qTf7TM&w=343&h=480&q=gold%20medal&ved=2ahUKEwiC3J67wa_6AhU3z6ACHWZUAbQQMygEegUIARDuAQ"></img>
                    <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn3.vectorstock.com%2Fi%2F1000x1000%2F75%2F02%2Fchampion-silver-medal-with-ribbon-on-white-vector-3977502.jpg&imgrefurl=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fchampion-silver-medal-with-ribbon-on-white-vector-3977502&tbnid=HzbicmbLQE3awM&vet=12ahUKEwim2ufFwa_6AhWTzqACHcvsDB4QMygBegUIARDsAQ..i&docid=JlBI6jaPV6UOkM&w=700&h=1080&q=silver%20medal&ved=2ahUKEwim2ufFwa_6AhWTzqACHcvsDB4QMygBegUIARDsAQ"></img>
                    <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fblank-bronze-medal-12454424.jpg&imgrefurl=https%3A%2F%2Fwww.dreamstime.com%2Fillustration%2Fblank-bronze-medal.html&tbnid=qrqkgTijKjsdoM&vet=12ahUKEwi50IvQwa_6AhVrj9gFHdavBk4QMygDegUIARDsAQ..i&docid=cVhAERM2LT8OQM&w=540&h=900&q=bronze%20medal&ved=2ahUKEwi50IvQwa_6AhVrj9gFHdavBk4QMygDegUIARDsAQ"></img>

                    <div class="profile-badges"></div>
                </div>

            </div>
        </div>
    )
}

export default ProfilePage
