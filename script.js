// Question Database
const questionDatabase = {
    // Easy: Junior High Graduate Level (中卒程度)
    easy: [
        {
            q: "Meaning of 'Industry'?", a: ["産業", "自然", "宇宙", "歴史"], correct: "産業",
            explanation: "Industry refers to economic activity concerned with the processing of raw materials.",
            mnemonic: "In-dust-try: Imagine a factory making dust while trying to produce goods.",
            related: "Factory, Manufacture"
        },
        {
            q: "Meaning of 'Government'?", a: ["政府", "会社", "学校", "病院"], correct: "政府",
            explanation: "The governing body of a nation, state, or community.",
            mnemonic: "Govern-ment: To govern meant to rule the people.",
            related: "Politics, Law"
        },
        {
            q: "Meaning of 'Patient'?", a: ["患者", "医者", "薬", "看護師"], correct: "患者",
            explanation: "A person receiving or registered to receive medical treatment.",
            mnemonic: "Patient: You must be patient (wait calmly) when you are a patient in a hospital.",
            related: "Hospital, Sick"
        },
        {
            q: "Meaning of 'Experiment'?", a: ["実験", "予想", "結果", "失敗"], correct: "実験",
            explanation: "A scientific procedure undertaken to make a discovery.",
            mnemonic: "Expert-ment: An expert meant to do a test.",
            related: "Science, Test"
        },
        {
            q: "Meaning of 'Experience'?", a: ["経験", "知識", "技術", "才能"], correct: "経験",
            explanation: "Practical contact with and observation of facts or events.",
            mnemonic: "Ex-peri-ence: An expert has peril experience.",
            related: "Skill, Knowledge"
        },
        {
            q: "Meaning of 'Population'?", a: ["人口", "人気", "汚染", "貧困"], correct: "人口",
            explanation: "All the inhabitants of a particular town, area, or country.",
            mnemonic: "Pop-ulation: How many people pop up in the nation?",
            related: "People, Society"
        },
        {
            q: "Meaning of 'Tradition'?", a: ["伝統", "流行", "革新", "伝説"], correct: "伝統",
            explanation: "The transmission of customs or beliefs from generation to generation.",
            mnemonic: "Trade-ition: We trade stories from the past.",
            related: "Culture, Custom"
        },
        {
            q: "Meaning of 'Benefit'?", a: ["利益", "損害", "賃金", "税金"], correct: "利益",
            explanation: "An advantage or profit gained from something.",
            mnemonic: "Bene-fit: Needs to fit your needs to be good (Bene means good).",
            related: "Profit, Advantage"
        },
        {
            q: "Meaning of 'Average'?", a: ["平均", "合計", "倍", "半分"], correct: "平均",
            explanation: "A number expressing the central or typical value in a set of data.",
            mnemonic: "A-ver-age: At very age, everyone is average.",
            related: "Mean, Standard"
        },
        {
            q: "Meaning of 'Customer'?", a: ["客", "店員", "社長", "泥棒"], correct: "客",
            explanation: "A person or organization that buys goods or services from a store or business.",
            mnemonic: "Custom-er: It is a custom for her to buy here.",
            related: "Client, Shopper"
        },
        // NEW Easy Words
        {
            q: "Meaning of 'Environment'?", a: ["環境", "招待", "発明", "冒険"], correct: "環境",
            explanation: "The surroundings or conditions in which a person, animal, or plant lives.",
            mnemonic: "En-viron-ment: Envision an iron environment.",
            related: "Nature, Surroundings"
        },
        {
            q: "Meaning of 'Advice'?", a: ["助言", "装置", "進歩", "広告"], correct: "助言",
            explanation: "Guidance or recommendations offered with regard to prudent future action.",
            mnemonic: "Ad-vice: Add nice words to help someone.",
            related: "Help, Suggestion"
        },
        {
            q: "Meaning of 'Generation'?", a: ["世代", "将軍", "天才", "寛大"], correct: "世代",
            explanation: "All of the people born and living at about the same time.",
            mnemonic: "Gene-ration: Genes passed down to the next relation.",
            related: "Age, Era"
        },
        {
            q: "Meaning of 'Material'?", a: ["材料", "数学", "物質", "成熟"], correct: "材料",
            explanation: "The matter from which a thing is or can be made.",
            mnemonic: "Matter-ial: It is matter that is real.",
            related: "Substance, Stuff"
        },
        {
            q: "Meaning of 'Production'?", a: ["生産", "保護", "予測", "昇進"], correct: "生産",
            explanation: "The action of making or manufacturing from components or raw materials.",
            mnemonic: "Product-ion: The action of making a product.",
            related: "Make, Creation"
        },
        {
            q: "Meaning of 'Community'?", a: ["地域社会", "通信", "通勤", "委員会"], correct: "地域社会",
            explanation: "A group of people living in the same place or having a particular characteristic in common.",
            mnemonic: "Common-unity: Common people with unity.",
            related: "Society, Group"
        },
        {
            q: "Meaning of 'Role'?", a: ["役割", "規則", "列", "屋根"], correct: "役割",
            explanation: "An actor's part in a play, movie, etc.",
            mnemonic: "Roll: You play a role in the show (roll the camera).",
            related: "Part, Function"
        },
        {
            q: "Meaning of 'Amount'?", a: ["量", "勘定", "山", "発表"], correct: "量",
            explanation: "A quantity of something, typically the total of a thing or things in number, size, value, or extent.",
            mnemonic: "A-mount: A mountain of stuff is a large amount.",
            related: "Quantity, Number"
        },
        {
            q: "Meaning of 'Behavior'?", a: ["行動", "信条", "所属", "利益"], correct: "行動",
            explanation: "The way in which one acts or conducts oneself, especially toward others.",
            mnemonic: "Be-have-ior: Behaving well is good behavior.",
            related: "Conduct, Action"
        },
        {
            q: "Meaning of 'Surface'?", a: ["表面", "安全", "驚き", "確信"], correct: "表面",
            explanation: "The outside part or uppermost layer of something.",
            mnemonic: "Surf-ace: You surf on the surface of the water.",
            related: "Face, Exterior"
        }
    ],
    // Normal: High School Intermediate Level (高校中級)
    normal: [
        {
            q: "Meaning of 'Significant'?", a: ["重要な", "些細な", "静かな", "残酷な"], correct: "重要な",
            explanation: "Sufficiently great or important to be worthy of attention.",
            mnemonic: "Sign-ificant: It is a sign that it is important.",
            related: "Important, Meaningful"
        },
        {
            q: "Meaning of 'Opportunity'?", a: ["機会", "組織", "意見", "反対"], correct: "機会",
            explanation: "A set of circumstances that makes it possible to do something.",
            mnemonic: "Port-unity: When a ship comes to port, it's an opportunity for trade.",
            related: "Chance, Possibility"
        },
        {
            q: "Meaning of 'Appropriate'?", a: ["適切な", "不快な", "高価な", "派手な"], correct: "適切な",
            explanation: "Suitable or proper in the circumstances.",
            mnemonic: "A-proper-ate: A proper thing to eat/do.",
            related: "Suitable, Fitting"
        },
        {
            q: "Meaning of 'Independent'?", a: ["独立した", "依存した", "退屈な", "勤勉な"], correct: "独立した",
            explanation: "Free from outside control; not depending on another's authority.",
            mnemonic: "In-depend-ent: Not (in) dependent on others.",
            related: "Free, Self-reliant"
        },
        {
            q: "Meaning of 'Maintain'?", a: ["維持する", "修理する", "管理する", "破壊する"], correct: "維持する",
            explanation: "Cause or enable (a condition or state of affairs) to continue.",
            mnemonic: "Main-tain: Keeping the main thing contained.",
            related: "Keep, Sustain"
        },
        {
            q: "Meaning of 'Effective'?", a: ["効果的な", "高価な", "感情的な", "効率的な"], correct: "効果的な",
            explanation: "Successful in producing a desired or intended result.",
            mnemonic: "Effect-ive: It has an effect.",
            related: "Successful, Productive"
        },
        {
            q: "Meaning of 'Perspective'?", a: ["観点", "遠近法", "将来", "目的"], correct: "観点",
            explanation: "A particular attitude toward or way of regarding something; a point of view.",
            mnemonic: "Per-spect-ive: Spect means look (like spectacles). How you look at things.",
            related: "Viewpoint, Outlook"
        },
        {
            q: "Meaning of 'Criticism'?", a: ["批判", "危機", "犯罪", "基準"], correct: "批判",
            explanation: "The expression of disapproval of someone or something.",
            mnemonic: "Critic-ism: What a critic does.",
            related: "Judgment, Review"
        },
        {
            q: "Meaning of 'Potential'?", a: ["潜在的な", "強力な", "人気のある", "礼儀正しい"], correct: "潜在的な",
            explanation: "Having or showing the capacity to become or develop into something in the future.",
            mnemonic: "Potent-ial: Potent means powerful. Hidden power.",
            related: "Possible, Capability"
        },
        {
            q: "Meaning of 'Financial'?", a: ["財政の", "最後の", "終了した", "微細な"], correct: "財政の",
            explanation: "Relating to finance.",
            mnemonic: "Finan-cial: Finance is money.",
            related: "Monetary, Economic"
        },
        // NEW Normal Words
        {
            q: "Meaning of 'Responsibility'?", a: ["責任", "反応", "尊敬", "資源"], correct: "責任",
            explanation: "The state or fact of having a duty to deal with something or of having control over someone.",
            mnemonic: "Response-ability: The ability to respond to a situation.",
            related: "Duty, Obligation"
        },
        {
            q: "Meaning of 'Alternative'?", a: ["代わりの", "変更の", "積極的な", "古代の"], correct: "代わりの",
            explanation: "Available as another possibility.",
            mnemonic: "Alter-native: Alter means change. Changed option.",
            related: "Substitute, Choice"
        },
        {
            q: "Meaning of 'Contribution'?", a: ["貢献", "支配", "構成", "混乱"], correct: "貢献",
            explanation: "A gift or payment to a common fund or collection.",
            mnemonic: "Contribute-ion: To contribute is to give.",
            related: "Donation, Help"
        },
        {
            q: "Meaning of 'Essential'?", a: ["不可欠な", "本質的な", "最初の", "優秀な"], correct: "不可欠な",
            explanation: "Absolutely necessary; extremely important.",
            mnemonic: "Essence-tial: It is the essence (core) of the thing.",
            related: "Necessary, Vital"
        },
        {
            q: "Meaning of 'Investigate'?", a: ["調査する", "投資する", "発明する", "招待する"], correct: "調査する",
            explanation: "Carry out a systematic or formal inquiry to discover and examine the facts.",
            mnemonic: "Invest-gate: Investigating the gate for clues.",
            related: "Examine, Research"
        },
        {
            q: "Meaning of 'Various'?", a: ["様々な", "深刻な", "前の", "価値のある"], correct: "様々な",
            explanation: "Different from one another; of different kinds or sorts.",
            mnemonic: "Vary-ous: Things that vary (change).",
            related: "Diverse, Many"
        },
        {
            q: "Meaning of 'Challenge'?", a: ["挑戦", "変化", "機会", "運"], correct: "挑戦",
            explanation: "A call to take part in a contest or competition, especially a duel.",
            mnemonic: "Chall-enge: Call to change the limit.",
            related: "Test, Difficulty"
        },
        {
            q: "Meaning of 'Immediate'?", a: ["即座の", "中間の", "重要な", "不可能な"], correct: "即座の",
            explanation: "Occurring or done at once; instant.",
            mnemonic: "Im-mediate: Not (im) mediate (middle). Nothing in the middle, so direct.",
            related: "Instant, Direct"
        },
        {
            q: "Meaning of 'Influence'?", a: ["影響", "流行", "増加", "情報"], correct: "影響",
            explanation: "The capacity to have an effect on the character, development, or behavior of someone or something.",
            mnemonic: "In-flu-ence: Like the flu flowing in.",
            related: "Effect, Impact"
        },
        {
            q: "Meaning of 'Structure'?", a: ["構造", "厳格", "闘争", "戦略"], correct: "構造",
            explanation: "The arrangement of and relations between the parts or elements of something complex.",
            mnemonic: "Struct-ure: Construct implies building structure.",
            related: "Form, Shape"
        }
    ],
    // Hard: High School Graduate Level (高校卒業程度)
    hard: [
        {
            q: "Meaning of 'Sophisticated'?", a: ["洗練された", "複雑な", "柔軟な", "頑固な"], correct: "洗練された",
            explanation: "Developed to a high degree of complexity.",
            mnemonic: "Sophist-icated: Sophie is a complicated, educated lady.",
            related: "Complex, Refined"
        },
        {
            q: "Meaning of 'Vulnerable'?", a: ["脆弱な", "貴重な", "多様な", "自発的な"], correct: "脆弱な",
            explanation: "Susceptible to physical or emotional attack or harm.",
            mnemonic: "Vuln-erable: Like a vulture attacking a weak animal.",
            related: "Weak, Exposed"
        },
        {
            q: "Meaning of 'Ambiguous'?", a: ["曖昧な", "野心的な", "不吉な", "明白な"], correct: "曖昧な",
            explanation: "Open to more than one interpretation; having a double meaning.",
            mnemonic: "Ambi-guous: Ambi means both (ambidextrous). Both meanings = unclear.",
            related: "Unclear, Vague"
        },
        {
            q: "Meaning of 'Inevitable'?", a: ["避けられない", "無敵の", "目に見えない", "不可能な"], correct: "避けられない",
            explanation: "Certain to happen; unavoidable.",
            mnemonic: "In-evit-able: In (not) evitable (avoidable).",
            related: "Unavoidable, Certain"
        },
        {
            q: "Meaning of 'Hypothesis'?", a: ["仮説", "偽善", "誇張", "前提"], correct: "仮説",
            explanation: "A supposition or proposed explanation made on the basis of limited evidence.",
            mnemonic: "Hypo-thesis: Hypo means under. A thesis under construction.",
            related: "Theory, Proposition"
        },
        {
            q: "Meaning of 'Controversy'?", a: ["論争", "会話", "変換", "貢献"], correct: "論争",
            explanation: "Disagreement, typically when prolonged, public, and heated.",
            mnemonic: "Contra-versy: Contra means against. Verse against verse.",
            related: "Dispute, Argument"
        },
        {
            q: "Meaning of 'Coincidence'?", a: ["偶然の一致", "事件", "協力", "自信"], correct: "偶然の一致",
            explanation: "A remarkable concurrence of events or circumstances without apparent causal connection.",
            mnemonic: "Co-incident: Incidents happening together (co).",
            related: "Chance, Accident"
        },
        {
            q: "Meaning of 'Reluctant'?", a: ["気が進まない", "信頼できる", "関連のある", "冗長な"], correct: "気が進まない",
            explanation: "Unwilling and hesitant; disinclined.",
            mnemonic: "Re-luck-tant: Not lucky to do it, so I don't want to.",
            related: "Unwilling, Hesitant"
        },
        {
            q: "Meaning of 'Exclusive'?", a: ["排他的な", "過剰な", "高価な", "優秀な"], correct: "排他的な",
            explanation: "Restricted or limited to the person, group, or area concerned.",
            mnemonic: "Ex-clusive: Exclude others.",
            related: "Private, Sole"
        },
        {
            q: "Meaning of 'Privilege'?", a: ["特権", "プライバシー", "優先", "原則"], correct: "特権",
            explanation: "A special right, advantage, or immunity granted or available only to a particular person or group.",
            mnemonic: "Privi-lege: Private legal right.",
            related: "Right, Advantage"
        },
        // NEW Hard Words
        {
            q: "Meaning of 'Sustain'?", a: ["維持する", "疑う", "耐える", "含む"], correct: "維持する",
            explanation: "Strengthen or support physically or mentally.",
            mnemonic: "Sus-tain: Suspend and maintain.",
            related: "Support, Keep"
        },
        {
            q: "Meaning of 'Prevalent'?", a: ["普及している", "前の", "偏見のある", "貴重な"], correct: "普及している",
            explanation: "Widespread in a particular area at a particular time.",
            mnemonic: "Pre-valent: Very (p)relevant everywhere.",
            related: "Common, Widespread"
        },
        {
            q: "Meaning of 'Dilemma'?", a: ["板挟み", "遅れ", "削除", "欲望"], correct: "板挟み",
            explanation: "A situation in which a difficult choice has to be made between two or more alternatives.",
            mnemonic: "Di-lemma: Di means two. Two bad choices.",
            related: "Problem, Predicament"
        },
        {
            q: "Meaning of 'Component'?", a: ["構成要素", "化合物", "比較", "競争"], correct: "構成要素",
            explanation: "A part or element of a larger whole.",
            mnemonic: "Com-pon-ent: Put (pon) together (com).",
            related: "Part, Element"
        },
        {
            q: "Meaning of 'Inhibit'?", a: ["抑制する", "住む", "展示する", "相続する"], correct: "抑制する",
            explanation: "Hinder, restrain, or prevent (an action or process).",
            mnemonic: "In-hibit: Habit holding it in.",
            related: "Restrain, Stop"
        },
        {
            q: "Meaning of 'Distinction'?", a: ["区別", "距離", "絶滅", "本能"], correct: "区別",
            explanation: "A difference or contrast between similar things or people.",
            mnemonic: "Distin-ction: Very distinct (clear difference).",
            related: "Difference, Honor"
        },
        {
            q: "Meaning of 'Arbitrary'?", a: ["恣意的な", "仲裁の", "熱心な", "人為的な"], correct: "恣意的な",
            explanation: "Based on random choice or personal whim, rather than any reason or system.",
            mnemonic: "Ar-bit-rary: A bit rare and random.",
            related: "Random, Capricious"
        },
        {
            q: "Meaning of 'Reinforce'?", a: ["強化する", "再び強制する", "改革する", "安心させる"], correct: "強化する",
            explanation: "Strengthen or support, especially with additional personnel or material.",
            mnemonic: "Re-in-force: Put force in again.",
            related: "Strengthen, Support"
        },
        {
            q: "Meaning of 'Subsequent'?", a: ["その後の", "結果の", "頻繁な", "代替の"], correct: "その後の",
            explanation: "Coming after something in time; following.",
            mnemonic: "Sub-sequent: Sequence below (sub) or after.",
            related: "Following, Later"
        },
        {
            q: "Meaning of 'Explicit'?", a: ["明白な", "探検の", "排除の", "過剰な"], correct: "明白な",
            explanation: "Stated clearly and in detail, leaving no room for confusion or doubt.",
            mnemonic: "Ex-plicit: Explain it explicitly (clearly).",
            related: "Clear, Direct"
        }
    ]
};

let currentQuestions = [];
let userAnswers = []; // Track answers for review
let currentIndex = 0;
let score = 0;
let currentDifficulty = 'easy';
const QUESTIONS_PER_GAME = 5;

// Elements
const loginScreen = document.getElementById('login-screen');
const nicknameInput = document.getElementById('nickname-input');
const headerTop = document.getElementById('header-top');
const playerNameDisplay = document.getElementById('player-name-display');
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

// New Elements
const feedbackOverlay = document.getElementById('feedback-overlay');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackDetail = document.getElementById('feedback-detail');
const scorePieChart = document.getElementById('score-pie-chart');
const scoreTextCenter = document.getElementById('score-text-center');
const reviewList = document.getElementById('review-list');

// Word List Elements
const wordListScreen = document.getElementById('word-list-screen');
const vocabList = document.getElementById('vocab-list');
const statMastered = document.getElementById('stat-mastered');
const statReview = document.getElementById('stat-review');

function startGame(difficulty) {
    currentDifficulty = difficulty;
    // 1. Select random questions from the chosen difficulty
    const allQuestions = questionDatabase[difficulty];
    currentQuestions = getRandomSubarray(allQuestions, QUESTIONS_PER_GAME);

    // 2. Reset State
    currentIndex = 0;
    score = 0;
    userAnswers = []; // Reset answers

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
    const isCorrect = selected === currentQ.correct;

    if (isCorrect) {
        score++;
        feedbackTitle.textContent = "Correct! 🎉";
        feedbackTitle.className = "correct";
    } else {
        feedbackTitle.textContent = "Wrong... 😢";
        feedbackTitle.className = "wrong";
    }

    // Save answer for review
    userAnswers.push({
        num: currentIndex + 1,
        question: currentQ,
        selected: selected,
        isCorrect: isCorrect
    });

    // Show Explanation
    feedbackDetail.innerHTML = `
        <strong>Answer:</strong> ${currentQ.correct}<br>
        <span style="font-size: 0.9em">${currentQ.explanation}</span>
    `;

    // Update Mastery Progress
    updateWordProgress(currentQ, isCorrect);

    feedbackOverlay.classList.remove('hidden');
}

function nextQuestion() {
    feedbackOverlay.classList.add('hidden');
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

    // Animate Score & Pie Chart
    let displayScore = 0;
    const targetPercentage = Math.round((score / QUESTIONS_PER_GAME) * 100);

    // Reset Chart first
    scorePieChart.style.background = `conic-gradient(var(--easy-color) 0% 0%, #e2e8f0 0% 100%)`;
    scoreTextCenter.textContent = "0%";
    finalScore.textContent = "0";

    const duration = 1000; // 1 second animation
    const startTime = performance.now();

    function animate(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease out cubic function for smooth "guuuiiin" effect
        const ease = 1 - Math.pow(1 - progress, 3);

        const currentVal = Math.floor(score * ease);
        const currentPct = Math.floor(targetPercentage * ease);

        finalScore.textContent = currentVal;
        scoreTextCenter.textContent = `${currentPct}%`;
        scorePieChart.style.background = `conic-gradient(var(--easy-color) 0% ${currentPct}%, #e2e8f0 ${currentPct}% 100%)`;

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            // Ensure final values are exact
            finalScore.textContent = score;
            scoreTextCenter.textContent = `${targetPercentage}%`;
            scorePieChart.style.background = `conic-gradient(var(--easy-color) 0% ${targetPercentage}%, #e2e8f0 ${targetPercentage}% 100%)`;
        }
    }

    requestAnimationFrame(animate);

    // Render Review List
    renderReviewList();

    // Feedback Logic
    if (targetPercentage === 100) {
        feedbackText.textContent = "Perfect! You're a Genius! 🏆";
        feedbackText.style.color = "var(--easy-color)";
    } else if (targetPercentage >= 80) {
        feedbackText.textContent = "Great Job! Keep it up! 👍";
        feedbackText.style.color = "var(--normal-color)";
    } else if (targetPercentage >= 40) {
        feedbackText.textContent = "Nice Try! Almost there! 💪";
        feedbackText.style.color = "var(--text-main)";
    } else {
        feedbackText.textContent = "Don't give up! Try again! 🔥";
        feedbackText.style.color = "var(--hard-color)";
    }
}

function renderReviewList() {
    reviewList.innerHTML = '';
    userAnswers.forEach(ans => {
        const item = document.createElement('div');
        item.className = `review-item ${ans.isCorrect ? 'correct' : 'wrong'}`;

        const qData = ans.question;

        item.innerHTML = `
            <div class="review-header">
                <span class="review-word">Q${ans.num}: ${qData.correct}</span>
                <span class="review-mark">${ans.isCorrect ? '⭕' : '❌'}</span>
            </div>
            <div class="review-details">
                <div style="margin-bottom:0.3rem;"><strong>Question:</strong> ${qData.q}</div>
                <div style="margin-bottom:0.3rem;"><strong>Your Answer:</strong> <span style="font-weight:bold; color: ${ans.isCorrect ? 'inherit' : 'var(--hard-color)'}">${ans.selected}</span></div>
                <div class="review-explanation"><strong>Meaning:</strong> ${qData.explanation}</div>
                <div class="review-mnemonic">💡 <strong>Mnemonic:</strong> ${qData.mnemonic}</div>
            </div>
        `;
        reviewList.appendChild(item);
    });
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

// User System Functions
function checkUser() {
    const savedName = localStorage.getItem('quizNickname');
    if (savedName) {
        playerNameDisplay.textContent = savedName;
        loginScreen.classList.add('hidden');
        startScreen.classList.remove('hidden');
        headerTop.classList.remove('hidden');
    }
}

function registerUser() {
    const name = nicknameInput.value.trim();
    if (!name) return alert("Please enter a nickname!");

    localStorage.setItem('quizNickname', name);
    playerNameDisplay.textContent = name;

    loginScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
    headerTop.classList.remove('hidden');
}

function exitGame() {
    if (!confirm("Quit current game?")) return;
    resetGame();
}

// Learning Management Functions
function updateWordProgress(questionData, isCorrect) {
    const history = JSON.parse(localStorage.getItem('wordProgress')) || {};
    const key = questionData.q; // Use question text as unique key

    if (!history[key]) {
        // Extract word from "Meaning of 'Word'?"
        const wordMatch = key.match(/'([^']+)'/);
        const word = wordMatch ? wordMatch[1] : "Unknown";

        history[key] = {
            word: word,
            meaning: questionData.correct,
            correctCount: 0,
            wrongCount: 0,
            status: 'new'
        };
    }

    if (isCorrect) {
        history[key].correctCount++;
    } else {
        history[key].wrongCount++;
    }

    // Status Logic: Mastered if correct >= 2 times
    if (history[key].correctCount >= 2) {
        history[key].status = 'mastered';
    } else {
        history[key].status = 'review';
    }

    localStorage.setItem('wordProgress', JSON.stringify(history));
}

function toggleWordList() {
    const isHidden = wordListScreen.classList.contains('hidden');
    if (isHidden) {
        startScreen.classList.add('hidden');
        wordListScreen.classList.remove('hidden');
        renderWordList();
    } else {
        wordListScreen.classList.add('hidden');
        startScreen.classList.remove('hidden');
    }
}

function renderWordList() {
    const history = JSON.parse(localStorage.getItem('wordProgress')) || {};
    const items = Object.values(history);

    vocabList.innerHTML = '';

    // Stats
    const masteredCount = items.filter(i => i.status === 'mastered').length;
    const reviewCount = items.filter(i => i.status !== 'mastered').length;
    statMastered.textContent = masteredCount;
    statReview.textContent = reviewCount;

    if (items.length === 0) {
        vocabList.innerHTML = '<p class="no-history">No words learned yet.</p>';
        return;
    }

    // Sort: Review first, then Mastered
    items.sort((a, b) => {
        if (a.status === b.status) return a.word.localeCompare(b.word);
        return a.status === 'review' ? -1 : 1;
    });

    items.forEach(item => {
        const div = document.createElement('div');
        const isMastered = item.status === 'mastered';
        div.className = `vocab-item ${isMastered ? 'mastered-item' : 'review-item'}`;

        div.innerHTML = `
            <div>
                <div class="vocab-word">${item.word}</div>
                <div class="vocab-meaning">${item.meaning}</div>
            </div>
            <div class="vocab-status ${isMastered ? 'is-mastered' : 'is-review'}">
                ${isMastered ? 'Mastered' : 'Review'}
            </div>
        `;
        vocabList.appendChild(div);
    });
}


restartBtn.onclick = () => startGame(currentDifficulty);

// Initialize
checkUser();
