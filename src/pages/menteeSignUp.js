function menteeSignUp(){
    return(
        <div class="mentee-signup-box">
            <div class="signup-text">SIGN UP</div>
            <div class="create-account-text">Create a Mentomatch Account</div>

            <div class="input-group mb-3" id="signup-name">
                <span class="input-group-text" id="basic-addon1">Name</span>
                <input type="email" class="form-control" aria-label="name" aria-describedby="basic-addon1"></input>
            </div>
            <div class="input-group mb-3" id="signup-email">
                <span class="input-group-text" id="basic-addon1">@Email</span>
                <input type="text" class="form-control" aria-label="Email" aria-describedby="basic-addon1"></input>
            </div>
            <div class="input-group mb-3" id="signup-dob">
                <span class="input-group-text" id="basic-addon1">Date of Birth</span>
                <input type="date" class="form-control" aria-label="phone-number" aria-describedby="basic-addon1"></input>
            </div>

            <div class="input-group mb-3" id="signup-password">
                <span class="input-group-text" id="basic-addon1">Password</span>
                <input type="password" class="form-control" aria-label="password" aria-describedby="basic-addon1"></input>
            </div>
            <button type="button" class="btn btn-outline-secondary" id="signin-next-button">Next</button>

            <div class="already-account">Have an account? <a href="/">Sign In</a></div>
        </div>
    )
}

export default menteeSignUp