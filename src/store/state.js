const state = {
  loginUser: "",
  idx: 1
};
try {
  if (localStorage.getItem("loginUser")) {
    state.loginUser = JSON.parse(localStorage.getItem("loginUser"));
  } else {
    localStorage.setItem("loginUser", JSON.stringify(state.loginUser));
  }
} catch (e) {}

try {
  if (localStorage.getItem("idx")) {
    state.idx = localStorage.getItem("idx");
  } else {
    localStorage.setItem("idx", state.idx);
  }
} catch (e) {}

export default state;
