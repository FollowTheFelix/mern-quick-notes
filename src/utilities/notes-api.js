import sendRequest from "./send-request";
const BASE_URL = "api/notes";

export async function createNote(note) {
  return sendRequest(`${BASE_URL}/create`, "POST", note);
}

export async function getNotes() {
  return sendRequest(BASE_URL);
}
