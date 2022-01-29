console.log(window.swbook);
// js-t ide
const tBody = document.querySelector("#tBody");

/**
 * Create the table with document.createElement
 *
 * @param {Array<SWCharacter>} database
 */
function renderTable(database) {
  for (let i = 0; i < database.length; ++i) {
    let newTr = document.createElement("tr");
    let newTd = document.createElement("td");
    let newTd2 = document.createElement("td");

    newTr.append(newTd, newTd2);
    newTd.innerText = database[i].name;
    newTd2.innerText = database[i].gender;
    tBody.append(newTr);

    newTr.addEventListener("click", function (event) {
      console.log(newTr);
      console.log(database[i].birth_year);
    });
  }
}

/**
 * Create the table with string literal and innerHTML
 *
 * @param {Array<SWCharacter>} database
 */
function renderTableAsStringLiteral(database) {
  for (let i = 0; i < database.length; ++i) {
    tBody.innerHTML += `
      <tr data-index="${i}">
        <td> ${database[i].name} </td>
        <td> <strong> ${database[i].gender} </strong></td>
      </tr>
    `;
  }
}

// renderTable(window.swbook);
renderTableAsStringLiteral(window.swbook);

tBody.addEventListener("click", function (event) {
  let row = event.target;
  while (row.nodeName !== "TR") {
    row = row.parentElement;
  }
  const index = Number(row.dataset.index); // row.getAttribute('data-index')
  const character = window.swbook[index];
  console.log(character);
});
let modal = document.querySelector('.modal')
let modalCloseElement = document.querySelector(".modalClose");
let modalDivElement = document.querySelector(".modal-background");

modalCloseElement.addEventListener("click", function(event) {
  let removeForm = document.querySelectorAll('.formStyle')
  removeForm.forEach((e)=>{
    e.remove()
  })
  modalDivElement.classList.remove("open");
  modalDivElement.classList.add("closing");
  modalDivElement.addEventListener("transitionend", () => {
    modalDivElement.classList.remove("closing");
  });

  
});
 

const modalOpen = document.querySelector("#modalOpen");

modalOpen.addEventListener("click", () => {
  modalDivElement.classList.add("open");

  let newForm = document.createElement('form')
  newForm.classList.add('formStyle')
  newForm.innerHTML = `
    <input type="text" placeholder="name" id="name"><br>
    <input type="text" placeholder="height" id="height"><br>
    <input type="text" placeholder="mass" id="mass"><br>
    <input type="text" placeholder="hair_color" id="hair_color"><br>
    <input type="text" placeholder="skin_color" id="skin_color"><br>
    <input type="text" placeholder="eye-color" id="eye-color"><br>
    <input type="text" placeholder="birth_year" id="birth_year"><br>
    <input type="text" placeholder="gender" id="gender"><br>
    <button type"button"> Add </button>
  `
  modal.append(newForm)

});
