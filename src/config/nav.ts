export interface NavItem {
  label: string;
  pathname: string;
}

const list: NavItem[] = [
  { pathname: "/", label: "Home" },
  { pathname: "/blog", label: "Blog" },
  { pathname: "/about", label: "About" },
];

export default list;
