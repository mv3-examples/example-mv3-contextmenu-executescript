function sendAlert(text) {
    alert(text);
}

function displayAlert(info, tab) {
    chrome.scripting.executeScript({
          target: {tabId: tab.id},
          func: sendAlert,
          args: ["this is an example alert message"]
      });
}

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "display-alert",
        title: "Send an example alert",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener(displayAlert);

