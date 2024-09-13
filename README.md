

This is the NextJS application for the HEAL Data Commons.


## Getting Started
The HEAL Data Commons develop quick startup:

* create a clone of [HEAL Data Commons](https://github.com/uc-cdis/heal-data-commons)

* Configure the commons by editing the configuration files in the ```config```

* Add your pages and content

* Deploy via helm charts or Docker.

Changes to the Gen3 Data Commons Application can be pulled from the Common Frontend Repository. You need configure git to pull from the Common Frontend Repository.
```bash
git remote add upstream https://github.com/uc-cdis/heal-data-commons.git
```
or
```bash
git remote add upstream git@github.com:uc-cdis/heal-data-commons.git
```

changes to ```main``` can be pulled from the Common Frontend Repository by running:
```bash
git pull upstream main
```

Please see [Styling and Theming](https://github.com/uc-cdis/gen3-frontend-framework/blob/develop/docs/Configuration/Styling%20and%20Theming.md) and [Local Development with Helm Charts](https://github.com/uc-cdis/gen3-frontend-framework/blob/develop/docs/Local%20Development/Using%20Helm%20Charts/Local%20Development%20with%20Helm%20Charts.md)
for more information on setting up and configuring the Gen3 Data Commons Application.
This documentation is currently less complete than we would like, but we will be adding to it as development progresses.

## Installation

The minimum node version is set to v20.71.0.
Node can be downloaded from the official Node.js site. You may also consider using a [Node version manager](https://docs.npmjs.com/cli/v7/configuring-npm/install#using-a-node-version-manager-to-install-nodejs-and-npm).
Your version of Node may not ship with npm v10. To install it, run:

```bash
npm install npm@10.8.2 -g
```

Note: if you see this error:
```
npm ERR! code ENOWORKSPACES
npm ERR! This command does not support workspaces.
```
you can run ```npx next telemetry disable```

Alternatively, you can use `nvm` to install the correct version of npm:
```bash
nvm install 20.17.0
```

### Install Dependencies

From the root of the project, install dependencies by running:

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Docker

You build a Docker image by:

```bash
docker build .
```

## Configuration

All the configuration files are located in ```config/heal```. As HEAL is currently only used for the landing page the
relevant configuration files are:

* navigation.json
* footer.json
* banner

## Custom Pages

See ```src/pages/SamplePage``` for an example of adding a new page to the HEAL commons.
