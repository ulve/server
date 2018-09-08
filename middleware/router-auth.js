export default function({ store, redirect, route }) {
  store.state.user != null && route.name == "login" ? redirect("/servers") : "";
  store.state.user == null && isProtectedRoute(route) ? redirect("/login") : "";
}

function isProtectedRoute(route) {
  if (route.matched.some(record => record.path == "/servers")) {
    return true;
  }
}
