const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const cancelBtn = document.getElementById("cancelBtn");
const deleteBtn = document.getElementById("deleteBtn");


openBtn.onclick = () => {
  modal.style.display = "block";
};


cancelBtn.onclick = () => {
  modal.style.display = "none";
};


deleteBtn.onclick = () => {
  modal.style.display = "none";
  alert("Account deleted!");
};


window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
