window.addEventListener("load", () => {

    let subcontents = document.querySelectorAll(".subcontent")
    let links = document.querySelectorAll(".sidebar a");

    let temporary = links[0];

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", (e) => {
            e.preventDefault();

            temporary.style.fontSize = "2rem";

            temporary = e.target;
            temporary.style.fontSize = "2.5rem";
        })
    }

    let temporary2 = subcontents[0];

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", (e) => {
            e.preventDefault();

            temporary2.style.display = "none";

            temporary2 = subcontents[i];
            temporary2.style.display = "block";
        })
    }



    let num = document.querySelector("#num1");
    let numimg = document.querySelector("#num2");

    num.innerHTML = `${dbs.length}`;

    let usersWithImg = [];

    for (let i = 0; i < dbs.length; i++) {
        if (dbs[i].imageurl !== undefined) {
            usersWithImg.push(dbs[i]);
        }
    }

    numimg.innerHTML = `${usersWithImg.length}`;



    let table = document.querySelector(".admintable");
    let fninput = document.querySelector("#fullname");
    let uninput = document.querySelector("#username");
    let pinput = document.querySelector("#picture");
    let einput = document.querySelector("#email");

    for (let i = 0; i < dbs.length; i++) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");
        let deleteButton = document.createElement("button");
        let changeButton = document.createElement("button");
        table.append(tr);
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        tr.append(td5);
        tr.append(td6);
        tr.append(td7);
        td1.innerHTML = dbs[i].id
        td2.innerHTML = dbs[i].fullname
        td3.innerHTML = dbs[i].username
        td4.innerHTML = dbs[i].isimage
        td5.innerHTML = dbs[i].email
        td6.append(deleteButton);
        td7.append(changeButton);
        deleteButton.innerHTML = "Delete";
        changeButton.innerHTML = "Change";

        deleteButton.addEventListener("click", () => {
            deleteButton.parentElement.parentElement.remove();

            for (let j = 0; j < dbs.length; j++) {
                if (dbs[j].id == td1.innerHTML) {
                    dbs.splice(j, 1);
                }
            }

            num.innerHTML = `${dbs.length}`;

            let usersWithImg = [];

            for (let i = 0; i < dbs.length; i++) {
                if (dbs[i].imageurl !== undefined) {
                    usersWithImg.push(dbs[i]);
                }
            }

            numimg.innerHTML = `${usersWithImg.length}`;
            console.log(dbs)
        })

        changeButton.addEventListener("click", () => {
            idStorage.splice(0, 1);

            fninput.value = "";
            uninput.value = "";
            pinput.value = "";
            einput.value = "";

            fninput.value = td2.innerHTML;
            uninput.value = td3.innerHTML;
            pinput.value = td4.innerHTML;
            einput.value = td5.innerHTML;

            idStorage.push(Number(td1.innerHTML));
        })


        let usersul = document.querySelector(".usersul")


        let liOut = document.createElement("li");
        let mya = document.createElement("a");
        mya.innerHTML = dbs[i].fullname;
        liOut.append(mya);
        let mydiv = document.createElement("div");
        liOut.append(mydiv);
        mydiv.classList.add("sub2");
        let ulIN = document.createElement("ul");
        mydiv.append(ulIN);
        let liIN = document.createElement("li");
        ulIN.append(liIN);
        let dropSaveButton = document.createElement("button");
        liIN.append(dropSaveButton);
        dropSaveButton.classList.add("dropsave")
        dropSaveButton.innerHTML = "Save"
        usersul.append(liOut);

    }

    let saveButton = document.querySelector("#savebutton");
    let trs = table.children

    saveButton.addEventListener("click", (e) => {
        e.preventDefault();

        for (let j = 0; j < trs.length; j++) {
            if (j > 0 && idStorage[0] === Number(trs[j].children[0].innerHTML)) {
                trs[j].children[1].innerHTML = fninput.value;
                trs[j].children[2].innerHTML = uninput.value;
                trs[j].children[3].innerHTML = ("true" === pinput.value);
                trs[j].children[4].innerHTML = einput.value;
            }
        }

        for (let i = 0; i < dbs.length; i++) {
            if (idStorage[0] === dbs[i].id) {
                dbs[i].fullname = fninput.value;
                dbs[i].username = uninput.value;
                dbs[i].picture = ("true" === pinput.value);
                dbs[i].email = einput.value;

                fninput.value = "";
                uninput.value = "";
                pinput.value = "";
                einput.value = "";
            }
        }
        console.log(dbs);
    })




})