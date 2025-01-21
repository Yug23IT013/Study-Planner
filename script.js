
import {
  addSession,
  listTodaysSessions,
  sessionCountdown,
  fetchStudyMaterials,
} from "./app.js";

document.getElementById("addSessionBtn").addEventListener("click", () => {
  const topic = document.getElementById("topic").value;
  const sessionTime = document.getElementById("sessionTime").value;
  const duration = document.getElementById("duration").value;

  addSession(topic, sessionTime, duration);
  refreshTodaysSessions();
});

document.getElementById("fetchMaterialsBtn").addEventListener("click", async () => {
  const topic = document.getElementById("topic").value;

  try {
    const materials = await fetchStudyMaterials(topic);
    console.log(materials);
    alert(materials);
  } catch (error) {
    alert(error);
  }
});

function refreshTodaysSessions() {
  const todaysSessions = listTodaysSessions();
  const container = document.getElementById("todaysSessions");
  container.innerHTML = "";

  todaysSessions.forEach(session => {
    const sessionDiv = document.createElement("div");
    sessionDiv.className = "session";
    sessionDiv.textContent = `${session.topic} - ${session.duration} mins at ${session.sessionTime.toLocaleTimeString()}`;
    container.appendChild(sessionDiv);
    sessionCountdown(session);
  });
}
