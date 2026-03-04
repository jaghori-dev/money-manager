import styled from "styled-components";
import { Container } from "../index";
import ToggleTheme from "@/components/ToggleTheme";
import LoginButton from "@/components/LoginButton";

export default function ProfilePage() {
  return (
    <Container>
      <Title>Profile</Title>
      <ProfileCard>
        <SettingsSection>
          <SettingsLabel>Setting Theme: </SettingsLabel>
          <ThemeToggleWrapper>
            <ToggleTheme />
          </ThemeToggleWrapper>
        </SettingsSection>
        <SettingsSection>
          <LoginButton />
        </SettingsSection>
      </ProfileCard>
    </Container>
  );
}

const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin: auto;
  margin-bottom: 30px;
`;

const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: var(--card);
  padding: 20px;
  border-radius: var(--radius-m);
  box-shadow: var(--shadow);
  backdrop-filter: blur(90px);
  max-width: 400px;
  margin: 0 auto;
`;

const SettingsSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
`;

const SettingsLabel = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: var(--text);
`;

const ThemeToggleWrapper = styled.div`
  display: flex;
  align-items: center;
`;
