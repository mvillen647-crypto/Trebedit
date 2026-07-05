function showPage(pageId) {
  // hide all pages
  const pages = document.querySelectorAll(".page");

  pages.forEach(page => {
    page.classList.add("hidden");
  });

  // show selected page
  const activePage = document.getElementById(pageId);
  if (activePage) {
    activePage.classList.remove("hidden");
  }
}
