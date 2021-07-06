module.exports = ({ env }) => ({
  "github-publish": {
    owner: "username", // The gothub organisation or user
    repo: "reponame", // The name of the repository
    workflow_id: "rebuild.yml", // The workflow_id or filename
    token: env("GITHUB_TOKEN"), // The GitHub personal access token with access to trigger workflows and view build status
    branch: "master", // The branch the workflow should be triggered on
  },
});
