import styled from "styled-components";
import { Container } from "../index";
import ToggleTheme from "@/components/ToggleTheme";
import LoginButton from "@/components/LoginButton";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import DeleteConfirmation from "@/components/DeleteConfirmation";
import { Trash2 } from "lucide-react";

export default function ProfilePage({ transactions }) {
  const { data: session } = useSession();
  const [showConfirm, setShowConfirm] = useState(false);

  async function handleDeleteProfile() {
    try {
      const response = await fetch("/api/user/delete", {
        method: "DELETE",
      });

      if (response.ok) {
        await signOut({ callbackUrl: "/login" });
      } else {
        alert("Failed to delete profile");
      }
    } catch (error) {
      console.error("Error deleting profile:", error);
      alert("Error deleting profile");
    }
  }

  function toggleDeleteConfirm() {
    setShowConfirm((prev) => !prev);
  }

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
          <UserInfoSection>
            <InfoLabel>Total Balance:</InfoLabel>
            <InfoValue>
              {((transactions ?? []).reduce((sum, t) => sum + t.amount, 0)).toFixed(2)} €
            </InfoValue>
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
        <ButtonsRow>
          <DeleteButtonWrapper>
            <DeleteButton onClick={toggleDeleteConfirm}>
              <DeleteButtonContent>
                <Trash2 size={16} />
                Delete Profile
              </DeleteButtonContent>
            </DeleteButton>
            {showConfirm && (
              <DeleteConfirmation
                onCancel={toggleDeleteConfirm}
                onConfirm={handleDeleteProfile}
              />
            )}
          </DeleteButtonWrapper>
          <LoginButton />
        </ButtonsRow>
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

const ButtonsRow = styled.div`
  display: flex;
  gap: 15px;
  justify-content: space-between;
`;

const DeleteButtonWrapper = styled.div`
  position: relative;
  flex: 1;
`;

const DeleteButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const DeleteButton = styled.button`
  width: 100% !important;
  padding: 0.6rem 1.2rem;
  border-radius: var(--radius-s);
  border: 1px solid var(--error-button-color);
  cursor: pointer;
  background: transparent;
  color: var(--error-button-color);
  font-weight: 600;
  font-size: 14px;
  backdrop-filter: blur(10px);
  transition: 0.2s ease;

  &:hover {
    background: var(--error-button-color);
    color: var(--text);
  }
`;
