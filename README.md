This is a template to develop and release a react component. This also includes github action for releasing the npm module.

## Step to release the npm module
1. Create a new account in npm.
   https://www.npmjs.com/signup
2. Create a new access token and select publish as a type
   https://www.npmjs.com/settings/upnotes/tokens
3. Add secret to your repo or organization as NPM_TOKEN
   https://github.com/organizations/upnotes-io/settings/secrets/actions/new
4. Create a new tag and use that tag to create the release. Creating a new release will trigger the [workflow](https://github.com/upnotes-io/react-component-template/blob/main/.github/workflows/npm-publish.yml). 

