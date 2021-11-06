const scrollContainer = document.querySelector("main");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});


scrollContainer.addEventListener("scroll", event => {
  let fromLeft = scrollContainer.scrollLeft;
  let section = document.getElementById("section-black");
  let navv = document.getElementById("global-nav");
  let trend = document.getElementById("trend");
  let rank = document.getElementById("rank");

  if (section.offsetLeft <= fromLeft &&
    section.offsetLeft + section.offsetWidth > fromLeft) {
        navv.classList.add("black");
        rank.classList.add("bl");
        trend.classList.remove("bl");
    } else {
        navv.classList.remove("black");
        rank.classList.remove("bl");
        trend.classList.add("bl");
    }
});