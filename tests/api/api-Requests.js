import dataUlr from "./api_Url.js";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
    auth: 'Bearer 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'
});

const requestWithQueryParametersCode = async() => {
  const result = await octokit.request(`GET ${dataUlr.searchCodeUrl}`, {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
    q: "filename:test_helper path:test",
  });
  return result
}

const requestWithoutQueryParametersCode = async() => {
  const result = await octokit.request(`GET ${dataUlr.searchCodeUrl}`, {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });
  return result
}

const requestWithExistRepo = async() => {
  const result = await octokit.request(`GET ${dataUlr.searchRepoUrl}`, {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
    q: "jquery in:name",
  });
  console.log(result)
  return result
}

const requestWithoutExistRepo = async() => {
  const result = await octokit.request(`GET ${dataUlr.searchRepoUrl}`, {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
    q: "ljlkj';;l' in:name",
  });
  return result
}

export {requestWithQueryParametersCode, requestWithoutQueryParametersCode, requestWithExistRepo,
  requestWithoutExistRepo}