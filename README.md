# Todo App

**Note:** Fork this repo to your profile. Before coding create branch by feature for easy pull request and review when you done one task.

## Start project

```sh
# clone your project from github
# Using cmd
git clone "your_git_repository"

cd react-native-auth-train-for-sothirich

# install dependencies
yarn

# Running
yarn android

# or

yarn ios
```

### Tasks

- Learn React Context
- Clone project
- Setup like todo app
- Design login and sign Up screen
  - UI make like this design https://www.figma.com/file/9L8XDZQFINZX35VWYLRPZ5/Login-Page-(Community)?node-id=0%3A1
- Use react context to make login with React Native
- Use this https://react-native-async-storage.github.io/async-storage library to store auth token or current user

### Folders struture guide

```sh
# //---
- android
- ios
- app
  - components
    # Any shares commonents. Ex:
    - Header.jsx
  - contexts
    - auth.jsx
  - hooks
  - routes
    - index.jsx
    - auth.jsx
  - screens
    - SignIn
      - index.jsx
    - SignUp
      - index.jsx
    - Home
      - index.jsx
  - services
    - auth.js
  - index.jsx
- index.js
# //---
```
