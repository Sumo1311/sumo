document.getElementById('btn').addEventListener('click', function() {
    const taskList = document.querySelectorAll('.task-item');
    const randomIndex = Math.floor(Math.random() * taskList.length);
    const randomTask = taskList[randomIndex].textContent;
    document.getElementById('random-task-display').textContent = `随机抽取的任务: ${randomTask}`;
});
