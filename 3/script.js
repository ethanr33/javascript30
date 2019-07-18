
window.onload = () => {

  const inputs = document.querySelectorAll('.control-container input');

  function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    if (this.name == "spacing" || this.name == "blur") {
      document.documentElement.style.setProperty(`--${this.name}`, `${this.value}px`);
      console.log(this.value);
    } else if (this.name == "color") {
      document.documentElement.style.setProperty(`--${this.name}`, `${this.value}`);
      console.log(this.value);
    }
  }

  inputs.forEach(input => input.addEventListener('change', handleUpdate));
  //inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));


}
