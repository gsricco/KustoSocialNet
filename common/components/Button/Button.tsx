import {FC} from 'react';
import {useButtonColorType} from "@/common/hooks/useButtonColorType";
import {ButtonPropsType} from "@/common/components/Button/types";
import {StyledButton} from "@/common/components/Button/StyledButton.styled";

export const Button: FC<ButtonPropsType> = ({children, theme, width, ...otherProps}) => {

  const {handleButtonType}=useButtonColorType()

  return (
    <StyledButton
      theme={theme}
      handleButtonType={handleButtonType(theme)}
      width={width}
      {...otherProps}
    >
      {children}
    </StyledButton>
  );
};
