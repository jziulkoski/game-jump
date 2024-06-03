const avatar = document.querySelector('.avatar');
const pipe = document.querySelector('.pipe');
const container = document.querySelector('.container-replay');
const buttonReplay = document.querySelector('.btn-replay');

const jump = () => {
    avatar.classList.add('jump');

    setTimeout(() => {
        avatar.classList.remove('jump');
    }, 500);
}

const replay = () => {
    buttonReplay.addEventListener("click", () => {
        location.reload()
    })
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const avatarPosition = +window.getComputedStyle(avatar).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && avatarPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        avatar.style.animation = 'none';
        avatar.style.bottom = `${avatarPosition}px`;

        avatar.src = './assets/game-over.png';
        avatar.style.width = '75px';
        avatar.style.marginLeft = '50px';

        clearInterval(loop);

        container.style.display = "flex";
        replay();
    }
}, 10)

document.addEventListener('keydown', jump);