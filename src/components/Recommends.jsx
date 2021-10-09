import { Container, Content, Wrap } from "./Common";
import { Link } from "react-router-dom";

const Recommends = () => {
  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        <Wrap>
          <Link to="">
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/1743/1041743-h-663df12087d4" alt="" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="">
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/1743/1041743-h-663df12087d4" alt="" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="">
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/1743/1041743-h-663df12087d4" alt="" />
          </Link>
        </Wrap>
      </Content>
    </Container>
  );
};

export default Recommends;
