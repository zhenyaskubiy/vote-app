export type Poll = {
  id: number;
  title: string;
  votes: Vote[];
};

export type Vote = {
  id: number;
  poll_id: number;
  option: string;
};

const polls: Poll[] = [
  {
    id: 1,
    title: "What is your favorite language?",
    votes: [
      { id: 1, poll_id: 1, option: "Ruby" },
      { id: 2, poll_id: 1, option: "JavaScript" },
      { id: 3, poll_id: 1, option: "Python" }
    ]
  },
  {
    id: 2,
    title: "What is your favorite framework?",
    votes: [
      { id: 4, poll_id: 2, option: "Ruby on Rails" },
      { id: 5, poll_id: 2, option: "React" },
      { id: 6, poll_id: 2, option: "Django" }
    ]
  },
  {
    id: 3,
    title: "What is your favorite database?",
    votes: [
      { id: 7, poll_id: 3, option: "PostgreSQL" },
      { id: 8, poll_id: 3, option: "MySQL" },
      { id: 9, poll_id: 3, option: "SQLite" }
    ]
  },
  {
    id: 4,
    title: "What is your favorite programming paradigm?",
    votes: [
      { id: 10, poll_id: 4, option: "Object-Oriented" },
      { id: 11, poll_id: 4, option: "Functional" },
      { id: 12, poll_id: 4, option: "Procedural" }
    ]
  },
  {
    id: 5,
    title: "What is your OS",
    votes: [
      { id: 13, poll_id: 5, option: "Linux" },
      { id: 14, poll_id: 5, option: "Windows" },
      { id: 15, poll_id: 5, option: "MacOS" }
    ]
  },
  {
    id: 6,
    title: "What is your IDE?",
    votes: [
      { id: 16, poll_id: 6, option: "VSCode" },
      { id: 17, poll_id: 6, option: "RubyMine" },
      { id: 18, poll_id: 6, option: "Sublime Text" }
    ]
  },
  {
    id: 7,
    title: "What is your favorite cloud provider?",
    votes: [
      { id: 19, poll_id: 7, option: "AWS" },
      { id: 20, poll_id: 7, option: "Azure" },
      { id: 21, poll_id: 7, option: "Google Cloud" }
    ]
  },
  {
    id: 8,
    title: "What is your favorite version control system?",
    votes: [
      { id: 22, poll_id: 8, option: "Git" },
      { id: 23, poll_id: 8, option: "Subversion" },
      { id: 24, poll_id: 8, option: "Mercurial" }
    ]
  },
  {
    id: 9,
    title: "What is your favorite CI/CD tool?",
    votes: [
      { id: 25, poll_id: 9, option: "Jenkins" },
      { id: 26, poll_id: 9, option: "CircleCI" },
      { id: 27, poll_id: 9, option: "GitHub Actions" }
    ]
  },
  {
    id: 10,
    title: "What is your favorite testing framework?",
    votes: [
      { id: 28, poll_id: 10, option: "RSpec" },
      { id: 29, poll_id: 10, option: "Minitest" },
      { id: 30, poll_id: 10, option: "JUnit" }
    ]
  },
  {
    id: 11,
    title: "What is your favorite deployment tool?",
    votes: [
      { id: 31, poll_id: 11, option: "Capistrano" },
      { id: 32, poll_id: 11, option: "Heroku" },
      { id: 33, poll_id: 11, option: "Docker" }
    ]
  },
  {
    id: 12,
    title: "What is your favorite API style?",
    votes: [
      { id: 34, poll_id: 12, option: "REST" },
      { id: 35, poll_id: 12, option: "GraphQL" },
      { id: 36, poll_id: 12, option: "SOAP" }
    ]
  },
  {
    id: 13,
    title: "What is your favorite JavaScript framework?",
    votes: [
      { id: 37, poll_id: 13, option: "React" },
      { id: 38, poll_id: 13, option: "Vue.js" },
      { id: 39, poll_id: 13, option: "Angular" }
    ]
  }
];

export default polls;


