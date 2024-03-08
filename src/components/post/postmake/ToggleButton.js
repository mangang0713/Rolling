import styled from 'styled-components';
import { Secondary } from '../../../styles/ButtonStyle';
import { bold16, regular16 } from '../../../styles/fontStyle';

function ToggleButton({ state, handler, text1, text2 }) {
  return state ? (
    <SelectToggle onClick={handler}>
      <OnButton disabled>{text1}</OnButton>
      <OffButton>{text2}</OffButton>
    </SelectToggle>
  ) : (
    <SelectToggle onClick={handler}>
      <OffButton>{text1}</OffButton>
      <OnButton disabled>{text2}</OnButton>
    </SelectToggle>
  );
}

const SelectToggle = styled.div`
  display: inline-flex;
  align-items: flex-start;
  margin-top: 24px;
`;

const BtnCommon = styled(Secondary)`
  display: flex;
  width: 122px;
  height: 40px;
  padding: 7px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const OnButton = styled(BtnCommon)`
  border-radius: 6px;
  border: 2px solid var(--purple600);
  background: var(--white, #fff);

  color: var(--purple700);
  text-align: center;
  ${bold16}
  cursor: default;
`;

const OffButton = styled(BtnCommon)`
  border-radius: 6px;
  background: var(--gray100);

  color: var(--gray900);
  text-align: center;
  ${regular16}
`;

export default ToggleButton;
