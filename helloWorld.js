app = {

    developerName: "Jim",
    now:  new Date()
   };

let  displayDate = `${app.now.getMonth()}/${app.now.getDate()}/${app.now.getFullYear()}`;

console.log (`I am in the log. I am ${app.developerName} on ${displayDate}`);
