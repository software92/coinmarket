import styled from 'styled-components';

const LoadComponent = styled.span`
  display: flex;
  justify-content: center;
  font-size: 40px;
`;

const Loader = () => <LoadComponent>Loading...</LoadComponent>;

export default Loader;
