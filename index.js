const draggedElement = document.querySelector('.fill');
const emptyBoxes = document.querySelectorAll('.empty');

// Event listeners
draggedElement.addEventListener('dragstart', dragStart);
draggedElement.addEventListener('dragend', dragEnd);

//Loop over placeholders
for (const emptyBox of emptyBoxes) {
  emptyBox.addEventListener('dragover', dragOver);
  emptyBox.addEventListener('dragenter', dragEnter);
  emptyBox.addEventListener('dragleave', dragLeave);
  emptyBox.addEventListener('drop', dragDrop);
}

// Functions
function dragStart() {
  this.classList.add('hold');
  setTimeout(() => (this.className = 'invisible'), 0);
}
function dragEnd() {
  this.className = 'fill';
}

function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
  this.classList.add('hovered');
}
function dragLeave() {
  this.classList.remove('hovered');
}
function dragDrop() {
  console.log('drop');
  this.append(draggedElement);
}
