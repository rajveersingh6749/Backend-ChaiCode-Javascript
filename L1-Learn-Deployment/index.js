const express = require('express')
const app = express()

require('dotenv').config()

// type: (api.github.com/users/rajveersingh6749) to get this data
const githubData = {
  "login": "rajveersingh6749",
  "id": 121347374,
  "node_id": "U_kgDOBzudLg",
  "avatar_url": "https://avatars.githubusercontent.com/u/121347374?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/rajveersingh6749",
  "html_url": "https://github.com/rajveersingh6749",
  "followers_url": "https://api.github.com/users/rajveersingh6749/followers",
  "following_url": "https://api.github.com/users/rajveersingh6749/following{/other_user}",
  "gists_url": "https://api.github.com/users/rajveersingh6749/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/rajveersingh6749/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/rajveersingh6749/subscriptions",
  "organizations_url": "https://api.github.com/users/rajveersingh6749/orgs",
  "repos_url": "https://api.github.com/users/rajveersingh6749/repos",
  "events_url": "https://api.github.com/users/rajveersingh6749/events{/privacy}",
  "received_events_url": "https://api.github.com/users/rajveersingh6749/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Rajveer Singh",
  "company": null,
  "blog": "",
  "location": "Bijnor, Uttar Pradesh",
  "email": null,
  "hireable": null,
  "bio": "MSc Math Grad (SVNIT '25) | Full-Stack Dev (React, Node.js) | 300+ LeetCode | DSA + Backend | Open to SDE-1 roles",
  "twitter_username": null,
  "public_repos": 9,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2022-12-24T13:54:31Z",
  "updated_at": "2025-07-24T00:04:29Z"
};

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('rajveerdotcom')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at chai aur code!</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Chai is being prepared!</h2>')
})

app.get('/github', (req, res) => {
  res.json(githubData) // read express docs for res.json()
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
