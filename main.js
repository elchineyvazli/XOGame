let xoContainer = document.querySelector(".xoContainer");
let winPopup = document.createElement("div");
let restartButton = document.createElement("div");
winPopup.classList = "winPopup";
restartButton.classList = "restartButton";
winPopup.innerText = "You Won!";
restartButton.innerText = "Restart";
xoContainer.appendChild(winPopup);
winPopup.appendChild(restartButton);
winPopup.style.display = "none";

let partButtons = document.querySelectorAll('.part');
let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
let xoArr = [...arr.flat()]
// let xoArr = [...arr]
let usedArr = [10]
let random = 10;

for (let i = 0; i < partButtons.length; i++) {
    partButtons[i].innerHTML = `<h1>${i}</h1>`
}

for (let i = 0; i < partButtons.length; i++) {
    let count = 0;
    let fakeCount = 0;
    partButtons[i].addEventListener('click', () => {
        for (let q = 0; q < xoArr.length; q++) {
            if (xoArr[i] == "X" || xoArr[i] == "O") {
                fakeCount++;
            }
        }
        // console.log(`usedArr.length : ${usedArr.length}`);
        if (fakeCount == 0) {
            if (usedArr.length == 9) {
                for (let k = 0; k < 9; k++) {
                    winPopup.style.display = "none";
                    xoArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
                    usedArr = [10]
                    for (let i = 0; i < partButtons.length; i++) {
                        partButtons[i].innerHTML = `<h1>${i}</h1>`
                    }
                }
            } else {
                partButtons[i].innerText = "X";
                console.log(`i : ${i}`);

                for (let j = 0; j < usedArr.length; j++) {
                    if (i != usedArr[j]) {
                        usedArr.push(i);
                        break;
                    }
                }

                do {
                    count = 0;
                    random = Math.floor(Math.random() * partButtons.length);
                    for (let j = 0; j < usedArr.length; j++) {
                        if (random == usedArr[j]) {
                            count += 1;
                        }
                    }
                    console.log("count : " + count);
                    if (count > 0) {
                        console.log("count > 0");
                    } else {
                        console.log("count = 0");
                        for (let j = 0; j < xoArr.length; j++) {
                            xoArr[random] = "O"
                        }
                        partButtons[random].innerText = "O";
                    }
                    console.log("usedArr : " + usedArr);
                }

                while (count > 0)
                usedArr.push(random);
                xoArr[i] = "X";
                //* WINNING
                if (xoArr[0] == "X" && xoArr[4] == "X" && xoArr[8] == "X") {
                    winPopup.style.display = "flex";
                    winPopup.innerText = "You Won!"
                    winPopup.appendChild(restartButton);
                }
                else if (xoArr[2] == "X" && xoArr[4] == "X" && xoArr[6] == "X") {
                    winPopup.style.display = "flex";
                    winPopup.innerText = "You Won!"
                    winPopup.appendChild(restartButton);
                }
                else if (xoArr[0] == "X" && xoArr[3] == "X" && xoArr[6] == "X") {
                    winPopup.style.display = "flex";
                    winPopup.innerText = "You Won!"
                    winPopup.appendChild(restartButton);
                }
                else if (xoArr[1] == "X" && xoArr[4] == "X" && xoArr[7] == "X") {
                    winPopup.style.display = "flex";
                    winPopup.innerText = "You Won!"
                    winPopup.appendChild(restartButton);
                }
                else if (xoArr[2] == "X" && xoArr[5] == "X" && xoArr[8] == "X") {
                    winPopup.style.display = "flex";
                    winPopup.innerText = "You Won!"
                    winPopup.appendChild(restartButton);
                }
                else if (xoArr[0] == "X" && xoArr[1] == "X" && xoArr[2] == "X") {
                    winPopup.style.display = "flex";
                    winPopup.innerText = "You Won!"
                    winPopup.appendChild(restartButton);
                }
                else if (xoArr[3] == "X" && xoArr[4] == "X" && xoArr[5] == "X") {
                    winPopup.style.display = "flex";
                    winPopup.innerText = "You Won!"
                    winPopup.appendChild(restartButton);
                }
                else if (xoArr[6] == "X" && xoArr[7] == "X" && xoArr[8] == "X") {
                    winPopup.style.display = "flex";
                    winPopup.innerText = "You Won!"
                    winPopup.appendChild(restartButton);
                }

                //! LOSES
                else if (xoArr[2] == "O" && xoArr[4] == "O" && xoArr[6] == "O") {
                    winPopup.style.display = "flex";
                    winPopup.innerText = "You Lost!"
                    winPopup.appendChild(restartButton);
                }
                else if (xoArr[0] == "O" && xoArr[3] == "O" && xoArr[6] == "O") {
                    winPopup.style.display = "flex";
                    winPopup.innerText = "You Lost!"
                    winPopup.appendChild(restartButton);
                }
                else if (xoArr[1] == "O" && xoArr[4] == "O" && xoArr[7] == "O") {
                    winPopup.style.display = "flex";
                    winPopup.innerText = "You Lost!"
                    winPopup.appendChild(restartButton);
                }
                else if (xoArr[2] == "O" && xoArr[5] == "O" && xoArr[8] == "O") {
                    winPopup.style.display = "flex";
                    winPopup.innerText = "You Lost!"
                    winPopup.appendChild(restartButton);
                }
                else if (xoArr[0] == "O" && xoArr[1] == "O" && xoArr[2] == "O") {
                    winPopup.style.display = "flex";
                    winPopup.innerText = "You Lost!"
                    winPopup.appendChild(restartButton);
                }
                else if (xoArr[3] == "O" && xoArr[4] == "O" && xoArr[5] == "O") {
                    winPopup.style.display = "flex";
                    winPopup.innerText = "You Lost!"
                    winPopup.appendChild(restartButton);
                }
                else if (xoArr[6] == "O" && xoArr[7] == "O" && xoArr[8] == "O") {
                    winPopup.style.display = "flex";
                    winPopup.innerText = "You Lost!"
                    winPopup.appendChild(restartButton);
                } else {
                    console.log("xo ---" + xoArr);
                }
            }
        }
        console.log("______________");
    })
}
restartButton.addEventListener('click', () => {
    winPopup.style.display = "none";
    usedArr = [10]
    xoArr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    for (let i = 0; i < partButtons.length; i++) {
        partButtons[i].innerHTML = `<h1>${i}</h1>`
    }
})