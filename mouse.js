const cursorDefault = document.createElement('div');
cursorDefault.className = 'custom-cursor';
document.body.appendChild(cursorDefault);
const cursorImg = document.createElement('img');
cursorImg.src = './img/mouse-default.png';
cursorImg.style.width = '24px';
cursorImg.style.pointerEvents = 'none';
cursorDefault.appendChild(cursorImg);

if (window.innerWidth >= 1025) {
  document.addEventListener('mousemove', (e) => {
    cursorDefault.style.left = e.clientX + 'px';
    cursorDefault.style.top = e.clientY + 'px';
    if (e.clientY <= 0.5) {
      cursorDefault.style.display = 'none';
      return;
    }
    cursorDefault.style.display = 'block';
    const elementBelow = document.elementFromPoint(e.clientX, e.clientY);
    const isHoverable = elementBelow && (
      elementBelow.tagName === 'A' ||
      elementBelow.tagName === 'BUTTON' ||
      elementBelow.type === 'submit' ||
      elementBelow.type === 'button' ||
      elementBelow.tagName === 'SELECT' ||
      elementBelow.hasAttribute('onclick') ||
      elementBelow.closest('a, button, [onclick]')
    );
    cursorImg.src = isHoverable ? './img/mouse-hover.png' : './img/mouse-default.png';
  });
  const hoverElements = document.querySelectorAll('a, button, input[type=submit], input[type=button], select, [onclick]');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorImg.src = './img/mouse-hover.png';
    });
    el.addEventListener('mouseleave', () => {
      cursorImg.src = './img/mouse-default.png';
    });
  });
  const style = document.createElement('style');
  style.textContent = `
    * {
      cursor: none !important;
    }
    .custom-cursor {
      position: fixed;
      pointer-events: none;
      z-index: 9999;
      transform: translate(-2px, -2px);
    }
  `;
  document.head.appendChild(style);
}