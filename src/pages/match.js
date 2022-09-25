
import background from "../images/background.png";
import NavbarDashboard from "../components/navbardashboard";
import { useEffect,useState } from "react";
import { getDatabase, ref, child, get , set } from "firebase/database";
import {db} from "../firebase.js";
import { useNavigate } from "react-router-dom";
function Match() {
    const [interests,setInterests]=useState([]);
    const [displaying,setDisplaying]=useState(false);
    const [selectedInterests,setSelectedInterests]=useState('');
    let navigate = useNavigate();
        
     
function dropdownint(){
    const dbRef = ref(getDatabase());
        get(child(dbRef, `users/`)).then((snapshot) => {
          if (snapshot.exists()) {
            var data = snapshot.val();
            for (var key in data){
                if(JSON.parse(localStorage.getItem('userinfo'))[0]==key){
                    console.log(data[key]['interests']);
                    setInterests([...JSON.parse(data[key]['interests'])])
                   
                }
            }
          } else {
            console.log("No data available");
          }
        }).catch((error) => {
          console.error(error);
        });
displaying?setDisplaying(false):setDisplaying(true);
console.log(displaying);
}
function selectedop(val) {
    setSelectedInterests(val);
    document.getElementById("interestsmatching").innerHTML = val;
    setDisplaying(false);
}

function match(){
    console.log("matching takes place here")

    const dbRef = ref(getDatabase());
get(child(dbRef, `Groups/`)).then((snapshot) => {
          if (snapshot.exists()) {
            var data = snapshot.val();

            var mentormenteelist = Object.keys(data).map((value)=>{
                var objarr = []

                for (let il = 0; il < value.split('|').length; il++) {
                    const mentormentee = value.split('|')[il];
                    objarr.push(mentormentee);
                }
                console.log(objarr)
                console.log(data[value]);
                console.log(selectedInterests);
                console.log(data[value]!=selectedInterests);
                return objarr.length==3||data[value]['interests']!=selectedInterests?[]:objarr;
            });
            console.log(mentormenteelist);
            var mentormenteelistempty=[];
            for (let empt = 0; empt < mentormenteelist.length; empt++) {
                mentormenteelistempty.push([]);
            }
            console.log(mentormenteelistempty);
                    if(JSON.stringify(mentormenteelist)!==JSON.stringify(mentormenteelistempty)){
                        console.log("Running1");
                        for (let il = 0; il < mentormenteelist.length; il++) {
                            const peepspresent = mentormenteelist[il];
                            if(peepspresent!=[]){
                                var querystr='';
                                for (let last = 0; last < peepspresent.length; last++) {
                                    const element = peepspresent[last];
                                    if(last == peepspresent.length-1){
                                        querystr=querystr+element
                                    }
                                    else{
                                        querystr=querystr+element+'|'
                                    }
                                }
                                var queryst='';
                                for (let last = 0; last < peepspresent.length; last++) {
                                    const element = peepspresent[last];
                                   queryst=queryst+element+'|'
                                   
                                }
                                console.log(data[querystr]);
                                set(ref(getDatabase(), 'Groups/' +queryst+'|'+JSON.parse(localStorage.getItem('userinfo'))[0]),data[querystr]);
                                set(ref(getDatabase(), 'Groups/' +querystr),null);
                                
                                break;
                            }
                        }
                    }
                    else{
                        console.log("Running2");
                        get(child(dbRef, `users/`)).then((snapshot) => {
                            var data = snapshot.val();
                  for (var key in data){
                    var co=0;
                    if(data[key]['Mentor']==true&& key!=JSON.parse(localStorage.getItem('userinfo'))[0]){
                        if(JSON.parse(data[key]['interests'].includes(selectedInterests))){
                            console.log(key);
                            get(child(dbRef, `Groups/`)).then((snapshot) => {
                                var freements = Object.keys(data);
                                console.log(freements);
                                for(var countofments in freements){
                                    if(countofments[0]==key){co++;}
                                }
                            })
                        }
                    }
                    if(co<2){
                        set(ref(getDatabase(), 'Groups/' +key+'|'+JSON.parse(localStorage.getItem('userinfo'))[0]), {
                            interests: selectedInterests
                          });break;
                    }
                  }
                        });
                        

                    }
          } else {
            
            get(child(dbRef, `users/`)).then((snapshot) => {//Not groups formed
                if (snapshot.exists()) {
                  var data = snapshot.val();
                  for (var key in data){
                      if(data[key]['Mentor']==true&& key!=JSON.parse(localStorage.getItem('userinfo'))[0]){
                            if(JSON.parse(data[key]['interests'].includes(selectedInterests))){
                                console.log('Groups/' +key+'|'+JSON.parse(localStorage.getItem('userinfo'))[0])
                                
                                set(ref(getDatabase(), 'Groups/' +key+'|'+JSON.parse(localStorage.getItem('userinfo'))[0]), {
                                    interests: selectedInterests
                                  });
                                  break;
                                  
                            }
                         
                      }
                  }
                } else {
                  console.log("No data available");
                }
              }).catch((error) => {
                console.error(error);
              });                                                    

          }
        }).catch((error) => {
          console.error(error);
        });

navigate('/dashboard');

}

    return( <div style={{backgroundImage:`url(${background})`}}>
<NavbarDashboard/>
<div className="outermatch" style={{width:'100vw',height:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
<div className="innermatch" style={{width:'400px',height:'400px',color:'#C9C8C8',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>

    <h2 style={{paddingBottom:'52px',color:'black'}}> Matching</h2>
    <div class="dropdown">
  <button class="btn btn-light" style={{width:'170px'}} type="button" onClick={()=>{dropdownint()}}>
    <p id="interestsmatching" style={{marginBottom:'0px'}}>Select your interests</p>
  </button>
  <ul class="menu">
  {displaying?interests.map((value)=>{
    return  <li><a class="item"  onClick={()=>{selectedop(`${value}`)}}>{value}</a></li>
  })
  :<br></br>}
  </ul>
  <button className="btn btn-primary" style={{width:'170px'}}  onClick={()=>{match()}}>Find a match</button>
</div>
</div>

</div>
    </div>)
}

export default Match;