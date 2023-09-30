const likeBottomPost = document.querySelector(".posts .bottoms .like");

likeBottomPost.addEventListener("click", () => {
  const like = likeBottomPost.querySelector("svg");
  if (isFilled) {
    like.setAttribute("fill", "none");
  } else {
    like.setAttribute("fill", "#ff3040");
  }

  isFilled = !isFilled;
});
