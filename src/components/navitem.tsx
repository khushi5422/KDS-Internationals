import Link from "next/link";
interface NavItemProps {
    text: string;
    href: string;
    active: boolean; 
  }
const NavItem = ({ text , href, active }: NavItemProps) => {
  return (
    <Link href={href}>
      <div
        className={`nav__item ${
          active ? "active" : ""
        }`}
      >
        {text}
      </div>
    </Link>
  );
};

export default NavItem;