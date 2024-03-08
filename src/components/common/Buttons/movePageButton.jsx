import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Primary56 } from '../../../styles/ButtonStyle';

function MovePageButton({ moveLink, btnName }) {
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate(moveLink);
  };

  return <Button onClick={handleClickButton}>{btnName}</Button>;
}
const Button = styled(Primary56)`
  width: 28rem;
  margin: 2.4rem 2.4rem;
  cursor: pointer;

  @media (max-width: 1248px) {
    width: 100%;
  }
`;
export default MovePageButton;