const rooms = [
  {
    title: "Phòng 1",
    questions: [
      {
        text: "Đại hội đại biểu toàn quốc lần thứ X của Đảng Cộng sản Việt Nam diễn ra vào thời gian nào?",
        answers: [
          "Tháng 3 năm 2005",
          "Tháng 4 năm 2006",
          "Tháng 5 năm 2007",
          "Tháng 6 năm 2008"
        ],
        correct: 1,
        explain: "bạn trả lời đúng rồi!"
      },
      {
        text: "Đại hội đại biểu toàn quốc lần thứ XI của Đảng Cộng sản Việt Nam họp vào khoảng thời gian nào?",
        answers: [
          "Từ ngày 12 đến ngày 19-01-2011",
          "Từ ngày 15 đến ngày 22-02-2011",
          "Từ ngày 10 đến ngày 18-03-2011",
          "Từ ngày 20 đến ngày 27-04-2011"
        ],
        correct: 0,
        explain: "bạn trả lời đúng rồi!"
      }
    ]
  },
  {
    title: "Phòng 2",
    questions: [
      {
        text: "Tờ báo 'Thanh niên' - cơ quan ngôn luận do Nguyễn Ái Quốc sáng lập - phát hành số đầu tiên vào ngày tháng năm nào?",
        answers: [
          "Ngày 21-6-1925",
          "Ngày 03-2-1930",
          "Ngày 20-10-1930",
          "Ngày 02-9-1945"
        ],
        correct: 0,
        explain: "bạn trả lời đúng rồi!"
      },
      {
        text: "Theo Cương lĩnh năm 1991, mục tiêu tổng quát phải đạt tới khi kết thúc thời kỳ quá độ lên chủ nghĩa xã hội ở nước ta là gì?",
        answers: [
          "Hoàn thành công nghiệp hóa, hiện đại hóa đất nước",
          "Trở thành một nước phát triển có thu nhập cao",
          "Xây dựng xong về cơ bản những cơ sở kinh tế của chủ nghĩa xã hội, với kiến trúc thượng tầng về chính trị và tư tưởng, văn hoá phù hợp, làm cho nước ta trở thành một nước xã hội chủ nghĩa phồn vinh.",
          "Đưa GDP đầu người đạt mức trung bình thế giới."
        ],
        correct: 2,
        explain: "bạn trả lời đúng rồi!"
      }
    ]
  },
  {
    title: "Phòng 3",
    questions: [
      {
        text: "Tại Đại hội X (2006), Đảng Cộng sản Việt Nam xác định nền kinh tế thị trường định hướng xã hội chủ nghĩa ở nước ta có mấy chế độ sở hữu?",
        answers: [
          "2 chế độ sở hữu (nhà nước, tập thể).",
          "3 chế độ sở hữu (toàn dân, tập thể, tư nhân)",
          "4 chế độ sở hữu (toàn dân, tập thể, tư nhân, hỗn hợp)",
          "5 chế độ sở hữu"
        ],
        correct: 3,
        explain: "bạn trả lời đúng rồi!"
      },
      {
        text: " Kinh tế thị trường định hướng xã hội chủ nghĩa ở nước ta bao gồm bao nhiêu thành phần kinh tế theo định hướng của Đại hội X (2006)?",
        answers: [
          "3 thành phần kinh tế",
          "4 thành phần kinh tế",
          "5 thành phần kinh tế",
          "6 thành phần kinh tế"
        ],
        correct: 1,
        explain: "Kết cấu bốn phần giữ nguyên khung của Cương lĩnh 1991"
      }
    ]
  },
  {
    title: "Phòng 4",
    questions: [
      {
        text: "Theo định hướng của Đại hội X (2006), thành phần kinh tế nào giữ vai trò chủ đạo trong nền kinh tế quốc dân?",
        answers: [
          "Kinh tế tư nhân",
          "Kinh tế tập thể",
          "Kinh tế nhà nước",
          "Kinh tế có vốn đầu tư nước ngoài"
        ],
        correct: 2,
        explain: "bạn trả lời đúng rồi!"
      },
      {
        text: "Đặc trưng số 1 trong các đặc trưng của xã hội xã hội chủ nghĩa mà nhân dân ta xây dựng được nêu trong Cương lĩnh 1991 là gì?",
        answers: [
          "Có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại",
          "Các dân tộc trong nước bình đẳng, đoàn kết và giúp đỡ lẫn nhau cùng tiến bộ",
          "Do nhân dân lao động làm chủ",
          "Có nền văn hoá tiên tiến, đậm đà bản sắc dân tộc"
        ],
        correct: 2,
        explain: "bạn trả lời đúng rồi!"
      }
    ]
  },
  {
    title: "Phòng 5",
    questions: [
      {
        text: "Theo Cương lĩnh năm 1991, nguyên tắc tổ chức và hoạt động cơ bản nào của bộ máy quản lý nhà nước được quy định?",
        answers: [
          "Tam quyền phân lập",
          "Tập trung dân chủ",
          "Tự quản địa phương độc lập",
          "Nhất nguyên hóa chính trị tuyệt đối"
        ],
        correct: 1,
        explain: "bạn trả lời đúng rồi!"
      },
      {
        text: "Kết luận phù hợp nhất cho activity của nhóm là gì?",
        answers: [
          "Giai cấp vẫn tồn tại trong xã hội số, còn đấu tranh giai cấp chuyển hóa sang cả lĩnh vực dữ liệu, công nghệ và tri thức",
          "Công nghệ cao đã làm mọi mâu thuẫn giai cấp biến mất hoàn toàn",
          "Chỉ người không biết dùng máy tính mới thuộc giai cấp bị trị",
          "Bất bình đẳng số chỉ là vấn đề giải trí, không liên quan sản xuất"
        ],
        correct: 1,
        explain: "bạn trả lời đúng rồi!"
      }
    ]
  }
];

const state = {
  room: 0,
  question: 0,
  lives: 5,
  locked: false,
  finished: false,
  transitioning: false,
  enteringRoom: false,
  sceneTimer: null,
  roomTimer: null,
  finishTimer: null,
  entryTimer: null,
  answerTimer: null,
  giftTimer: null,
  castleTimer: null,
  fireworkTimer: null,
  clockTimer: null
};

const sceneNames = [
  "Khu vườn nhận thức",
  "Hầm gạch đấu tranh",
  "Phòng công nghệ số",
  "Đêm lịch sử",
  "Lâu đài công chúa"
];

const stage = document.getElementById("stage");
const sceneLabel = document.getElementById("sceneLabel");
const roomsElement = document.getElementById("rooms");
const mario = document.getElementById("mario");
const princess = document.getElementById("princess");
const roomText = document.getElementById("roomText");
const questionText = document.getElementById("questionText");
const timerText = document.getElementById("timerText");
const livesText = document.getElementById("livesText");
const roomProgressText = document.getElementById("roomProgressText");
const roomTimerText = document.getElementById("roomTimerText");
const roomLivesText = document.getElementById("roomLivesText");
const roomTitle = document.getElementById("roomTitle");
const question = document.getElementById("question");
const answers = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("nextButton");
const restartButton = document.getElementById("restartButton");
const startButton = document.getElementById("startButton");
const playerNameInput = document.getElementById("playerNameInput");
const resetRankButton = document.getElementById("resetRankButton");
const homeRankBody = document.getElementById("homeRankBody");
const endRankPanel = document.getElementById("endRankPanel");
const endRankBody = document.getElementById("endRankBody");
const LEADERBOARD_KEY = "marioPrincessLeaderboard";
const LEADERBOARD_API = "/api/leaderboard";
const LOCAL_ADMIN_RESET_CODE = "admin";
let gameStarted = false;
let currentPlayer = "";
let runStartTime = 0;
let scoreSaved = false;

function createRooms() {
  rooms.forEach((_, index) => {
    const room = document.createElement("div");
    room.className = "room";
    room.dataset.room = index + 1;
    room.style.left = `${index * 18 + 1}%`;
    roomsElement.appendChild(room);
  });
}

function render() {
  const currentRoom = rooms[state.room];
  const currentQuestion = currentRoom.questions[state.question];

  setScene(state.room);
  document.body.classList.add("room-active");
  document.body.classList.remove("room-entry");
  stage.classList.add("in-room");
  stage.classList.remove("entering-room", "rescue-room", "castle-ready", "gift-scene", "carry-scene", "castle-walk", "firework-scene");
  roomText.textContent = `${state.room + 1} / ${rooms.length}`;
  questionText.textContent = `${state.question + 1} / 2`;
  updateLifeDisplays();
  updateRoomProgress();
  roomTitle.textContent = `Câu ${getGlobalQuestionNumber()}`;
  question.textContent = currentQuestion.text;
  feedback.textContent = "";
  nextButton.classList.add("hidden");
  state.locked = false;
  state.transitioning = false;
  state.enteringRoom = false;
  stage.classList.remove("transitioning");
  mario.classList.remove("walking", "entering");

  mario.style.left = "13%";
  princess.classList.toggle("saved", state.finished);

  [...roomsElement.children].forEach((room, index) => {
    room.classList.toggle("active", index === state.room && !state.finished);
    room.classList.toggle("cleared", index < state.room || state.finished);
    room.classList.remove("opening");
  });

  answers.innerHTML = "";
  currentQuestion.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer";
    button.textContent = answer;
    button.addEventListener("click", () => chooseAnswer(index, button));
    answers.appendChild(button);
  });
}

function startRoomEntry(roomIndex) {
  clearPendingTimers();
  state.room = roomIndex;
  state.question = 0;
  state.locked = true;
  state.transitioning = true;
  state.enteringRoom = true;
  state.finished = false;

  setScene(state.room);
  document.body.classList.remove("room-active");
  document.body.classList.add("room-entry");
  stage.classList.add("entering-room");
  stage.classList.remove("in-room", "transitioning", "rescue-room", "castle-ready", "gift-scene", "carry-scene", "castle-walk", "firework-scene");
  mario.classList.remove("entering");
  mario.classList.add("walking");
  mario.style.left = `${state.room * 18 + 7}%`;
  princess.classList.remove("saved");

  roomText.textContent = `${state.room + 1} / ${rooms.length}`;
  questionText.textContent = "Chuẩn bị";
  updateLifeDisplays();
  roomProgressText.textContent = `Phòng ${state.room + 1} · Đang mở cửa`;
  roomTitle.textContent = rooms[state.room].title;
  question.textContent = "Mario đang mở cửa bước vào căn phòng...";
  feedback.textContent = "Căn phòng sẽ hiện ra rồi câu hỏi mới xuất hiện.";
  answers.innerHTML = "";
  nextButton.classList.add("hidden");

  [...roomsElement.children].forEach((room, index) => {
    room.classList.toggle("active", index === state.room);
    room.classList.toggle("cleared", index < state.room);
    room.classList.toggle("opening", index === state.room);
  });

  state.entryTimer = setTimeout(() => {
    render();
  }, 1250);
}

function setScene(roomIndex) {
  stage.classList.remove("theme-1", "theme-2", "theme-3", "theme-4", "theme-5");
  stage.classList.add(`theme-${roomIndex + 1}`);
  sceneLabel.textContent = sceneNames[roomIndex];
}

function updateLifeDisplays() {
  const hearts = "♥ ".repeat(state.lives).trim() || "0";
  livesText.textContent = hearts;
  roomLivesText.textContent = hearts;
}

function updateRoomProgress() {
  roomProgressText.textContent = `Phòng ${state.room + 1} · Câu ${state.question + 1}`;
}

function getGlobalQuestionNumber() {
  return state.room * 2 + state.question + 1;
}

function formatTime(milliseconds) {
  const totalSeconds = Math.max(0, Math.round(milliseconds / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function updateRunTimer() {
  const elapsed = runStartTime ? Date.now() - runStartTime : 0;
  const text = formatTime(elapsed);
  timerText.textContent = text;
  roomTimerText.textContent = text;
}

function startRunTimer() {
  clearInterval(state.clockTimer);
  updateRunTimer();
  state.clockTimer = setInterval(updateRunTimer, 500);
}

function stopRunTimer() {
  clearInterval(state.clockTimer);
  state.clockTimer = null;
  updateRunTimer();
}

function getLeaderboard() {
  try {
    const saved = JSON.parse(localStorage.getItem(LEADERBOARD_KEY));
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function saveLeaderboard(rows) {
  localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(rows));
}

async function fetchOnlineLeaderboard() {
  const response = await fetch(LEADERBOARD_API);

  if (!response.ok) {
    throw new Error("Cannot load online leaderboard.");
  }

  const payload = await response.json();
  return Array.isArray(payload.rows) ? payload.rows : [];
}

async function submitOnlineScore(row) {
  const response = await fetch(LEADERBOARD_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(row)
  });

  if (!response.ok) {
    throw new Error("Cannot save online score.");
  }

  const payload = await response.json();
  return Array.isArray(payload.rows) ? payload.rows : [];
}

async function resetOnlineLeaderboard(code) {
  const response = await fetch(LEADERBOARD_API, {
    method: "DELETE",
    headers: {
      "x-admin-code": code
    }
  });

  if (!response.ok) {
    const error = new Error("Cannot reset online leaderboard.");
    error.status = response.status;
    throw error;
  }
}

async function resetLeaderboardByAdmin() {
  const code = window.prompt("Nhập mã admin để reset bảng xếp hạng:");

  if (code === null) return;

  const adminCode = code.trim();

  if (!adminCode) {
    window.alert("Bạn chưa nhập mã admin.");
    return;
  }

  const confirmed = window.confirm("Reset bảng xếp hạng sẽ xóa toàn bộ người chơi hiện tại. Bạn chắc chắn muốn xóa?");

  if (!confirmed) return;

  try {
    await resetOnlineLeaderboard(adminCode);
    localStorage.removeItem(LEADERBOARD_KEY);
    renderLeaderboard([]);
    window.alert("Đã reset bảng xếp hạng online. Phiên mới có thể bắt đầu.");
  } catch (error) {
    if (error.status === 403 || adminCode !== LOCAL_ADMIN_RESET_CODE) {
      window.alert("Sai mã admin. Bảng xếp hạng chưa bị xóa.");
      return;
    }

    localStorage.removeItem(LEADERBOARD_KEY);
    renderLeaderboard([]);
    window.alert("Đã reset bảng trên máy này. Nếu đã deploy Vercel, hãy kiểm tra lại cấu hình Redis online.");
  }
}

function createEmptyRankRow(body) {
  const row = document.createElement("tr");
  const cell = document.createElement("td");
  cell.colSpan = 3;
  cell.className = "empty-rank";
  cell.textContent = "Chưa có lượt chơi nào.";
  row.appendChild(cell);
  body.appendChild(row);
}

function fillRankTable(body, rows) {
  body.innerHTML = "";

  if (!rows.length) {
    createEmptyRankRow(body);
    return;
  }

  rows.forEach((row, index) => {
    const tableRow = document.createElement("tr");
    const rankCell = document.createElement("td");
    const nameCell = document.createElement("td");
    const timeCell = document.createElement("td");

    rankCell.textContent = `#${index + 1}`;
    nameCell.textContent = row.name;
    timeCell.textContent = formatTime(row.time);

    tableRow.append(rankCell, nameCell, timeCell);
    body.appendChild(tableRow);
  });
}

function getSortedLeaderboardRows(rows) {
  return rows
    .filter(row => row && typeof row.name === "string" && Number.isFinite(row.time))
    .sort((a, b) => a.time - b.time)
    .slice(0, 10);
}

function renderLeaderboard(rows = getLeaderboard()) {
  const sortedRows = getSortedLeaderboardRows(rows);

  fillRankTable(homeRankBody, sortedRows);
  fillRankTable(endRankBody, sortedRows);
}

async function syncLeaderboard() {
  try {
    const rows = await fetchOnlineLeaderboard();
    saveLeaderboard(rows);
    renderLeaderboard(rows);
  } catch {
    renderLeaderboard();
  }
}

function saveCurrentScore() {
  if (scoreSaved || !runStartTime) return null;

  const elapsed = Date.now() - runStartTime;
  stopRunTimer();
  const row = {
    name: currentPlayer || "Người chơi",
    time: elapsed,
    finishedAt: new Date().toISOString()
  };
  const rows = getLeaderboard();
  rows.push(row);
  rows.sort((a, b) => a.time - b.time);
  saveLeaderboard(rows.slice(0, 50));
  scoreSaved = true;
  renderLeaderboard(rows);
  submitOnlineScore(row)
    .then(onlineRows => {
      saveLeaderboard(onlineRows);
      renderLeaderboard(onlineRows);
    })
    .catch(() => {
      renderLeaderboard(rows);
    });
  endRankPanel.classList.remove("hidden");
  return elapsed;
}

function chooseAnswer(index, selectedButton) {
  if (state.locked || state.finished || state.transitioning || state.enteringRoom) return;

  const currentQuestion = rooms[state.room].questions[state.question];
  const buttons = [...answers.querySelectorAll("button")];
  const isCorrect = index === currentQuestion.correct;

  state.locked = true;

  if (isCorrect) {
    buttons.forEach((button, buttonIndex) => {
      button.disabled = true;
      if (buttonIndex === currentQuestion.correct) button.classList.add("correct");
    });
    feedback.textContent = `Đúng rồi! ${currentQuestion.explain}`;
    nextButton.classList.add("hidden");
    state.answerTimer = setTimeout(advanceAfterCorrectAnswer, 900);
    return;
  }

  selectedButton.classList.add("wrong");
  selectedButton.disabled = true;
  state.lives -= 1;
  updateLifeDisplays();

  if (state.lives <= 0) {
    feedback.textContent = "Mario đã hết 5 mạng. Trò chơi quay lại phòng 1.";
    nextButton.textContent = "Bắt đầu lại";
    nextButton.classList.remove("hidden");
    return;
  }

  feedback.textContent = "Sai rồi, Mario mất 1 mạng. Hãy chọn lại đáp án khác.";
  nextButton.classList.add("hidden");
  state.locked = false;
}

function isLastQuestion() {
  return state.room === rooms.length - 1 && state.question === rooms[state.room].questions.length - 1;
}

function advanceAfterCorrectAnswer() {
  state.answerTimer = null;

  if (state.lives <= 0) {
    resetGame();
    return;
  }

  if (isLastQuestion()) {
    finishGame();
    return;
  }

  if (state.question === 0) {
    state.question = 1;
    render();
  } else {
    moveToNextRoom();
  }
}

function goNext() {
  if (state.transitioning || state.enteringRoom) return;

  if (state.lives <= 0) {
    resetGame();
    return;
  }

  if (state.finished) {
    returnToHome();
    return;
  }

  const currentQuestion = rooms[state.room].questions[state.question];
  const correctButton = [...answers.querySelectorAll("button")][currentQuestion.correct];
  const answeredCorrectly = correctButton && correctButton.classList.contains("correct") && !answers.querySelector(".wrong");

  if (!answeredCorrectly) {
    render();
    return;
  }

  if (isLastQuestion()) {
    finishGame();
    return;
  }

  if (state.question === 0) {
    state.question = 1;
    render();
  } else {
    moveToNextRoom();
  }
}

function moveToNextRoom() {
  const nextRoom = state.room + 1;

  state.transitioning = true;
  state.locked = true;
  stage.classList.add("transitioning");
  mario.classList.add("walking");
  nextButton.classList.add("hidden");
  feedback.textContent = "Mario đang bước vào phòng tiếp theo...";
  mario.style.left = `${nextRoom * 18 + 7}%`;

  state.sceneTimer = setTimeout(() => {
    setScene(nextRoom);
    mario.classList.add("entering");
    [...roomsElement.children].forEach((room, index) => {
      room.classList.toggle("opening", index === nextRoom);
    });
  }, 420);

  state.roomTimer = setTimeout(() => {
    startRoomEntry(nextRoom);
  }, 980);
}

function finishGame() {
  state.finished = true;
  state.transitioning = false;
  state.enteringRoom = false;
  state.locked = true;
  const elapsed = saveCurrentScore();
  document.body.classList.remove("room-entry");
  document.body.classList.add("room-active");
  stage.classList.add("in-room", "rescue-room", "castle-ready");
  stage.classList.remove("transitioning", "entering-room");
  setScene(4);
  mario.classList.add("walking");
  mario.style.left = "18%";
  nextButton.classList.add("hidden");
  roomText.textContent = "5 / 5";
  questionText.textContent = "Hoàn thành";
  roomProgressText.textContent = "Phòng cứu công chúa";
  updateLifeDisplays();
  sceneLabel.textContent = "Phòng cứu công chúa";
  roomTitle.textContent = "Công chúa đang chờ Mario";
  question.textContent = "Bạn đã trả lời hết câu hỏi. Mario sang phòng cuối để cứu công chúa!";
  answers.innerHTML = "";
  feedback.textContent = elapsed === null ? "Chuẩn bị xem đoạn kết..." : `Hoàn thành trong ${formatTime(elapsed)}. Chuẩn bị xem đoạn kết...`;
  princess.classList.add("saved");
  [...roomsElement.children].forEach(room => room.classList.add("cleared"));

  state.finishTimer = setTimeout(() => {
    mario.classList.remove("walking");
    stage.classList.add("carry-scene");
    roomTitle.textContent = "Mario bế công chúa";
    question.textContent = "Mario bế công chúa sau khi vượt qua toàn bộ thử thách.";
    feedback.textContent = "Công chúa đã được giải cứu thành công!";
  }, 850);

  state.giftTimer = setTimeout(() => {
    stage.classList.add("castle-walk");
    mario.classList.add("walking");
    roomTitle.textContent = "Mario đưa công chúa vào lâu đài";
    question.textContent = "Mario bế công chúa bước vào lâu đài để kết thúc hành trình.";
    feedback.textContent = "Lâu đài đang mở cửa chào đón hai người.";
  }, 2450);

  state.castleTimer = setTimeout(() => {
    stage.classList.remove("gift-scene", "carry-scene", "castle-walk");
    stage.classList.add("firework-scene");
    mario.classList.remove("walking");
    roomTitle.textContent = "Pháo hoa chiến thắng";
    question.textContent = "Cảm ơn mọi người đã nhiệt tình tham gia trò chơi! Qua đó, chúng ta đã cùng ôn lại những giai đoạn và sự kiện chính trong quá trình hình thành tư tưởng Hồ Chí Minh.";
    feedback.textContent = "Nhóm đã vượt qua 5 phòng và hoàn thành nội dung activity.";
  }, 4200);

  state.fireworkTimer = setTimeout(() => {
    nextButton.textContent = "Người chơi tiếp theo";
    nextButton.classList.remove("hidden");
  }, 5200);
}

function resetGame() {
  clearPendingTimers();
  if (gameStarted) {
    runStartTime = Date.now();
    scoreSaved = false;
    startRunTimer();
  }
  state.room = 0;
  state.question = 0;
  state.lives = 5;
  state.locked = false;
  state.finished = false;
  state.transitioning = false;
  state.enteringRoom = false;
  document.body.classList.remove("room-entry");
  document.body.classList.remove("room-active");
  endRankPanel.classList.add("hidden");
  startRoomEntry(0);
}

function returnToHome() {
  clearPendingTimers();
  gameStarted = false;
  currentPlayer = "";
  runStartTime = 0;
  scoreSaved = false;
  stopRunTimer();
  state.room = 0;
  state.question = 0;
  state.lives = 5;
  state.locked = false;
  state.finished = false;
  state.transitioning = false;
  state.enteringRoom = false;
  document.body.classList.add("home-active");
  document.body.classList.remove("room-entry", "room-active");
  stage.classList.remove("in-room", "entering-room", "transitioning", "rescue-room", "castle-ready", "gift-scene", "carry-scene", "castle-walk", "firework-scene");
  mario.classList.remove("walking", "entering");
  princess.classList.remove("saved");
  nextButton.classList.add("hidden");
  endRankPanel.classList.add("hidden");
  playerNameInput.value = "";
  syncLeaderboard();
}

function clearPendingTimers() {
  clearTimeout(state.sceneTimer);
  clearTimeout(state.roomTimer);
  clearTimeout(state.finishTimer);
  clearTimeout(state.entryTimer);
  clearTimeout(state.answerTimer);
  clearTimeout(state.giftTimer);
  clearTimeout(state.castleTimer);
  clearTimeout(state.fireworkTimer);
  state.sceneTimer = null;
  state.roomTimer = null;
  state.finishTimer = null;
  state.entryTimer = null;
  state.answerTimer = null;
  state.giftTimer = null;
  state.castleTimer = null;
  state.fireworkTimer = null;
}

nextButton.addEventListener("click", goNext);
restartButton.addEventListener("click", resetGame);
resetRankButton.addEventListener("click", resetLeaderboardByAdmin);
startButton.addEventListener("click", () => {
  if (gameStarted) return;
  gameStarted = true;
  currentPlayer = playerNameInput.value.trim() || "Người chơi";
  runStartTime = Date.now();
  scoreSaved = false;
  startRunTimer();
  endRankPanel.classList.add("hidden");
  document.body.classList.remove("home-active");
  startRoomEntry(0);
});

createRooms();
syncLeaderboard();


