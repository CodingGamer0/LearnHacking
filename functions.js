function Wait(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function Encode(string) {
  return btoa(string);
}

function Decode(string) {
  return atob(string);
}
