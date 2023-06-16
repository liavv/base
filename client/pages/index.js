import styled from 'styled-components';
import Main from './components/Main';
const Index = (props)=>{
  const {data} = props;
  const list = data.data.data;

  return (
  <Wrapper>
    <Main list={list}></Main>
  </Wrapper>);
};

Index.getInitialProps = async (ctx) => {
  return {data: ctx.res.data}
}
const Wrapper = styled.div``;

export default Index;