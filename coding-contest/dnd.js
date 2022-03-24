const draggables = document.querySelectorAll(".draggable");
const containers = document.querySelectorAll(".container");

draggables.forEach((draggable) => {
  console.log(draggable);

  draggable.addEventListener(
    "contextmenu",
    (e) => {
      e.preventDefault();
      // let dragNext = draggable.nextElementSibling?.id;
      let dragNext = draggable.nextElementSibling;
      let dragPrev = draggable.previousElementSibling;
      // console.log({ dragNext, dragPrev });
      const show = document.querySelector(`#${draggable.id} .btn`);
      const upBtn = document.querySelector(`#${draggable.id} .btn .up`);
      const downBtn = document.querySelector(`#${draggable.id} .btn .down`);
      const obj = document.querySelector(`#${draggable.id}`);

      show.style.display = "block";
      // down buttton
      dragNext
        ? downBtn.addEventListener("click", () => {
            // const anotherObj = document.querySelector(`#${dragNext}`);
            let currObj = obj.dataset.order;
            let nextObj = dragNext.dataset.order;
            console.log(dragNext);
            // console.log(document.querySelector(`#${dragNext}`).dataset.order);
            obj.style.order = +currObj + 1;
            dragNext.style.order = +nextObj - 1;

            obj.dataset.order = +currObj + 1;
            dragNext.dataset.order = +nextObj - 1;
          })
        : alert("You Already In Bottom Position");
      // up btn
      dragPrev
        ? upBtn.addEventListener("click", () => {
            // const anotherObj = document.querySelector(`#${dragPrev}`);
            let currObj = obj.dataset.order;
            let nextObj = dragPrev.dataset.order;

            obj.style.order = +currObj - 1;
            dragPrev.style.order = +nextObj + 1;

            obj.dataset.order = +currObj - 1;
            dragPrev.dataset.order = +nextObj + 1;
          })
        : alert("You Already In Top Position");
    },
    false
  );
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");
    console.log("start-> " + draggable.offsetTop);
  });
  //   console.log(draggable);
  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
    show.style.display = "none";
    console.log("end-> " + draggable.offsetTop);
  });
});

containers.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    const afterElement = getDragAfterElement(container, e.clientY);
    const draggable = document.querySelector(".dragging");
    if (afterElement == null) {
      container.appendChild(draggable);
    } else {
      container.insertBefore(draggable, afterElement);
    }
  });
});

function getDragAfterElement(container, y) {
  const draggableElements = [
    ...container.querySelectorAll(".draggable:not(.dragging)"),
  ];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}

// right click
