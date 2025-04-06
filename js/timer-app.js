// ============ TAB SWITCHING ============
function switchTab(tabId, el) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-button');
  
    tabs.forEach(tab => tab.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active'));
  
    document.getElementById(tabId).classList.add('active');
    if (el) el.classList.add('active');
  }
  
  // ============ LIVE CLOCK ============
  function updateClock() {
    const clock = document.getElementById("liveClock");
    if (!clock) return;
    const now = new Date();
    clock.textContent = now.toLocaleTimeString();
  }
  setInterval(updateClock, 1000);
  updateClock();
  
  // ============ ANALOG CLOCK ============
  function updateAnalogClock() {
    const now = new Date();
    const hour = now.getHours() % 12;
    const minute = now.getMinutes();
    const second = now.getSeconds();
  
    document.getElementById("hourHand").style.transform = `translateX(-50%) rotate(${hour * 30 + minute / 2}deg)`;
    document.getElementById("minuteHand").style.transform = `translateX(-50%) rotate(${minute * 6}deg)`;
    document.getElementById("secondHand").style.transform = `translateX(-50%) rotate(${second * 6}deg)`;
  }
  setInterval(updateAnalogClock, 1000);
  updateAnalogClock();
  
  // ============ TOGGLE CLOCK MODE ============
  function toggleClockMode(mode) {
    const digital = document.getElementById("liveClock");
    const analog = document.getElementById("analogClock");
  
    if (mode === "digital") {
      digital.style.display = "block";
      analog.style.display = "none";
    } else {
      digital.style.display = "none";
      analog.style.display = "block";
    }
  }
  
  // ============ TIMER LOGIC ============
  let timer;
  let totalSeconds = 0;
  
  function startTimer() {
    const h = parseInt(document.getElementById("hours").value) || 0;
    const m = parseInt(document.getElementById("minutes").value) || 0;
    const s = parseInt(document.getElementById("seconds").value) || 0;
  
    totalSeconds = h * 3600 + m * 60 + s;
    if (totalSeconds <= 0) {
      alert("Please enter valid time!");
      return;
    }
  
    if (timer) clearInterval(timer);
  
    timer = setInterval(() => {
      if (totalSeconds <= 0) {
        clearInterval(timer);
        alert("⏰ Time's up!");
        return;
      }
      totalSeconds--;
      updateTimerDisplay();
    }, 1000);
  
    updateTimerDisplay();
  }
  
  function resetTimer() {
    clearInterval(timer);
    totalSeconds = 0;
    updateTimerDisplay();
  }
  
  function updateTimerDisplay() {
    const display = document.getElementById("timerDisplay");
    const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const secs = String(totalSeconds % 60).padStart(2, '0');
  
    display.textContent = `${hrs}:${mins}:${secs}`;
  }
  
  function toggleFullScreen() {
    const doc = document.documentElement;
    const body = document.body;
  
    if (!document.fullscreenElement) {
      doc.requestFullscreen().then(() => {
        body.classList.add("fullscreen-mode");
      }).catch(err => {
        alert(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else {
      document.exitFullscreen().then(() => {
        body.classList.remove("fullscreen-mode");
      });
    }
  }
  
  // Exit fullscreen listener (in case user uses Esc key)
  document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) {
      document.body.classList.remove("fullscreen-mode");
    }
  });
  
  