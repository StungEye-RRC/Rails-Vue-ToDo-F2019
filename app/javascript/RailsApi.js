const rails_api = {
  headers: {
    "Content-type": "application/json; charset=utf-8",
    "X-CSRF-Token": document
      .querySelector('meta[name="csrf-token"]')
      .getAttribute("content")
  },

  getToDos: async function() {
    const response = await fetch("/to_dos.json");
    return response.json();
  },

  createToDo: async function(description) {
    const response = await fetch("/to_dos.json", {
      method: "POST",
      body: JSON.stringify({ description: description, done: false }),
      headers: rails_api.headers
    });

    return response.json();
  },
};

export default rails_api;
