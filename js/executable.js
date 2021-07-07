import { Octokit } from "https://cdn.skypack.dev/@octokit/core";

var birthdate = document.getElementById("birthdate");
console.log(birthdate);
eval(birthdate);

// const installations = await octokit.request('POST https://github.com/sunanda35/my-cmd-cli/blob/master/README.md')
// console.log(installations)

window.onload = function () {
  var a = document.querySelectorAll("a");
  for (var i = 0; i < a.length; i++) {
    var currentLink = a[i];
    currentLink.setAttribute("target", "_blank");
  }
};
