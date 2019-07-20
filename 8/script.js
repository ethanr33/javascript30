
window.onload = () => {

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  let isHovering = false;
  let curHue = 0;
  let curSize = 5;
  let isSizeDecreasing = false;

  let mousePos;

  function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

  canvas.addEventListener('mouseenter', (e) => {
    isHovering = true;
    mouseEnterEvent = e;
    console.log('is hovering');
  });

  canvas.addEventListener('mousemove', (e) => {
    if (isHovering) {
      console.log('moved');
      mousePos = getMousePos(canvas, e);
      console.log(mousePos.x + " " + mousePos.y);
    }
  })

  canvas.addEventListener('mouseleave', (e) => {
    isHovering = false;
    console.log('isnt hovering');
  });


  setInterval(() => {
    if (isHovering) {
      ctx.beginPath();
      ctx.arc(mousePos.x, mousePos.y, curSize, 0, 2 * Math.PI);
      ctx.fillStyle = `hsl(${curHue % 360}, 100%, 50%)`;
      ctx.fill();
      ctx.strokeStyle = `hsl(${curHue % 360}, 100%, 50%)`;
      ctx.stroke();
      ctx.closePath();
      curHue += 0.4;
      if (Math.round(curSize) == 50.0) {
        isSizeDecreasing = true;
        console.log("decreasing")
      } else if (Math.round(curSize) == 4.0) {
        isSizeDecreasing = false;
      }
      if (isSizeDecreasing) {
        curSize -= 0.075;
      } else {
        curSize += 0.075;
      }
    }
  }, 1);

}
