document.addEventListener('DOMContentLoaded', function() {
    const splashScreen = document.getElementById('splash-screen');
    if (splashScreen) {
        // 页面加载后显示动画
        splashScreen.style.display = 'block';
        splashScreen.style.opacity = 1; // 确保初始透明度为1

        // 设置五秒后开始淡出动画
        setTimeout(function() {
            splashScreen.style.animation = 'fadeOut 1s ease-out forwards'; // 应用淡出动画
        }, 4000); // 5000毫秒 = 5秒

        // 设置六秒后隐藏动画元素
        setTimeout(function() {
            splashScreen.style.display = 'none';
        }, 6000); // 6000毫秒 = 6秒
    }
});
