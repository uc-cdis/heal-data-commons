const hostname = typeof window !== 'undefined' ? `${window.location.protocol}//${window.location.hostname}/` : 'http://localhost/';
const components = {
  appName:"VA Data Commons",
  logoAltText:"VA logo and Seal, U.S. Department of Veterans Affairs Data Commons",
  index:{
    introduction:{
      heading:"VA Data Commons",
      text:"The VA Data Commons supports the research and analysis of US military Veteran medical and genomic data and aims to accelerate scientific discovery and development of therapies, diagnostic tests, and other technologies for improving the lives of Veterans and beyond. The data commons features GWAS analyses on harmonized data."
    },
    buttons:[

    ],
    customHomepageChartConfig:[

    ],
    homepageChartNodes:[

    ]
  },
  navigation:{
    items:[
      {
        icon:"workspace",
        link:"/workspace",
        color:"#a2a2a2",
        name:"Workspace"
      },
      {
        icon:"analysis",
        link:"/analysis",
        color:"#a2a2a2",
        name:"Apps"
      },
      {
        icon:"profile",
        link:"/identity",
        color:"#a2a2a2",
        name:"Profile"
      }
    ]
  },
  topBar:{
    items:[
      {
        link:"https://qa-mickey.planx-pla.net/dashboard/Public/documentation/index.html",
        name:"VADC Documentation"
      },
      {
        link:"support@gen3.org",
        name:"Email Support"
      }
    ],
    useProfileDropdown:false
  },
  login:{
    title:"U.S. Department of Veterans Affairs Data Commons",
    subTitle:"search, compare, and analyze data",
    text:"The VA Data Commons supports the research and analysis of US military Veteran medical and genomic data and aims to accelerate scientific discovery and development of therapies, diagnostic tests, and other technologies for improving the lives of Veterans and beyond.",
    contact:"If you have any questions about access or the registration process, please contact ",
    email:"support@gen3.org"
  },
  systemUse:{
    systemUseTitle:"VA systems are intended for Academic and Institutional Users",
    systemUseText:[
      "VA systems are intended to be used by authorized VA network users for viewing and retrieving information; except as otherwise authorized for official business and limited personal use under VA policy. Information from this system resides on and transmits through computer systems and networks funded by VA. Access or use constitutes understanding and acceptance that there is no reasonable expectation of privacy in the use of Government networks or systems. Access or use of this system constitutes user understanding and acceptance of these terms and constitutes unconditional consent to review and action includes but is not limited to: monitoring; recording; copying; auditing; inspecting; investigating; restricting access; blocking; tracking; disclosing to authorized personnel; or other authorized actions by authorized VA and law enforcement personnel. Unauthorized user attempts or acts to (1) access; upload; download; change; or delete information on this system; (2) modify this system; (3) deny access to this system; (4) accrue resources for unauthorized use; or (5) otherwise misuse this system are strictly prohibited. Such attempts or acts are subject to action that result in criminal; civil; or administrative penalties."
    ],
    displayUseMsg:"cookie",
    expireUseMsgDays:365
  },
  footerLogos:[
    {
      src:"/src/img/gen3.png",
      href:"https://ctds.uchicago.edu/gen3",
      alt:"Gen3 Data Commons"
    },
    {
      src:"/src/img/createdby.png",
      href:"https://ctds.uchicago.edu/",
      alt:"Center for Translational Data Science at the University of Chicago"
    },
    {
      src:"/custom/sponsors/gitops-sponsors/OCC.png",
      href:"https://occ-data.org/",
      alt:"Open Commons Consortium"
    }
  ],
  certs:{
    security_quiz:{
      title:"BloodPAC User agreement",
      description:"The agreement on what you can and need to do in a Commons.",
      questions:[
        {
          name:"Things you can do after registration",
          question:"As a registered user, I can do the following things without any problem. Is it true or not:",
          options:[
            "Browse public Project",
            "Upload file",
            "Download file",
            "Invite people"
          ],
          answer:0,
          hint:"Some information about this question"
        },
        {
          name:"Things you need to do to become the registered user",
          question:"In order to be a register user, I must do the following things otherwise:",
          options:[
            "Agree the user agreement",
            "Accept a consent",
            "None of them",
            "Both of them"
          ],
          answer:2,
          hint:"Some information about this question"
        },
        {
          name:"Things you can do with data",
          question:"How can I share data with other people according to the policy of the commons",
          options:[
            "I can not share data",
            "I can only share data with BPA memebers",
            "I can share data with family",
            "I can share data with my wife"
          ],
          answer:1,
          hint:"Some information about this question"
        }
      ]
    }
  },
  privacyPolicy:{
    text:"",
    routeHref:"",
    footerHref:"",
    file:""
  },
  charts:{
    boardPluralNames:[

    ],
    chartNames:[

    ],
    indexChartNames:[

    ],
    detailPluralNames:[

    ]
  }
};
const config = {
  "gaTrackingId": "UA-119127212-3",
  "graphql": {
    "boardCounts": [],
    "chartCounts": [],
    "projectDetails": "boardCounts",
    "chartNodesExcludeFiles": true
  },
  "requiredCerts": [],
  "featureFlags": {
    "explorer": true,
    "analysis": true,
    "workspaceTokenServiceRefreshTokenAtLogin": true,
    "legacyVADCDataDictionary": true
  },
  "dataExplorerConfig": {
    "charts": {
      "project": {
        "chartType": "count",
        "title": "Projects"
      },
      "study": {
        "chartType": "count",
        "title": "Studies"
      },
      "file_type": {
        "chartType": "count",
        "title": "File Types"
      },
      "ethnicity": {
        "chartType": "stackedBar",
        "title": "Ethnicity"
      },
      "gender": {
        "chartType": "pie",
        "title": "Gender"
      },
      "race": {
        "chartType": "pie",
        "title": "Race"
      },
      "vital_status": {
        "chartType": "bar",
        "title": "Vital Status"
      }
    },
    "filters": {
      "tabs": [
        {
          "title": "Project",
          "fields": [
            "project",
            "study"
          ]
        },
        {
          "title": "Subject",
          "fields": [
            "race",
            "ethnicity",
            "gender",
            "vital_status"
          ]
        },
        {
          "title": "File",
          "fields": [
            "file_type"
          ]
        }
      ]
    },
    "buttons": [
      {
        "enabled": true,
        "type": "data",
        "title": "Download All Data",
        "leftIcon": "user",
        "rightIcon": "download",
        "fileName": "data.json"
      },
      {
        "enabled": true,
        "type": "manifest",
        "title": "Download Manifest",
        "leftIcon": "datafile",
        "rightIcon": "download",
        "fileName": "manifest.json"
      }
    ],
    "table": {
      "enabled": true,
      "fields": [
        "project",
        "study",
        "race",
        "ethnicity",
        "gender",
        "vital_status",
        "whatever_lab_result_value",
        "file_count",
        "file_type",
        "file_format"
      ]
    }
  },
  "useArboristUI": false,
  "showArboristAuthzOnProfile": false,
  "showFenceAuthzOnProfile": false,
  "componentToResourceMapping": {},
  "argoTemplate": "gwas-template-database-version",
  "analysisTools": [
    {
      "title": "OHDSI Atlas",
      "description": "Use this App for cohort creation. These will be automatically populated in the Gen3 GWAS App",
      "applicationUrl": "https://atlas.qa-mickey.planx-pla.net",
      "image": "/custom/sponsors/gitops-sponsors/atlas-logo.png",
      "needsTeamProject": true
    },
    {
      "appId": "GWASUIApp",
      "title": "Gen3 GWAS",
      "description": "Use this App to perform high throughput GWAS on Million Veteran Program (MVP) data, using the University of Washington Genesis pipeline",
      "image": "/src/img/analysis-icons/gwas.svg",
      "needsTeamProject": true
    },
    {
      "appId": "GWASResults",
      "title": "GWAS Results",
      "description": "Use this App to view status & results of submitted workflows",
      "image": "/src/img/analysis-icons/gwasResults.svg",
      "needsTeamProject": true
    },
    {
      "appId": "AtlasDataDictionary",
      "dataDictionaryVersion": "new",
      "title": "MVP Data Dictionary",
      "description": "Use this App to view a tabluar representation of the MVP data dictionary",
      "image": "/src/img/analysis-icons/default-app.png",
      "needsTeamProject": false
    }
  ],
  "connectSrcCSPWhitelist": [
    "https://second-argo-bucket.s3.amazonaws.com"
  ],
  "userAccessToSite": {
    "enabled": true,
    "noAccessMessage": "You are not authorized to access this system. If you have any questions, please contact vadc@lists.uchicago.edu"
  }
};
const requiredCerts = [];
module.exports = { components, config, requiredCerts };
