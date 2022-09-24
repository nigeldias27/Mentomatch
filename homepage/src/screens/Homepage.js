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
      <Mentomatch1Stack>
        <Mentomatch1>mentomatch</Mentomatch1>
        <SignUp3>match with like-minded people</SignUp3>
      </Mentomatch1Stack>
      <Group4StackRow>
        <Group4Stack>
          <Group4>
            <Link to="/Untitled">
              <Button1>
                <ButtonOverlay>
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
                </ButtonOverlay>
              </Button1>
            </Link>
          </Group4>
          <SignUp1>receive guidance from expert mentors</SignUp1>
        </Group4Stack>
        <SignUp>sign up</SignUp>
        <Group6Column>
          <Group6>
            <Link to="/Untitled">
              <Button2>
                <ButtonOverlay>
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
                  </LoremIpsumStack>
                </ButtonOverlay>
              </Button2>
            </Link>
          </Group6>
          <SignUp2>provide guidance to amateur mentees</SignUp2>
        </Group6Column>
      </Group4StackRow>
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
  top: 10px;
  left: 29px;
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
  height: 84px;
  margin-left: 514px;
  position: relative;
`;

const HomeRow = styled.div`
  height: 84px;
  flex-direction: row;
  display: flex;
  margin-top: 112px;
  margin-left: 114px;
  margin-right: 136px;
`;

const Mentomatch1 = styled.span`
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

const Mentomatch1Stack = styled.div`
  width: 749px;
  height: 184px;
  margin-top: 73px;
  margin-left: 309px;
  position: relative;
`;

const Group4 = styled.div`
  top: 0px;
  left: 1px;
  width: 420px;
  height: 151px;
  position: absolute;
  flex-direction: column;
  display: flex;
`;

const Button1 = styled.div`
  width: 420px;
  height: 151px;
  shadow-radius: 0px;
  border-radius: 50px;
  border-width: 5px;
  border-color: rgba(123,203,248,1);
  flex-direction: column;
  display: flex;
  border-style: solid;
  box-shadow: 3px 3px 0px  0.01px rgba(0,0,0,1) ;
`;

const Button9 = styled.div`
  width: 288px;
  height: 102px;
  flex-direction: column;
  display: flex;
  margin-top: 23px;
  margin-left: 68px;
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

const SignUp1 = styled.span`
  font-family: Oswald;
  top: 149px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: rgba(18,225,185,1);
  font-size: 30px;
`;

const Group4Stack = styled.div`
  width: 422px;
  height: 194px;
  margin-top: 2px;
  position: relative;
`;

const SignUp = styled.span`
  font-family: Oswald;
  font-style: normal;
  font-weight: 700;
  color: rgba(252,250,250,1);
  font-size: 40px;
  margin-left: 35px;
  margin-top: 52px;
`;

const Group6 = styled.div`
  width: 420px;
  height: 151px;
  flex-direction: column;
  display: flex;
`;

const Button2 = styled.div`
  width: 420px;
  height: 151px;
  shadow-radius: 0px;
  border-radius: 50px;
  border-width: 5px;
  border-color: rgba(123,203,248,1);
  flex-direction: column;
  display: flex;
  border-style: solid;
  box-shadow: 3px 3px 0px  0.01px rgba(0,0,0,1) ;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  top: 40px;
  left: 185px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
`;

const Button7 = styled.div`
  top: 0px;
  left: 0px;
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

const LoremIpsumStack = styled.div`
  width: 288px;
  height: 102px;
  margin-top: 25px;
  margin-left: 66px;
  position: relative;
`;

const SignUp2 = styled.span`
  font-family: Oswald;
  font-style: normal;
  font-weight: 700;
  color: rgba(18,225,185,1);
  font-size: 30px;
  margin-left: 3px;
`;

const Group6Column = styled.div`
  width: 421px;
  flex-direction: column;
  display: flex;
  margin-left: 30px;
`;

const Group4StackRow = styled.div`
  height: 196px;
  flex-direction: row;
  display: flex;
  margin-top: 98px;
  margin-left: 158px;
  margin-right: 196px;
`;

export default Homepage;
