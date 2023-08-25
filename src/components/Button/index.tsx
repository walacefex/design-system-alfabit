export type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className }: ButtonProps) => {
  return(
    <button className={`
      bg-primary text-white px-6 py-2 rounded-md
      ${className}
    `}>
      {children}
    </button>
  )
}

export default Button;