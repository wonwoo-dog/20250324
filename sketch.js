let sprite1, sprite2; // 儲存圖片精靈
let currentSprite = null; // 當前顯示的圖片精靈
let frameDelay = 15; // 動畫速度調整，數值越大動畫越慢
let iframe1, iframe2; // 儲存兩個 iframe 元素

function preload() {
  // 預載入圖片精靈
  sprite1 = loadImage('動作1全部.png');
  sprite2 = loadImage('動作2全部.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight); // 設置畫布為全螢幕

  // 第一個按鈕
  let button1 = createButton('自我介紹');
  button1.position(150, 50);
  button1.size(100, 50);
  button1.style('font-size', '20px');
  button1.mouseOver(() => currentSprite = { sprite: sprite1, frames: 6, width: 23, height: 61 });
  button1.mouseOut(() => currentSprite = null);
  button1.mousePressed(() => {
    if (!iframe1) {
      iframe1 = createElement('iframe'); // 創建第一個 iframe 元素
      iframe1.attribute('src', 'https://www.et.tku.edu.tw/'); // 設置網址
      iframe1.position(50, 150); // 設置 iframe 的位置
      iframe1.size(800, 600); // 設置 iframe 的大小
    }
  });

  // 第二個按鈕
  let button2 = createButton('作品簡介');
  button2.position(280, 50);
  button2.size(100, 50);
  button2.style('font-size', '20px');
  button2.mouseOver(() => currentSprite = { sprite: sprite2, frames: 6, width: 104, height: 36 });
  button2.mouseOut(() => currentSprite = null);
  button2.mousePressed(() => {
    if (!iframe2) {
      iframe2 = createElement('iframe'); // 創建第二個 iframe 元素
      iframe2.attribute('src', 'https://wonwoo-dog.github.io/20250303/'); // 設置與第一個按鈕相同的網址
      iframe2.position(900, 150); // 設置 iframe 的位置（避免與第一個重疊）
      iframe2.size(800, 600); // 設置 iframe 的大小
    }
  });
}

function draw() {
  background(220); // 背景顏色

  // 如果有當前圖片精靈，顯示動畫
  if (currentSprite) {
    let frameIndex = Math.floor(frameCount / frameDelay) % currentSprite.frames; // 計算當前幀索引
    let sx = frameIndex * currentSprite.width; // 計算切割的 x 座標
    image(
      currentSprite.sprite, 
      50, 50, 
      currentSprite.width, currentSprite.height, 
      sx, 0, 
      currentSprite.width, currentSprite.height
    );
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時，調整畫布大小
}
