const preventScroll = () => {
  document.documentElement.style.overflow = "hidden";
};

const releaseScroll = () => {
  document.documentElement.style.overflow = "visible";
};

const zoomToOriginal = e => {
  e.preventDefault();
  document.body.style.zoom = 1;
};

const preventZoomIn = () => {
  document.addEventListener("gesturestart", zoomToOriginal);
  document.addEventListener("gesturechange", zoomToOriginal);
  document.addEventListener("gestureend", zoomToOriginal);
};

const removeZoomEvent = () => {
  document.removeEventListener("gesturestart", zoomToOriginal);
  document.removeEventListener("gesturechange", zoomToOriginal);
  document.removeEventListener("gestureend", zoomToOriginal);
};

export default { preventScroll, releaseScroll, preventZoomIn, removeZoomEvent };
