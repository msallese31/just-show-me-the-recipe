window.addEventListener("load", function () {
  // Set an on click listener for our clean up button that sends a message to our content script
  document.getElementById("btn-clean-up").addEventListener("click", () => {
    // If our content script is running, we'll find an active tab to send our message to
    // NOTE: Our content script will only currently run on livelytable.com pages
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { message: "cleanup" });
    });
  });
});
