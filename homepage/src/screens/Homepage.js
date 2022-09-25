import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

function Homepage(props) {
  return (
    <Image
      src={require("../assets/images/mentomatch_background_Ifdt..png")}
      resizeMode="contain"
    >
      <HomeRow>
        <Home>home</Home>
        <About>about</About>
        <Button5>
          <ButtonOverlay onClick={() => props.history.goBack()}>
            <Contact>contact</Contact>
          </ButtonOverlay>
        </Button5>
        <RectStack>
          <Rect></Rect>
          <Login>Login</Login>
        </RectStack>
      </HomeRow>
      <MentMatchStack>
        <MentMatch>ment match</MentMatch>
        <SignUp3>match with like-minded people</SignUp3>
        <O10>o</O10>
      </MentMatchStack>
      <Button9StackStackRow>
        <Button9StackStack>
          <Button9Stack>
            <Button9>
              <ButtonOverlay onClick={() => props.history.goBack()}>
                <Link to="/Untitled1">
                  <Button4>
                    <ButtonOverlay>
                      <Group2>
                        <Mentee1>mentee</Mentee1>
                      </Group2>
                    </ButtonOverlay>
                  </Button4>
                </Link>
              </ButtonOverlay>
            </Button9>
            <Rect2></Rect2>
          </Button9Stack>
          <SignUp1>receive guidance from expert mentors</SignUp1>
        </Button9StackStack>
        <SignUp>sign up</SignUp>
        <LoremIpsumStackStack>
          <LoremIpsumStack>
            <LoremIpsum></LoremIpsum>
            <Button7>
              <ButtonOverlay onClick={() => props.history.goBack()}>
                <Link to="/Untitled1">
                  <Button8>
                    <ButtonOverlay>
                      <Group7>
                        <Mentor>mentor</Mentor>
                      </Group7>
                    </ButtonOverlay>
                  </Button8>
                </Link>
              </ButtonOverlay>
            </Button7>
            <Rect3></Rect3>
          </LoremIpsumStack>
          <SignUp2>provide guidance to amateur mentees</SignUp2>
        </LoremIpsumStackStack>
      </Button9StackStackRow>
    </Image>
  );
}

const Image = styled.img`
  display: flex;
  height: 853px;
  width: 1366px;
  flex-direction: column;
  margin-top: -43px;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const Home = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 35px;
  margin-top: 5px;
`;

const About = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 35px;
  margin-left: 74px;
  margin-top: 5px;
`;

const Button5 = styled.div`
  width: 118px;
  height: 42px;
  flex-direction: column;
  display: flex;
  margin-left: 70px;
  margin-top: 5px;
  border: none;
`;

const Contact = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 35px;
`;

const Rect = styled.div`
  top: 0px;
  left: 0px;
  width: 163px;
  height: 65px;
  position: absolute;
  background-color: rgba(15,15, 15,0);
  border-width: 5px;
  border-color: rgba(123,203,248,1);
  border-radius: 50px;
  border-style: solid;
`;

const Login = styled.span`
  font-family: Roboto;
  top: 9px;
  left: 31px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: rgba(255,255,255,1);
  height: 74px;
  width: 122px;
  font-size: 40px;
`;

const RectStack = styled.div`
  width: 163px;
  height: 83px;
  margin-left: 514px;
  position: relative;
`;

const HomeRow = styled.div`
  height: 83px;
  flex-direction: row;
  display: flex;
  margin-top: 112px;
  margin-left: 114px;
  margin-right: 136px;
`;

const MentMatch = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: rgba(255,255,255,1);
  font-size: 132px;
`;

const SignUp3 = styled.span`
  font-family: Oswald;
  top: 139px;
  left: 206px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: rgba(255,255,255,1);
  font-size: 30px;
`;

const O10 = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 317px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: rgba(18,225,185,1);
  font-size: 132px;
`;

const MentMatchStack = styled.div`
  width: 775px;
  height: 184px;
  margin-top: 74px;
  margin-left: 309px;
  position: relative;
`;

const Button9 = styled.div`
  top: 25px;
  left: 73px;
  width: 288px;
  height: 102px;
  position: absolute;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Button4 = styled.div`
  width: 288px;
  height: 102px;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Group2 = styled.div`
  width: 288px;
  height: 102px;
  flex-direction: column;
  display: flex;
`;

const Mentee1 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(255,254,254,1);
  font-size: 85px;
`;

const Rect2 = styled.div`
  top: 0px;
  left: 0px;
  width: 421px;
  height: 153px;
  position: absolute;
  border-width: 5px;
  border-color: rgba(123,203,248,1);
  border-radius: 50px;
  border-style: solid;
`;

const Button9Stack = styled.div`
  top: 0px;
  left: 0px;
  width: 421px;
  height: 153px;
  position: absolute;
`;

const SignUp1 = styled.span`
  font-family: Oswald;
  top: 151px;
  left: 4px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: rgba(255,255,255,1);
  font-size: 30px;
`;

const Button9StackStack = styled.div`
  width: 421px;
  height: 196px;
  position: relative;
`;

const SignUp = styled.span`
  font-family: Oswald;
  font-style: normal;
  font-weight: 700;
  color: rgba(252,250,250,1);
  font-size: 40px;
  margin-left: 40px;
  margin-top: 52px;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  top: 63px;
  left: 248px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
`;

const Button7 = styled.div`
  top: 23px;
  left: 63px;
  width: 288px;
  height: 102px;
  position: absolute;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Button8 = styled.div`
  width: 288px;
  height: 102px;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Group7 = styled.div`
  width: 288px;
  height: 102px;
  flex-direction: column;
  display: flex;
`;

const Mentor = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(255,254,254,1);
  font-size: 85px;
`;

const Rect3 = styled.div`
  top: 0px;
  left: 0px;
  width: 421px;
  height: 153px;
  position: absolute;
  border-width: 5px;
  border-color: rgba(123,203,248,1);
  border-radius: 50px;
  border-style: solid;
`;

const LoremIpsumStack = styled.div`
  top: 0px;
  left: 0px;
  width: 421px;
  height: 153px;
  position: absolute;
`;

const SignUp2 = styled.span`
  font-family: Oswald;
  top: 149px;
  left: 6px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: rgba(255,255,255,1);
  font-size: 30px;
`;

const LoremIpsumStackStack = styled.div`
  width: 421px;
  height: 194px;
  margin-left: 33px;
  margin-top: 2px;
  position: relative;
`;

const Button9StackStackRow = styled.div`
  height: 196px;
  flex-direction: row;
  display: flex;
  margin-top: 98px;
  margin-left: 154px;
  margin-right: 193px;
`;

export default Homepage;
