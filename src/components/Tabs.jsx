import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Tabscomponent1 from "./Tabscomponent1";
import Tabscomponent2 from "./Tabscomponent2";


function Table(){

return(
    <div className="container panel">
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="Trending" title="Trending">
    <Tabscomponent1 />
  </Tab>
  <Tab eventKey="New" title="New">
    <Tabscomponent2 />
  </Tab>
</Tabs>
  </div>);
 }
  
 export default Table;