import { useContext, useState } from "react";
import { AuthContext } from "src/context/AuthProvider";

import { Container, MainContainer, SideSearch, TabContainer } from "./style";
import { Navigate } from "react-router-dom";

const ENTRY_TAB = "entry";
const UNVERIFIED_TAB = "unverified";

export const AdminDashboard = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState(ENTRY_TAB);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "entry":
        return <EntryExitLog />;
      case "unverified":
        return <UnverifiedLog />;
      default:
        return <EntryExitLog />;
    }
  };

  return (
    <>
      {isAuthenticated ? (
        <Container style={{ backgroundColor: "white" }}>
          <SideSearch>
            <TabContainer onClick={() => handleTabClick(ENTRY_TAB)}>
              <p style={{ color: "#fff" }}>Entry/Exit Log</p>
            </TabContainer>
            <TabContainer onClick={() => handleTabClick(UNVERIFIED_TAB)}>
              <p style={{ color: "#fff" }}>Unverified Entry Log</p>
            </TabContainer>
          </SideSearch>
          <MainContainer>{renderTabContent()}</MainContainer>
        </Container>
      ) : (
        <Navigate to="/signin" />
      )}
    </>
  );
};

const EntryExitLog = () => {
  // render entry/exit log content here
  return <div>Entry/Exit Log</div>;
};

const UnverifiedLog = () => {
  // render unverified entry log content here
  return <div>Unverified Entry Log</div>;
};
