import { House, CirclePlus } from "lucide-react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const navItems = [
  {
    path: "/",
    label: "Home",
    icon: House,
    size: 25,
  },
  {
    path: "/add",
    label: "Add",
    icon: CirclePlus,
    size: 25,
  },
];

export default function Navigation() {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <Wrapper>
      {navItems.map((item) => {
        return (
          <StyledLink
            key={item.path}
            href={item.path}
            active={currentPath === item.path}
          >
            <item.icon size={item.size} />
            <StyledLabel>{item.label}</StyledLabel>
          </StyledLink>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 30px;
  padding: 7px 0;
  background: var(--background);
  backdrop-filter: blur(20px);
  border-radius: var(--radius-s);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  text-decoration: none;
  transition: 0.3s;
  color: ${(props) =>
    props.active ? "var(--income-color)" : "var(--text)"};
  &:hover {
    color: var(--text);
  }
`;

const StyledLabel = styled.span`
  font-size: 12px;
  text-align: center;
`;
