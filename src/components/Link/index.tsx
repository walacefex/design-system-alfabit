export type LinkProps = {
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Link = ({ children }: LinkProps) => {
  return <a>{children}</a>
};

export default Link;