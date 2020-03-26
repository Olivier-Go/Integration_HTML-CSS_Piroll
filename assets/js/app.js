const app = {
  init: function() {
    const menuIcon = document.querySelector(".navbar__menu--icon");
    menuIcon.addEventListener("click", app.onClick);
  },

  onClick: function(event) {
    const menuIcon = event.currentTarget;
    const menuContainer = document.querySelector(".navbar__menu");
    if (menuIcon.classList.contains("is-opened")) {
      menuIcon.classList.remove("is-opened");
      menuIcon.classList.add("is-closed");
      menuContainer.classList.remove("is-opened");
    } else {
      menuIcon.classList.remove("is-closed");
      menuIcon.classList.add("is-opened");
      menuContainer.classList.add("is-opened");
    }
  }
};

document.addEventListener("DOMContentLoaded", app.init);
