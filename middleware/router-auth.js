export default function({ store, redirect, route }) {
  console.log(route.name);
  store.state.user != null && route.name == "login" ? redirect("/servers") : "";
  store.state.user == null && isAdminRoute(route) ? redirect("/login") : "";
}

function isAdminRoute(route) {
  if (route.matched.some(record => record.path == "/servers")) {
    return true;
  }
}
