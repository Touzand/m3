function Checkbox(elem) {
  this.elem = elem;
  this.checked = elem.dataset.checked;
  
  elem.addEventListener('click', e => {
    this.checked = !this.checked;
    this.render();
  });
}

Checkbox.prototype.render = function() {
  this.elem.setAttribute('data-checked', this.checked);
}

export function initCheckboxes(elems) {
  for (let i = 0; i < elems.length; i++) {
    new Checkbox(elems[i]);
  }
}


