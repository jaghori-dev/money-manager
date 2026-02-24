import {
  House,
  CirclePlus,
  ChartLine,
  User,
  ArrowLeftRight,
} from "lucide-react";
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
      label: "Transactions",
      icon: ArrowLeftRight,
      size: 25,
    },
    {
      path: "/",
      label: "New Transaction",
      icon: CirclePlus,
      size: 25,
    },
    {
      path: "/",
      label: "Analytics",
      icon: ChartLine,
      size: 25,
    },
    {
      path: "/",
      label: "Profile",
      icon: User,
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
            <StyledLabel>{item.label}</StyledLabel>
          </StyledLink>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 70vw;
  max-width: 600px;
  display: flex;
  justify-content: space-around;
  gap: 30px;
  padding: 14px 28px;
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

const StyledLabel = styled.span`
  font-size: 12px;
  color: ${(props) =>
    props.$active ? "var(--main-color)" : "var(--nav-icons-color)"};
  text-align: center;
`;
