// Cursor

const isTouchDevice = () => {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
};

document.addEventListener("DOMContentLoaded", () => {
  const isTouchEnabled = isTouchDevice();
  if (!isTouchEnabled) {
    const outer = document.createElement("div");
    outer.classList.add("cursor", "cursor--outer");
    document.body.appendChild(outer);
    const inner = document.createElement("div");
    inner.classList.add("cursor", "cursor--inner");
    document.body.appendChild(inner);
    window.addEventListener("mousemove", (e) => {
      let x = e.pageX;
      let y = e.pageY;
      outer.style.top = y + "px";
      outer.style.left = x + "px";
      inner.style.top = y + "px";
      inner.style.left = x + "px";
    });
  }
});
