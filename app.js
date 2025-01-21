// Study Planner Module
const sessions = [];

export function addSession(topic, sessionTime, duration) {
  try {
    if (!topic || isNaN(new Date(sessionTime).getTime()) || isNaN(duration) || duration <= 0) {
      throw new Error("Invalid input: Provide valid topic, session time, and duration.");
    }
    sessions.push({
      topic,
      sessionTime: new Date(sessionTime),
      duration: parseInt(duration, 10),
    });
  } catch (error) {
    alert(error.message);
  }
}

export function listTodaysSessions() {
  const today = new Date().toISOString().split("T")[0];
  return sessions.filter(session => session.sessionTime.toISOString().split("T")[0] === today);
}

export function sessionCountdown(session) {
  const timeDifference = session.sessionTime.getTime() - new Date().getTime();
  setTimeout(() => {
    console.log(`Session on ${session.topic} starts now!`);
  }, timeDifference);
}

export async function fetchStudyMaterials(topic) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (topic) {
        resolve(`Study materials for ${topic}`);
      } else {
        reject("Topic not specified.");
      }
    }, 2000);
  });
}
