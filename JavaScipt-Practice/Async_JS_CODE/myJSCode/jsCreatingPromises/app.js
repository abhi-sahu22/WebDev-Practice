const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const random = Math.random();
        setTimeout(() => {
            if (random < 0.7) {
                resolve(`Your fake random number is ${random}.`)
            }
            reject("REQUEST ERROR!")
        }, 1000)
    })
}

fakeRequest("/dog/1")
    .then((data) => {
        console.log("DONE WITH REQUEST!", data)
    })
    .catch((err) => {
        console.log("OH NO,", err)
    })

//!==============================================

//^ DELAYED COLOR CHANGE FUNCTION WITH CALLBACK
// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//     }, delay)
// }

// delayedColorChange('red', 1000, () => {
//     delayedColorChange('orange', 1000, () => {
//         delayedColorChange('yellow', 1000, () => {
//             delayedColorChange('green', 1000, () => {
//                 delayedColorChange('blue', 1000, () => {
//                     delayedColorChange('indigo', 1000, () => {
//                         delayedColorChange('violet', 1000, () => {

//                         })
//                     })
//                 })
//             })
//         })
//     })
// }); 

//!================================================
//^ USING PROMISE

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

// delayedColorChange('red', 1000)
//     .then(() => {
//         return delayedColorChange("orange", 1000);
//     })
//     .then(() => {
//         return delayedColorChange("yellow", 1000)
//     })

//^===============OR (We can do this- implicit return)=============

delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('indigo', 1000))
    .then(() => delayedColorChange('violet', 1000))