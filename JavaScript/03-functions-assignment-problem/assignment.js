const sayHello = (phrase, name) => phrase + name;
const sayHello1 = () => `Hi hardcoded`;
const sayHello2 = name => `Hi ${name}`;
const sayHello3 = (phrase = "Hi", name = "Max") => phrase + name;

function checkInput(cb) {
  if (arguments.length === 0) {
    cb();
  }
}
