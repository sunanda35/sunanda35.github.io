const flavoursContainer = document.getElementById('skill_show');
const flavoursScrollWidth = flavoursContainer.scrollWidth;

window.addEventListener('load', () => {
  self.setInterval(() => {
    if (flavoursContainer.scrollLeft !== flavoursScrollWidth) {
      flavoursContainer.scrollTo(flavoursContainer.scrollLeft + 1, 0);
    }else{
        flavoursContainer.scrollLeft=0
    }
  }, 10);
});