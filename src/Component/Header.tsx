import { ReactNode } from "react";

interface HeaderProp {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
}

export default function Header(prop: HeaderProp) {
  return (
    <header>
      <img src={prop.image.src} alt={prop.image.alt} />
      {prop.children}
    </header>
  );
}
