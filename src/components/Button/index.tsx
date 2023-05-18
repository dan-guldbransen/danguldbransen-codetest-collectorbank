import Button from '@mui/material/Button';
import styled from 'styled-components';

const SubmitButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.buttonGreen};
  border: none;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  display: inline-block;
  font-size: ${(props) => props.theme.fontSizes.s};
  font-weight: 600;
  line-height: 1.5;
  margin: 0;
  padding: 8px 12px;
  text-align: center;
  text-decoration: none;
  -webkit-user-select: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  transition: all 0.3s ease-in-out;
  &:hover, focus, active {
    background-color: ${(props) => props.theme.colors.buttonGreenHover};
  }
}`;

const ApplyButton: React.FC = () => {
  return <SubmitButton>Till ansökan</SubmitButton>;
};
export default ApplyButton;
