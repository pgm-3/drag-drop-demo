import * as dr from "./dragdrop.js";

const app = {
  init() {
    this.areas = [];

    this.cacheElements();
    this.registerListeners();
  },
  cacheElements() {
    this.areas = document.querySelectorAll(".area-51");
    // console.log(areas);
  },
  registerListeners() {
    for (const area of this.areas) {
      area.addEventListener("dragstart", dr.dragStart);
      area.addEventListener("dragend", dr.dragEnd);
      area.addEventListener("dragenter", dr.dragEnter);
      area.addEventListener("dragleave", dr.dragLeave);
      area.addEventListener("drag", dr.drag);
      area.addEventListener("dragover", dr.dragOver);
      area.addEventListener("drop", dr.drop);
    }
  },
};

app.init();
