export type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className }: ButtonProps) => {
  return(
    <button className={`
    bg-blue-500 text-white px-4 py-2 rounded-md
      ${className}
    `}>
      {children}
    </button>
  )
}

export default Button;