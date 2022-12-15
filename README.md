# Master Thesis


# What is it?
A browser extension implant that turns victim Chrome browsers into fully-functional HTTP proxies. By using the proxies this tool creates you can browse the web authenticated as your victim for all of their websites.

# Ports & Listening Interfaces

- `127.0.0.1:8080`: HTTP proxy server (using one of the credentials in the admin panel, you can auth to a specific victim's Chrome browser via this HTTP proxy server). You also need to install the generated CA available via the admin panel before using this.
- `127.0.0.1:4343`: Websocket server, used for communicating with victim Chrome instances to transfer HTTP requests for proxying and sending commands.
- `127.0.0.1:8118`: Admin web panel for viewing victim Chrome instances and getting HTTP proxy credentials.


# Requirements

* [`docker`](https://docs.docker.com/get-docker/) and [`docker-compose`](https://docs.docker.com/compose/install/)
* Chrome web browser

# Installation & Setup

## Setting Up the Backend

The backend is entirely dockerized and can be setup by running the following commands:

```
cd masterthesis/
# Start up redis and Postgres containers in the background
docker-compose up -d redis db
# Start the CursedChrome backend
docker-compose up cursedchrome
```

Once you start up the backend you'll see an admin username and password printed to the console. You can log into the admin panel at `http://localhost:8118` using these credentials (you will be prompted to change your password upon logging in since the one printed to the console is likely logged). 

## Installing the CursedChrome CA for Proxying HTTPS

Once you have the backend setup, log in to the admin panel at `http://localhost:8118` (see above) and click the `Download HTTPS Proxy CA Certificate` button. This will download the generated CA file which is required in order to proxy HTTPS requests.

You will need to install this CA into your root store, the following are instructions for various OS/browsers:

## Setting Up the Example Chrome Extension Implant

To install the example chrome extension implant, do the following:

* Open up a Chrome web browser and navigate to `chrome://extensions`.
* Click the toggle in the top-right corner of the page labeled `Developer mode` to enable it.
* Click the `Load unpacked` button in the top-left corner of the page.
* Open the `extension/` folder inside of this repo folder.
* Once you've done so, the extension will be installed.

*Note:* You can debug the implant by clicking on the `background page` link for the text `Inspect views background page` under the `CursedChrome Implant` extension.

After you've install the extension it will show up on the admin control panel at `http://localhost:8118`.

## Attributions

* The [AnyProxy source code](https://github.com/alibaba/anyproxy) was heavily modified and used for part of this project.
