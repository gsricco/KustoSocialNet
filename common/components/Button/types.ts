import {ButtonHTMLAttributes} from "react";
import {ThemeButton} from "@/common/enums/themeButton";

export type ButtonPropsType = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string
  theme: ThemeButton
  disabled?: boolean
  width?: string
}

export type StyledButtonPropsType = {
  width?: string
  height?: string
  type?: 'button' | 'reset' | 'submit'
  theme: ThemeButton
  handleButtonType: HandleButtonType
}

type HandleButtonType = {
  'max-width'?: string
  'max-height'?: string
  color?: string
  padding?: string
  border?: string
  background?: string
  outline?: string
  '&:hover'?: HoverActiveDisableType
  '&:active'?: HoverActiveDisableType
  '&.disabled'?: HoverActiveDisableType
}

type HoverActiveDisableType = {
  color?: string
  border?: string
}