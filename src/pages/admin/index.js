import { useContext, useEffect, useState } from "react";
import { AuthContext } from "src/context/AuthProvider";

import { Container, MainContainer, SideSearch, TabContainer } from "./style";
import { Navigate } from "react-router-dom";

import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { API } from "aws-amplify";

const ENTRY_TAB = "entry";
const UNVERIFIED_TAB = "unverified";

export const AdminDashboard = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState(ENTRY_TAB);

  const [UserList, setUserList] = useState([]);
  const [CapacityList, setCapacityList] = useState([]);

  const [entryLog, setEntryLog] = useState([]);
  const [unverifiedLog, setUnverifiedLog] = useState([]);

  useEffect(() => {
    Promise.all([
      API.get("capacityApi", "/capacity"),
      API.get("userApi", "/user"),
    ])
      .then((res) => {
        setCapacityList(res[0]);
        setUserList(res[1]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [activeTab]);

  useEffect(() => {
    const returnList = CapacityList.map((item) => {
      const index = UserList.findIndex((user) => user.ksuId == item.id);
      if (index !== -1) {
        const {
          carMake,
          carModel,
          carYear,
          carColor,
          firstName,
          lastName,
          passType,
          ksuId,
        } = UserList[index];

        return {
          ...item,
          ksuId: ksuId,
          validPass: true,
          carMake: carMake,
          carModel: carModel,
          carYear: carYear,
          carColor: carColor,
          firstName: firstName,
          lastName: lastName,
          passType: passType,
          time: item["Time:"],
          Direction: item.Direction > 0 ? "enter" : "exit",
        };
      }

      return {
        ...item,
        validPass: false,
        time: item["Time:"],
        Direction: item.Direction > 0 ? "enter" : "exit",
        ksuId: item.id,
      };
    });

    const unverifiedList = returnList
      .filter((item) => !item.validPass)
      .map((item) => {
        return {
          ...item,
          Direction: item.Direction,
          ksuId: item.id,
        };
      });

    setEntryLog(returnList);

    setUnverifiedLog(unverifiedList);
  }, [UserList, CapacityList]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "entry":
        return <EntryExitLog entryLog={entryLog} />;
      case "unverified":
        return <UnverifiedLog unverifiedLog={unverifiedLog} />;
      default:
        return <EntryExitLog entryLog={entryLog} />;
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
          <MainContainer className="ag-theme-alpine">
            {renderTabContent()}
          </MainContainer>
        </Container>
      ) : (
        <Navigate to="/signin" />
      )}
    </>
  );
};

const EntryExitLog = ({ entryLog }) => {
  const [columnDefs] = useState([
    {
      field: "time",
      sortable: true,
      sort: "desc",
      comparator: function (date1, date2) {
        return new Date(date1) - new Date(date2);
      },
    },
    { field: "Direction" },
    { field: "validPass" },
    { field: "ksuId" },
    { field: "firstName" },
    { field: "lastName" },
    { field: "passType" },
    { field: "carMake" },
    { field: "carModel" },
    { field: "carYear" },
    { field: "carColor" },
  ]);

  return (
    <div className="ag-theme-alpine" style={{ height: "100%", width: "100%" }}>
      <AgGridReact rowData={entryLog} columnDefs={columnDefs}></AgGridReact>
    </div>
  );
};

const UnverifiedLog = ({ unverifiedLog }) => {
  const [columnDefs] = useState([
    {
      field: "time",
      sortable: true,
      sort: "desc",
      comparator: function (date1, date2) {
        return new Date(date1) - new Date(date2);
      },
    },
    { field: "Direction" },
    { field: "validPass" },
    { field: "ksuId" },
  ]);

  return (
    <div className="ag-theme-alpine" style={{ height: "100%", width: "100%" }}>
      <AgGridReact
        rowData={unverifiedLog}
        columnDefs={columnDefs}
      ></AgGridReact>
    </div>
  );
};
