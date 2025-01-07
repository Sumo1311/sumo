const emojiContainer = document.getElementById('emoji-container');
const emojis = ['点我头像看看']; // 可以添加更多表情
const emojiCount = 1; // 表情的数量

function createEmoji() {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = `${Math.random() * 100}vw`; // 随机位置
    emoji.style.animationDuration = '5s';// 随机动画时长
    emojiContainer.appendChild(emoji);

    // 删除表情以避免DOM过大
    setTimeout(() => {
        emoji.remove();
    }, emoji.style.animationDuration.slice(0, -1) * 1000);
    
    emoji.addEventListener('animationend', () => {
        emoji.remove();
    });

    emojiContainer.appendChild(emoji);
}

for (let i = 0; i < emojiCount; i++) {
    createEmoji();
}

// 每隔一段时间创建新的表情
setInterval(createEmoji, 1000);
