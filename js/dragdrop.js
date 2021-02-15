export const dragStart = (e) => {
  console.log("Drag has started");
  const id = e.target.id; // id van het element
  e.dataTransfer.setData("text", id); // stockeren in een transfer data object
  // console.log(e);
};

export const dragEnd = (e) => {
  console.log("Drag has ended");
};

export const dragEnter = (e) => {
  console.log("Element has entered a dropzone");
  e.target.style.backgroundColor = "rgb(140,200,70)";
};

export const dragLeave = (e) => {
  console.log("Element has left the dropzone");

  e.target.style.backgroundColor = "";
};

export const drag = (e) => {
  // console.log("Drag busy...");
};

export const dragOver = (e) => {
  e.preventDefault();
  e.stopPropagation();
  // console.log("Drag is over dropzone");
};

export const drop = (e) => {
  e.preventDefault();
  e.stopPropagation();

  // id terug ophalen
  const id = e.dataTransfer.getData("text");
  const element = document.querySelector(`#${id}`);

  const dropZone = e.target;
  dropZone.appendChild(element);
  dropZone.style.backgroundColor = "";
  console.log(element);
};
