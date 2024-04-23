/*
ローディングから画面遷移
================================================ */

const loadingAreaGrey = document.querySelector('#loading');
const loadingAreaGreen = document.querySelector('#loading-screen');
const loadingText = document.querySelector('#loading p');

window.addEventListener('load',() => {
    //ローディング中(グレースクリーン)
    loadingAreaGrey.animate(
        {
            opacity: [1, 0],
            visibility: 'hidden',
        },
        {
            duration: 2000,
            delay: 1200,
            easing: 'ease',
            fill: 'forwards',
        }
    );

    //ローディング中(薄緑スクリーン)
    loadingAreaGreen.animate(
        {
            translate: ['0 100vh', '0 0', '0 -100vh']
        },
        {
            duration: 2000,
            delay: 800,
            easing: 'ease',
            fill: 'forwards',
        }
    );

    //ローディング中テキスト
    loadingText.animate(
        [
            {
                opacity: 1,
                offset: .8 //80%
            },
            {
                opacity: 0,
                offset: 1 //100%
            },
        ],
        {
            duration: 1200,
            easing: 'ease',
            fill: 'forwards',
        }
    );
});

/*
画像ギャラリー
================================================ */
const mainImage = document.querySelector('.gallery-image img');
const thumbImages = document.querySelectorAll('.gallery-thumbnails img');

thumbImages.forEach((thumbImage)=>{
    thumbImage.addEventListener('mouseover', (event) => {
        mainImage.src = event.target.src;
        mainImage.animate({opacity: [0, 1]}, 500);
    });
});

/*
スライドメニュー
================================================ */
const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const menuPanel = document.querySelector('#menu-panel');
const menuOptions = {
    duration: 1400,
    easing: 'ease',
    fill: 'forwards',
};

//メニューを開く
menuOpen.addEventListener('click', () => {
    //console.log('メニューを開く');
    menuPanel.animate({translate: ['100vw', 0]}, menuOptions);
});