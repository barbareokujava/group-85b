
const routes = [
  { path: "/", content: "content for home page", needsLogin: false },
  { path: "/dashboard", content: "content for dashboard", needsLogin: true },
  { path: "/messages", content: "content for messages", needsLogin: true }
];

const users = [];
let session = null;

function register(username, password) 
  if (!username || !password) 
    console.log("incorrect username or password");
    return false;

function login(username, password) {
  let found = null;

  for (let i = 0; i < database.length; i++) {
    const user = database[i];

    if (user.username === username) {
      found = user;
      break;
    }
  }
    if (
      users[i].username == username
      users[i].password ==password
    ) {
      session = users[i];
      console.log("logged in");
      return;
    }
}

  console.log("incorrect data");
}

function processor(path) {
  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];

    if (route.path === path) {
      if (route.needsLogin & !session) {
        console.log("login required");
        return;
      }

      console.log(route.content);
      return;
    }
  }

  console.log("account not found");
}

register("capyy", "404");

processor("/dashboard");

login("capybara", "123");

processor("/dashboard");
processor("/messages");

