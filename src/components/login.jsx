import styled from "styled-components";

const Login = () => (
  <Container>
    <Content>
      <CTA>
        <LogoOne src="/images/cta-logo-one.svg" alt="" />
        <SignUpButton>Get All There</SignUpButton>
        <Description>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </Description>
        <LogoOne src="/images/cta-logo-two.png" alt="" />
      </CTA>
      <BgImage />
    </Content>
  </Container>
);

export default Login;

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding : 80px 40px;
  flex-direction: column;
`;

const LogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  margin-left : auto;
  margin-right : auto;
  display: block;
  width: 100%;
`;

const SignUpButton = styled.button`
  font-weight: bold;
  padding: 16.5px 0px;
  color: #f9f9f9;
  background-color: #0063e5;
  border: 1px solid transparent;
  border-radius: 4px;
  font-size: 18px;
  letter-spacing: 1.5px;
  width: 100%;
  margin-bottom : 2vw;
  text-transform: uppercase;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
  margin-bottom : 2vw;
  padding : 1em 2em;
`;

