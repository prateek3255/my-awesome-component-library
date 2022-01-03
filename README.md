This is a template to develop and release a react component. This also includes github action for releasing the npm module.

Storybook 
https://upnotes-io.github.io/my-awesome-component-library/

![image](https://user-images.githubusercontent.com/5221843/147892813-146197d8-9385-4ddf-a928-5eb7e55a051a.png)



## Step to release the npm module
1. Create a new account in npm.
   https://www.npmjs.com/signup
2. Create a new access token and select publish as a type
   https://www.npmjs.com/settings/upnotes/tokens
3. Add secret to your repo or organization as NPM_TOKEN
   https://github.com/organizations/upnotes-io/settings/secrets/actions/new
4. Create a new tag and use that tag to create the release. Creating a new release will trigger the [workflow](https://github.com/upnotes-io/react-component-template/blob/main/.github/workflows/npm-publish.yml). 

### Publishing to github pages:
Adding deploy keys to your repo:
1. https://github.com/JamesIves/github-pages-deploy-action/tree/dev#using-an-ssh-deploy-key-
2. https://docs.github.com/en/developers/overview/managing-deploy-keys#setup-2
