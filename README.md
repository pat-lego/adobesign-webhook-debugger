# Adobe Sign Webhook Debugger

An Express server to debug Adobe Sign webhooks

## Setup

1. Install ngrok locally on your laptop (i.e. https://ngrok.com/download)
2. Make sure you have node installed (i.e. https://nodejs.org/en/download/)
3. In the root of the project run `npm install`
4. In the root of the project run `node index.js`
    - Now you have a server that is accessible at http://localhost:3000
5. Execute `ngrok http 3000`
    - Locate the public facing URL from the command result
6. Create an Adobe Sign Webhook with the resulting ngrok URL (i.e. https://helpx.adobe.com/sign/using/adobe-sign-webhooks-api.html)

## Known Issues

If the payload of the webhook becomes to large (i.e. too many notification parameters being sent) then the debugging utility will report the following errors `PayloadTooLargeError: request entity too large`. 

**Note:** I limit my requests to only include the `Agreement Info` Notification Parameters.

## Contributor

- [Patrique Legault](https://github.com/pat-lego)

