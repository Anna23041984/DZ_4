//За допомогою prompt запитати “ім'я користувача”.
//За допомогою alert вивести "Hello, John! How are you?" , де “John” це те, що ввів користувач

let Name = prompt("What's your name?: ");
if (Name !== null) {
    console.log(`Your name is: ${Name}`);
  } else {
    console.log("Write your name, please!");
  }

  alert(`Hello ${Name}! How are you?`);