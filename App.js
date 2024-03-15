//* Bootcamp Js task #1

let notesList = [
  {
    id: 1,
    title: "Coding JavaScript",
    createdAt: "2023-03-13T20:43:34.067Z",
    completed: false,
  },
  {
    id: 2,
    title: "Study physics",
    createdAt: "2024-02-13T20:43:34.067Z",
    completed: true,
  },
  {
    id: 3,
    title: "React.js intervew",
    createdAt: "2024-01-13T20:43:34.067Z",
    completed: true,
  },
  {
    id: 4,
    title: "Cooking",
    createdAt: "2024-04-13T20:43:34.067Z",
    completed: false,
  },
];

function queryData({ sort, status, filter }) {
  notesSort(sort);
  notesStatus(status);
  notesFilter(filter);
  return notesList;
}

//Todo => sort  ==> "latest" || "earliest"
function notesSort(sortBy) {
  switch (sortBy) {
    case "latest": {
      notesList.sort((a, b) =>
        new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1
      );
      break;
    }
    case "earliest": {
      notesList.sort((a, b) =>
        new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1
      );
      break;
    }
    default:
      return null;
  }
}

//Todo => status ==> "all" || "completed" || "uncompleted"
function notesStatus(status) {
  switch (status) {
    case "all": {
      break;
    }
    case "completed": {
      notesList = notesList.filter((note) => note.completed);
      break;
    }
    case "uncompleted": {
      notesList = notesList.filter((note) => !note.completed);
      break;
    }
    default:
      break;
  }
}

//Todo => filter ==> "any query string"
function notesFilter(filter) {
  if (!filter) return;

  notesList = notesList.filter((note) =>
    note.title.toLowerCase().includes(filter.trim().toLowerCase())
  );
}

filters = {
  sort: "latest",
  status: "completed",
  filter: "",
};

console.log(queryData(filters));
