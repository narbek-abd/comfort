export default function dropdowns() {
  function showDropdown(dropdownItem, dropdownContent) {
    dropdownItem.classList.add("show")
    dropdownContent.classList.add("visible");

    dropdownContent.style.height = dropdownContent.scrollHeight + 'px';
  }

  function hideDropdowns(container) {
    let activeDropdown = container.querySelector(".show");

    if (activeDropdown === null)  return

      let activeContent = activeDropdown.querySelector(".visible");

    activeDropdown.classList.remove("show");
    activeContent.classList.remove("visible");

    activeContent.style.height = 0;
  }

  return {
    showDropdown,
    hideDropdowns
  }
}