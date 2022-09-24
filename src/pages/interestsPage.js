function Interests(){
    return(
        <div class="interests-box">
            <div class="choose-interests-text">Choose Your Interests</div>
            
            <div class="input-group mb-3" id="interests-add">
                <input type="text" class="form-control" placeholder="Type Interests Here" aria-label="interests-add" aria-describedby="button-addon2"></input>
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Add!</button>
            </div>

            <div class="interests">
            </div>
            <button type="button" class="btn btn-outline-secondary" id="interests-submit-button">Submit</button>
        </div>
    )
}

export default Interests