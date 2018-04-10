console.log("App is starting");

const fs = require("fs");
const mkdirp = require("node-mkdirp");

const directories = [
  {
    data: ["About", "MissionStatement", "Administration", "PrincipalsWelcome"],
    name: "/About"
  },
  {
    data: [
      "Business",
      "Core",
      "Humanities",
      "Languages",
      "Sciences",
      "Technology",
      "TransitionYear"
    ],
    name: "/Academia"
  },
  {
    data: [
      "Sports",
      "Debating",
      "CommunityInitiatives",
      "Gaisce",
      "BoiBankProg"
    ],
    name: "/ExtraCurricular"
  },
  {
    data: ["EnrolmentPolicy", "EnrolmentForm"],
    name: "/Enrolment"
  },
  {
    data: ["RunForLife"],
    name: "/RunForLife"
  },
  {
    data: ["StudentCouncil", "GuidanceServices", "StudyTips"],
    name: "/StudentServices"
  },
  {
    data: [
      "ParentsAssoc",
      "BookListAndUniform",
      "DisciplinaryProcedureExp",
      "DisciplinaryProcedureSusp",
      "CodeOfBehaviour",
      "PolicyProcedure"
    ],
    name: "Parents"
  },
  {
    data: ["Gallery"],
    name: "/Gallery"
  },
  {
    data: ["Contact"],
    name: "/Contact"
  }
];

renderBoiler = fileName => {
  return `
import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import Page from "../components/Page/Page";

class ${fileName} extends Component {
render() {
    return (
    <div>
        <Navbar active={${fileName}}/>
        <Page title={${fileName}} current={${fileName}}>
        <h1>Content here please</h1>
        </Page>
    </div>
    );
}
}
export default ${fileName};
            `;
};

mkdirpCallback = i => {
  let files = directories[i].data;

  for (let z = 0; z < files.length; z++) {
    let jsx = `
import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class ${files[z]} extends Component {
render() {
    return (
    <div>
        <Navbar active={'${files[z]}'}/>
        <Page title={'${files[z]}'} current={'${files[z]}'}>
        <h1>Content here please</h1>
        </Page>
    </div>
    );
}
}
export default ${files[z]};
            `;
    console.log(";akdf;sadj");
    fs.writeFile(`./${directories[i].name}/${files[z]}.js`, jsx, function(err) {
      if (err) {
        console.log("ERROR");
      }
    });
  }
};

for (let i = 0; i < directories.length; i++) {
  mkdirp(directories[i].name, null, mkdirpCallback(i));
}
