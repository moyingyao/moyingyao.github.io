const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "盗将行",
        artist: '盗将行',
        url: 'http://www.ytmp3.cn/down/57082.mp3',
        cover: 'http://img.ytmp3.cn/image/21.jpg',
      },
      {
        name: '成都',
        artist: '赵雷',
        url: 'http://www.ytmp3.cn/down/56792.mp3',
        cover: 'http://img.ytmp3.cn/image/25.jpg',
      },
      {
        name: 'five hundred miles',
        artist: 'justin',
        url: 'http://www.ytmp3.cn/down/47526.mp3',
        cover: 'http://img.ytmp3.cn/image/94.jpg',
      }
    ]
});

