import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteRecipient } from '../../../api/DeleteApi';

function DeleteRecipientButton() {
  const navigate = useNavigate();
  const { id: recipientID } = useParams();

  const handleButtonClick = async () => {
    await deleteRecipient(recipientID);
    navigate('/list');
  };

  return <Button onClick={handleButtonClick}>롤링페이퍼 삭제하기</Button>;
}

const Button = styled.button`
  display: flex;
  padding: 14px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: var(--${({ disabled }) => (disabled ? 'gray300' : 'purple600')});

  color: var(--white);
  text-align: center;
  /* Font/18 Bold */
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 155.556% */
  letter-spacing: -0.18px;

  cursor: ${({ disabled }) => disabled && 'not-allowed'};

  @media (max-width: 768px) {
    width: 320px;
  }
`;

export default DeleteRecipientButton;