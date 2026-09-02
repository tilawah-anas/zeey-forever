// BIRTHDAY CARD
const birthdayCard = document.getElementById("birthdayCard");

if (birthdayCard) {
  birthdayCard.addEventListener("click", () => {
    birthdayCard.classList.toggle("open");
  });
}

// SERVICE WORKER
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("service-worker.js")
      .then(() => {
        console.log("For Zeey app is ready 🌸");
      })
      .catch((error) => {
        console.error("Service worker registration failed:", error);
      });
  });
}

// SIDEBAR
const sidebar = document.getElementById("sidebar");
const menuButton = document.getElementById("menuButton");
const sidebarClose = document.getElementById("sidebarClose");
const sidebarOverlay = document.getElementById("sidebarOverlay");

if (sidebar) {
  // Open sidebar on mobile
  if (menuButton) {
    menuButton.addEventListener("click", () => {
      sidebar.classList.add("open");

      if (sidebarOverlay) {
        sidebarOverlay.classList.add("open");
      }
    });
  }

  // Close sidebar on mobile
  if (sidebarClose) {
    sidebarClose.addEventListener("click", () => {
      sidebar.classList.remove("open");

      if (sidebarOverlay) {
        sidebarOverlay.classList.remove("open");
      }
    });
  }

  // Close when clicking outside
  if (sidebarOverlay) {
    sidebarOverlay.addEventListener("click", () => {
      sidebar.classList.remove("open");
      sidebarOverlay.classList.remove("open");
    });
  }

  // Close with Escape
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      sidebar.classList.remove("open");

      if (sidebarOverlay) {
        sidebarOverlay.classList.remove("open");
      }
    }
  });


  // ACTIVE PAGE
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  const sidebarLinks = document.querySelectorAll(".sidebar-link");

  sidebarLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
}