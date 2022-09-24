function SignIn(){
    return (
        <div class="signin-box">
            <div class="signin-text">SIGN IN</div>

            <div class="input-group mb-3" id="signin-email">
                <span class="input-group-text" id="basic-addon1">@Email</span>
                <input type="text" class="form-control" aria-label="Email" aria-describedby="basic-addon1"></input>
            </div>

            <div class="input-group mb-3" id="signin-password">
                <span class="input-group-text" id="basic-addon1">Password</span>
                <input type="password" class="form-control" aria-label="password" aria-describedby="basic-addon1"></input>
            </div>
        
            <button type="button" class="btn btn-outline-secondary" id="signin-next-button">Next</button>

            <div class="no-account-text">Don't have an account? <a href="/">Sign Up</a></div>
        </div>
    )
}

export default SignIn