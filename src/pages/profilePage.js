function ProfilePage(props){
    return(
        <div>
            <div class="profile-div">
                <div class="profile-left">
                    <div class="info-div">
                        <div class="info-top">
                            <div class="profile-picture"><img src={require("../images/profile-picture.jpeg")}></img></div>
                            <div class="info-name">{props.name}</div>
                        </div>
                        <div class="info-desc">
                            <div class="info-desc-header">About Me</div>
                            <div class="info-desc-text">{props.aboutme}</div>
                        </div>
                    </div>

                    <div class="profile-interests-div">
                        <div class="profile-interests-text">Interests</div>
                    </div>
                </div>

                <div class="profile-right">
                    <div class="profile-badges-text">Badges</div>
                    <div class="profile-badges"></div>
                </div>

            </div>
        </div>
    )
}

export default ProfilePage
