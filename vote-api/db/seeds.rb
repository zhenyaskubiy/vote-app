poll = Poll.create!(title: "What is your favorite language?")
poll.votes.create!(option: "Ruby")
poll.votes.create!(option: "JavaScript")
poll.votes.create!(option: "Python")

poll2 = Poll.create!(title: "What is your favorite framework?")
poll2.votes.create!(option: "Ruby on Rails")
poll2.votes.create!(option: "React")
poll2.votes.create!(option: "Django")

poll3 = Poll.create!(title: "What is your favorite database?")
poll3.votes.create!(option: "PostgreSQL")
poll3.votes.create!(option: "MySQL")
poll3.votes.create!(option: "SQLite")

poll4 = Poll.create!(title: "What is your favorite programming paradigm?")
poll4.votes.create!(option: "Object-Oriented")
poll4.votes.create!(option: "Functional")
poll4.votes.create!(option: "Procedural")

poll5 = Poll.create!(title: "What is your OS")
poll5.votes.create!(option: "Linux")
poll5.votes.create!(option: "Windows")
poll5.votes.create!(option: "MacOS")

poll6 = Poll.create!(title: "What is your IDE?")
poll6.votes.create!(option: "VSCode") 
poll6.votes.create!(option: "RubyMine")
poll6.votes.create!(option: "Sublime Text")

poll7 = Poll.create!(title: "What is your favorite cloud provider?")
poll7.votes.create!(option: "AWS")
poll7.votes.create!(option: "Azure")  
poll7.votes.create!(option: "Google Cloud")

poll8 = Poll.create!(title: "What is your favorite version control system?")
poll8.votes.create!(option: "Git")
poll8.votes.create!(option: "Subversion")
poll8.votes.create!(option: "Mercurial")

poll9 = Poll.create!(title: "What is your favorite CI/CD tool?")
poll9.votes.create!(option: "Jenkins")
poll9.votes.create!(option: "CircleCI")
poll9.votes.create!(option: "GitHub Actions")

poll10 = Poll.create!(title: "What is your favorite testing framework?")
poll10.votes.create!(option: "RSpec")
poll10.votes.create!(option: "Minitest")
poll10.votes.create!(option: "JUnit")

poll11 = Poll.create!(title: "What is your favorite deployment tool?")
poll11.votes.create!(option: "Capistrano")
poll11.votes.create!(option: "Heroku")
poll11.votes.create!(option: "Docker")


poll12 = Poll.create!(title: "What is your favorite API style?")
poll12.votes.create!(option: "REST")
poll12.votes.create!(option: "GraphQL")
poll12.votes.create!(option: "SOAP")


poll13 = Poll.create!(title: "What is your favorite JavaScript framework?")
poll13.votes.create!(option: "React")
poll13.votes.create!(option: "Vue.js")
poll13.votes.create!(option: "Angular")

