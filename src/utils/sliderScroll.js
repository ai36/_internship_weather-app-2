export function sliderScroll(listElement, itemsSelector, leftButton, rightButton, currentIndexRef) {
    const items = Array.from(listElement.querySelectorAll(itemsSelector));
  
    const getItemWidth = () => {
      const style = getComputedStyle(listElement);
      const gap = parseInt(style.gap || 0, 10);
      return items[0]?.offsetWidth + gap;
    };
  
    const getVisibleCount = () => {
      return Math.floor(listElement.offsetWidth / getItemWidth());
    };

    let currentIndex = currentIndexRef?.current || 0;
    
    const updateButtonStates = () => {
        console.log(currentIndex)
      leftButton.disabled = currentIndex === 0;
      rightButton.disabled = currentIndex >= items.length - getVisibleCount();
    };
  
    const scrollToIndex = (index) => {
      const itemWidth = getItemWidth();
      const maxScrollLeft = listElement.scrollWidth - listElement.clientWidth;
  
      let scrollLeft;
  
      if (index <= 0) {
        scrollLeft = 0;
        currentIndex = 0;
      }
      else if (index >= items.length - getVisibleCount()) {
        scrollLeft = maxScrollLeft;
        currentIndex = items.length - getVisibleCount();
      }
      else {
        scrollLeft = index * itemWidth;
        currentIndex = index;
      }
  
      listElement.scrollTo({
        left: scrollLeft,
        behavior: 'smooth',
      });
  
      updateButtonStates();
    };
  
    const handleLeftClick = () => {
      scrollToIndex(currentIndex - 1);
    };
  
    const handleRightClick = () => {
      scrollToIndex(currentIndex + 1);
    };
  
    if (leftButton) leftButton.addEventListener('click', handleLeftClick);
    if (rightButton) rightButton.addEventListener('click', handleRightClick);
  
    updateButtonStates();
  
    return () => {
      if (leftButton) leftButton.removeEventListener('click', handleLeftClick);
      if (rightButton) rightButton.removeEventListener('click', handleRightClick);
    };
  }
  