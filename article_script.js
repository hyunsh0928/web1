document.querySelector('img').addEventListener('click', function() {
    window.location.href = 'article.html'; // 이미지 클릭시 페이지 이동
});

// 버튼 요소들을 가져옵니다.
const buttons = document.querySelectorAll('.action-button');

// D4 주사위 굴리기
document.getElementById('d4-button').addEventListener('click', function() {
    rollDice(4, '.d4-result', '.d4-sum', '.d4-roll-count');
});

// D6 주사위 굴리기
document.getElementById('d6-button').addEventListener('click', function() {
    rollDice(6, '.d6-result', '.d6-sum', '.d6-roll-count');
});

// D8 주사위 굴리기
document.getElementById('d8-button').addEventListener('click', function() {
    rollDice(8, '.d8-result', '.d8-sum', '.d8-roll-count');
});

// D12 주사위 굴리기
document.getElementById('d12-button').addEventListener('click', function() {
    rollDice(12, '.d12-result', '.d12-sum', '.d12-roll-count');
});

// D20 주사위 굴리기
document.getElementById('d20-button').addEventListener('click', function() {
    rollDice(20, '.d20-result', '.d20-sum', '.d20-roll-count');
});

// D100 주사위 굴리기
document.getElementById('d100-button').addEventListener('click', function() {
    rollDice(100, '.d100-result', '.d100-sum', '.d100-roll-count');
});

function rollDice(diceType, resultClass, sumClass, rollCountClass) {
    let totalSum = 0;
    const rollCounts = document.querySelectorAll(rollCountClass);
    const diceResults = document.querySelectorAll(resultClass);
    const totalSums = document.querySelectorAll(sumClass);

    rollCounts.forEach((rollCount, index) => {
        const rollValue = rollCount.value;
        
        if (rollValue <= 0 || rollValue >= 6 || isNaN(rollValue)) {
            diceResults[index].innerText = "올바른 값을 입력해 주십시오.";
            totalSums[index].innerText = "총합: 0";
            return;
        }

        let resultText = '결과값: ';
        let sum = 0;

        for (let i = 0; i < rollValue; i++) {
            const result = Math.floor(Math.random() * diceType) + 1;
            resultText += `${result} `;
            sum += result;
        }

        diceResults[index].innerText = resultText;
        totalSums[index].innerText = `총합: ${sum}`;
    });
}
