// Question Database
const questionDatabase = {
    // Easy: Junior High Graduate Level (中卒程度)
    easy: [
        { q: "Meaning of 'Industry'?", a: ["産業", "自然", "宇宙", "歴史"], correct: "産業" },
        { q: "Meaning of 'Government'?", a: ["政府", "会社", "学校", "病院"], correct: "政府" },
        { q: "Meaning of 'Patient'?", a: ["患者", "医者", "薬", "看護師"], correct: "患者" },
        { q: "Meaning of 'Experiment'?", a: ["実験", "予想", "結果", "失敗"], correct: "実験" },
        { q: "Meaning of 'Experience'?", a: ["経験", "知識", "技術", "才能"], correct: "経験" },
        { q: "Meaning of 'Population'?", a: ["人口", "人気", "汚染", "貧困"], correct: "人口" },
        { q: "Meaning of 'Tradition'?", a: ["伝統", "流行", "革新", "伝説"], correct: "伝統" },
        { q: "Meaning of 'Benefit'?", a: ["利益", "損害", "賃金", "税金"], correct: "利益" },
        { q: "Meaning of 'Average'?", a: ["平均", "合計", "倍", "半分"], correct: "平均" },
        { q: "Meaning of 'Customer'?", a: ["客", "店員", "社長", "泥棒"], correct: "客" }
    ],
    // Normal: High School Intermediate Level (高校中級)
    normal: [
        { q: "Meaning of 'Significant'?", a: ["重要な", "些細な", "静かな", "残酷な"], correct: "重要な" },
        { q: "Meaning of 'Opportunity'?", a: ["機会", "組織", "意見", "反対"], correct: "機会" },
        { q: "Meaning of 'Appropriate'?", a: ["適切な", "不快な", "高価な", "派手な"], correct: "適切な" },
        { q: "Meaning of 'Independent'?", a: ["独立した", "依存した", "退屈な", "勤勉な"], correct: "独立した" },
        { q: "Meaning of 'Maintain'?", a: ["維持する", "修理する", "管理する", "破壊する"], correct: "維持する" },
        { q: "Meaning of 'Effective'?", a: ["効果的な", "高価な", "感情的な", "効率的な"], correct: "効果的な" },
        { q: "Meaning of 'Perspective'?", a: ["観点", "遠近法", "将来", "目的"], correct: "観点" },
        { q: "Meaning of 'Criticism'?", a: ["批判", "危機", "犯罪", "基準"], correct: "批判" },
        { q: "Meaning of 'Potential'?", a: ["潜在的な", "強力な", "人気のある", "礼儀正しい"], correct: "潜在的な" },
        { q: "Meaning of 'Financial'?", a: ["財政の", "最後の", "終了した", "微細な"], correct: "財政の" }
    ],
    // Hard: High School Graduate Level (高校卒業程度)
    hard: [
        { q: "Meaning of 'Sophisticated'?", a: ["洗練された", "複雑な", "柔軟な", "頑固な"], correct: "洗練された" },
        { q: "Meaning of 'Vulnerable'?", a: ["脆弱な", "貴重な", "多様な", "自発的な"], correct: "脆弱な" },
        { q: "Meaning of 'Ambiguous'?", a: ["曖昧な", "野心的な", "不吉な", "明白な"], correct: "曖昧な" },
        { q: "Meaning of 'Inevitable'?", a: ["避けられない", "無敵の", "目に見えない", "不可能な"], correct: "避けられない" },
        { q: "Meaning of 'Hypothesis'?", a: ["仮説", "偽善", "誇張", "前提"], correct: "仮説" },
        { q: "Meaning of 'Controversy'?", a: ["論争", "会話", "変換", "貢献"], correct: "論争" },
        { q: "Meaning of 'Coincidence'?", a: ["偶然の一致", "事件", "協力", "自信"], correct: "偶然の一致" },
        { q: "Meaning of 'Reluctant'?", a: ["気が進まない", "信頼できる", "関連のある", "冗長な"], correct: "気が進まない" },
        { q: "Meaning of 'Exclusive'?", a: ["排他的な", "過剰な", "高価な", "優秀な"], correct: "排他的な" },
        { q: "Meaning of 'Privilege'?", a: ["特権", "プライバシー", "優先", "原則"], correct: "特権" }
    ]
};

let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let currentDifficulty = 'easy';
const QUESTIONS_PER_GAME = 5;

// Elements
const startScreen = document.getElementById('start-screen');
const quizArea = document.getElementById('quiz-area');
const resultArea = document.getElementById('result-area');
const historyScreen = document.getElementById('history-screen');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressBar = document.getElementById('progress-bar');
const progressBarContainer = document.getElementById('progress-bar-container');
const finalScore = document.getElementById('final-score');
const feedbackText = document.getElementById('feedback-text');
const restartBtn = document.getElementById('restart-btn');
const historyList = document.getElementById('history-list');

function startGame(difficulty) {
    currentDifficulty = difficulty;
    // 1. Select random questions from the chosen difficulty
    const allQuestions = questionDatabase[difficulty];
    currentQuestions = getRandomSubarray(allQuestions, QUESTIONS_PER_GAME);

    // 2. Reset State
    currentIndex = 0;
    score = 0;

    // 3. Update UI
    startScreen.classList.add('hidden');
    resultArea.classList.add('hidden');
    historyScreen.classList.add('hidden');
    quizArea.classList.remove('hidden');
    progressBarContainer.classList.remove('hidden');

    loadQuestion();
}

function getRandomSubarray(arr, size) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, size);
}

function loadQuestion() {
    // Update Progress
    const progress = (currentIndex / QUESTIONS_PER_GAME) * 100;
    progressBar.style.width = `${progress}%`;

    const q = currentQuestions[currentIndex];

    // Animate Question
    questionText.style.opacity = 0;
    setTimeout(() => {
        questionText.textContent = q.q;
        questionText.style.opacity = 1;
    }, 200);

    // Render Options
    optionsContainer.innerHTML = '';

    // Shuffle options strictly for display
    const options = [...q.a].sort(() => Math.random() - 0.5);

    options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        btn.className = 'option-btn';
        // Staggered animation
        btn.style.animation = `fadeIn 0.5s ease-out ${idx * 0.1}s backwards`;
        btn.onclick = () => handleAnswer(opt);
        optionsContainer.appendChild(btn);
    });
}

function handleAnswer(selected) {
    const currentQ = currentQuestions[currentIndex];
    if (selected === currentQ.correct) {
        score++;
    }

    currentIndex++;
    if (currentIndex < QUESTIONS_PER_GAME) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    progressBar.style.width = '100%';
    quizArea.classList.add('hidden');
    resultArea.classList.remove('hidden');
    progressBarContainer.classList.add('hidden');

    // Save Score
    saveHistory(score, currentDifficulty);

    // Animate Score Counting
    let displayScore = 0;
    const interval = setInterval(() => {
        if (displayScore >= score) {
            clearInterval(interval);
        } else {
            displayScore++;
            finalScore.textContent = displayScore;
        }
    }, 100);
    finalScore.textContent = score;

    // Feedback Logic
    const percentage = (score / QUESTIONS_PER_GAME) * 100;
    if (percentage === 100) {
        feedbackText.textContent = "Perfect! You're a Genius! 🏆";
        feedbackText.style.color = "var(--easy-color)";
    } else if (percentage >= 80) {
        feedbackText.textContent = "Great Job! Keep it up! 👍";
        feedbackText.style.color = "var(--normal-color)";
    } else if (percentage >= 40) {
        feedbackText.textContent = "Nice Try! Almost there! 💪";
        feedbackText.style.color = "var(--text-main)";
    } else {
        feedbackText.textContent = "Don't give up! Try again! 🔥";
        feedbackText.style.color = "var(--hard-color)";
    }
}

function resetGame() {
    resultArea.classList.add('hidden');
    historyScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
}

// History Functions
function saveHistory(score, difficulty) {
    const history = JSON.parse(localStorage.getItem('quizHistory')) || [];
    const newEntry = {
        score: score,
        total: QUESTIONS_PER_GAME,
        difficulty: difficulty,
        date: new Date().toLocaleString('en-US')
    };
    history.unshift(newEntry); // Add to top
    if (history.length > 20) history.pop(); // Keep max 20
    localStorage.setItem('quizHistory', JSON.stringify(history));
}

function toggleHistory() {
    const isHidden = historyScreen.classList.contains('hidden');
    if (isHidden) {
        startScreen.classList.add('hidden');
        historyScreen.classList.remove('hidden');
        renderHistory();
    } else {
        historyScreen.classList.add('hidden');
        startScreen.classList.remove('hidden');
    }
}

function renderHistory() {
    const history = JSON.parse(localStorage.getItem('quizHistory')) || [];
    historyList.innerHTML = '';

    if (history.length === 0) {
        historyList.innerHTML = '<p class="no-history">No games played yet.</p>';
        return;
    }

    history.forEach(entry => {
        const item = document.createElement('div');
        item.className = 'history-item';
        item.innerHTML = `
            <div>
                <span class="history-date">${entry.date}</span><br>
                <span style="text-transform: capitalize; color: var(--text-muted)">${entry.difficulty}</span>
            </div>
            <div class="history-score">${entry.score} / ${entry.total}</div>
        `;
        historyList.appendChild(item);
    });
}

restartBtn.onclick = () => startGame(currentDifficulty);
