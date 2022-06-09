1;
const addTitle = (newTitle) => {
  const text = document.createElement("h1");
  text.textContent = newTitle;
  document.body.prepend(text);
};

addTitle("Работа с DOM");

2;
const addLink = () => {
  const text = document.createElement("a");
  const main = document.getElementById("main");
  text.href = "https://learn.javascript.ru/dom-nodes";
  text.textContent = "newLink";

  main.append(text);
  console.log(text);
};
addLink();

3;
const newBack = (color) => {
  document.body.style.background = color;
};
newBack("red");

4;
const newText = () => {
  const text = document.createElement("li");
  const list = document.getElementById("list");
  text.textContent = "Новый текст";
  list.append(text);
};
newText();

5;
const delCopy = () => {
  const copy = document.getElementById("copyright");
  copy.remove("copyright");
};
delCopy();
