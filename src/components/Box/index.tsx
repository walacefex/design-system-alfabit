import classNames from 'classnames';
import React from 'react'

export type BoxProps = {
  rounded?: boolean;
  border?: boolean;
  filledBackground?: boolean;
  type?: 'primary' | 'secondary' | 'dark' | 'alert' | 'success' | 'error';
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>

const boxClassMap = {
  primary: "bg-primary",
  secondary: "bg-tertiary",
  dark: "bg-dark",
  alert: "bg-alert",
  success: "bg-success",
  error: "bg-error",
}

const Box = ({
    rounded=false, 
    border=false, 
    filledBackground=false, 
    type='primary',
    children,
    className,
    ...rest
}:BoxProps) => {
  const classes = classNames({
    'rounded-md': rounded,
    'border border-gray-100': border,
    'bg-dark': filledBackground,
    [boxClassMap[type]]: type,
  })
  return (
    <div className={classes} {...rest}>{children}</div>
  )
}

export default Box