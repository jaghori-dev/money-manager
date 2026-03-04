import styled from "styled-components";
import { Container } from "../index";
import ToggleTheme from "@/components/ToggleTheme";
import LoginButton from "@/components/LoginButton";
import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session } = useSession();

  return (
    <Container>
      <Title>Profile</Title>
      {session?.user && (
        <UserInfoCard>
          <UserInfoSection>
            <InfoLabel>Name:</InfoLabel>
            <InfoValue>{session.user.name || "N/A"}</InfoValue>
          </UserInfoSection>
          <UserInfoSection>
            <InfoLabel>Email:</InfoLabel>
            <InfoValue>{session.user.email || "N/A"}</InfoValue>
          </UserInfoSection>
        </UserInfoCard>
      )}
      <ProfileCard>
        <SettingsSection>
          <SettingsLabel>Setting Theme:</SettingsLabel>
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

const UserInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: var(--card);
  padding: 20px;
  border-radius: var(--radius-m);
  box-shadow: var(--shadow);
  backdrop-filter: blur(90px);
  max-width: 400px;
  margin: 0 auto 20px auto;
`;

const UserInfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  border-bottom: 1px solid var(--border);
`;

const InfoLabel = styled.span`
  font-weight: 600;
  color: var(--text);
  font-size: 14px;
`;

const InfoValue = styled.span`
  color: var(--text);
  font-size: 14px;
  opacity: 0.8;
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
