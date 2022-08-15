const clickBtn = document.getElementById("clickBtn");
const popup = document.getElementById("popup");
const popup2 = document.querySelector(".popup")
const popupBtn = document.getElementById("popupBtn");

let i = 0;

clickBtn.addEventListener('click', ()=>{
    popup.style.display = 'block';
});


/* In this case the popup with a white background opens after clicking the button "Click",
then after clicking "BUTTON", it changes to black, back to white and then closes.
 */
popupBtn.addEventListener('click', ()=>{
        i++;
        console.log(i);
        if (i === 1) {
            popup2.style.backgroundColor = '#000000';
        }
        else if (i === 2) {
            popup2.style.backgroundColor = '#ffffff';
        }
        else if (i === 3) {
            popup.style.display = 'none';
            i = 0;
        }
    }
);


/* In this case, the popup with a white background opens after clicking the button "Click",
than after clicking "BUTTON" it changes to black and back to white over and over again.
 */
// popupBtn.addEventListener('click', ()=> {
//     i++;
//     console.log(i);
//     if (i === 1) {
//         popup2.style.backgroundColor = '#000000';
//     } else if (i === 2) {
//         popup2.style.backgroundColor = '#ffffff';
//         i = 0;
//     }
// });


/* In this case, the popup with a white background opens after clicking the button "Click",
and closes after clicking the button "BUTTON".
 */
// popupBtn.addEventListener('click', ()=>{
//     popup.style.display = 'none';
// });