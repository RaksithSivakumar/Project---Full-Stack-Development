const text = document.querySelector('.shadow-text');

document.addEventListener('mousemove', (e) => {
    const { offsetWidth: width, offsetHeight: height } = text;
    let { offsetX: x, offsetY: y } = e;

    if (e.target !== text) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const walk = 100;
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgba(0,0,0,0.5),
        ${xWalk * -1}px ${yWalk}px 0 rgba(255,255,255,0.5)
    `;
});
