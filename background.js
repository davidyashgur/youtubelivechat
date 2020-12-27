// When the extension is installed or upgraded ...
chrome.runtime.onInstalled.addListener(function () {
  // Replace all rules ...
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    // With a new rule ...
    chrome.declarativeContent.onPageChanged.addRules([
      {
        // That fires when a page's URL contains a 'g' ...
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: "youtube.com/watch" },
          }),
        ],
        // And shows the extension's page action.
        actions: [new chrome.declarativeContent.ShowPageAction()],
      },
    ]);
  });
});

chrome.pageAction.onClicked.addListener(function (tab) {
  // No tabs or host permissions needed!
  console.log("tab url " + tab.url);
  chrome.tabs.executeScript({
    code: 'alert("Hi")',
  });
});