// Create context menu on install
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "searchGoogle",
    title: 'Search Google for "%s"',
    contexts: ["selection"],
  });
});

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
  chrome.tabs.create({
    url: `https://www.google.com/search?q=${encodeURIComponent(
      info.selectionText
    )}`,
  });
});
