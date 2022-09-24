
import React,{useState, useEffect} from "react"
import { AiOutlineClose } from "react-icons/ai";
import {useParams} from "react-router-dom";
import {db} from "../firebase.js";
import {getDatabase, ref, set } from "firebase/database";
function Interests(){
    let params = useParams();
    const [interests,setInterests]=useState([]);
    const [choice,setChoice]=useState([]);
    var ele = ['Math','English','Science'];
  function inputhandle(){
        choice.length=0;
        console.log(document.getElementById('interestsinput').value);
        for (let i = 0; i < ele.length; i++) {
            const element = ele[i].toLowerCase().includes(document.getElementById('interestsinput').value.toLowerCase());
            if(ele[i].toLowerCase().includes(document.getElementById('interestsinput').value.toLowerCase())&&document.getElementById('interestsinput').value!=''){
                choice.push(ele[i]);
            }
    
        }

        setChoice([...choice]);
  }
function userinfo() {
    set(ref(getDatabase(), 'users/'+params.email.replace('@','_').replace(".","_")), {
        name: params.name,
        password: params.pass,
        dob : params.dob,
        interests: JSON.stringify(choice),
        Mentor:document.getElementById('IamMentor').checked
      });



}

  function add(val){
    if(interests.includes(val)==false){
    interests.push(val);}
    setInterests([...interests]);
    
}
    return(
        <div class="mentee-signup-box">
                        <div class="signin-text">Interests</div>
            
            <div class="input-group mb-3" id="interests-add" style={{paddingLeft:'10px',paddingRight:'10px'}}>
                <input onChange={()=>{inputhandle()}} type="text" id="interestsinput" class="form-control" placeholder="What are you interested in?" aria-label="interests-add" aria-describedby="button-addon2"></input>
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
            </div>
            <div style={{width:'90%',overflowY:'scroll',height:'100px'}}>
                {choice.map((val)=>{
                    return <div onClick={()=>{add(val)}}><p style={{color:'white'}}>{val}</p></div>;
                })}
                
            </div>
            <div style={{display:'flex',flexDirection:'row'}}>
            {interests.map((val,key)=>{
                console.log(val,key);

                return <div className="btn btn-success" style={{marginRight:'5px',marginLeft:'5px',color:'white',display:'flex',flexDirection:'row',padding:'none',alignItems:'center',padding:'5px'}}><p style={{marginBottom:'0px'}}>{val}</p><button className="btn" onClick={()=>{
                   var new1 = interests.slice(0,key);
                   var new2 = interests.slice(key+1,interests.length)
                   console.log(new1);
                   console.log(new2);
                    var l=[];
                    for (let i = 0; i < new1.length; i++) {
                        const element = new1[i];
                        l.push(element);
                    }
                    for (let i = 0; i < new2.length; i++) {
                        const element = new2[i];
                        l.push(element);
                    }
                   console.log(l); 
                   setInterests([...l]);
                    

                }}><AiOutlineClose/></button></div>
            
            })}
            </div>
            <div class="interests" style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <input type="radio" value="Mentor" id="IamMentor"></input><p style={{color:'white',marginBottom:'0px'}}>Mentor</p>
                <input type="radio" value="Mentee" id="IamMentee"></input><p style={{color:'white',marginBottom:'0px'}}>Mentee</p>
            </div>
            <button onClick={()=>{userinfo()}} type="button" class="btn btn-outline-secondary" id="interests-submit-button" style={{margin:'10px'}}>Submit</button>
           
        </div>
    )
}

export default Interests