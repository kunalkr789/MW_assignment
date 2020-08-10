import React, { Component } from "react";
import "./App.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToDo from "./components/todo";
import ToRead from "./components/toread";
import { render } from "@testing-library/react";

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <h6>ACTION ITEMS</h6>
        <Tabs>
          <TabList>
            <Tab>TO DO</Tab>
            <Tab>TO READ</Tab>
          </TabList>

          <TabPanel>
            <ToDo />
          </TabPanel>
          <TabPanel>
            <ToRead />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default App;
