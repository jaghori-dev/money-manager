import { House, CirclePlus, CircleDollarSign } from "lucide-react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();
  const currentPath = router.pathname;

  const navItems = [
    {
      path: "/",
      label: "Home",
      icon: House,
      size: 25,
    },
    {
      path: "/",
      label: "Add",
      icon: CirclePlus,
      size: 25,
    },
    {
      path: "/",
      label: "Change",
      icon: CircleDollarSign,
      size: 25,
    },
  ];
  return (
    <Wrapper>
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <StyledLink
            key={item.path}
            href={item.path}
            active={currentPath === item.path}
          >
            <Icon size={item.size} />
          </StyledLink>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 70vw;
  max-width: 600px;
  display: flex;
  justify-content: space-around;
  gap: 30px;
  padding: 14px 28px;
  width: 2fr;
  background: var(--nav-bg-color);
  backdrop-filter: blur(20px);
  border-radius: 40px;
  border: 1px solid var(--nav-border-color);
  box-shadow: 0 10px 30px var(--loading-bg-color);
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  transition: 0.3s;
  color: ${(props) =>
    props.$active ? "var(--main-color)" : "var(--nav-icons-color)"};
  &:hover {
    color: var(--main-color);
  }
`;
