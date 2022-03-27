window.addEventListener("load", function () {
  chrome.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse
  ) {
    if (request.message === "cleanup") {
      let recipeSection = null;

      // Try to find recipe
      try {
        recipeSection = document.querySelector('div[id*="tasty-recipes-"]');
        console.log("Found the recipe!", recipeSection);
      } catch (error) {
        console.log("We didn't find a recipe!", error.toString());
      }

      if (recipeSection) {
        console.log("We found the recipe section!", recipeSection);
        // Override the html of the page to just be the recipe
        document.getElementsByTagName("html")[0].innerHTML =
          recipeSection.outerHTML;

        // Remove the footer
        document.getElementsByTagName("footer")[0].remove();
      }
    }
  });
});
