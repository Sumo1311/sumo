document.addEventListener('DOMContentLoaded', function() {
    const rectangles = document.querySelectorAll('.rectangle');
    const animationDuration = 900; // 动画持续时间（毫秒）
    const fixedDelay = 600; // 固定延迟时间（毫秒）

    rectangles.forEach((rect, index) => {
        // 使用固定延迟时间
        setTimeout(() => {
            rect.style.animation = `fadeIn ${animationDuration}ms ease-in-out forwards`;
        }, fixedDelay * (index + 1)); // 每个矩形的延迟时间依次增加
    });
});
