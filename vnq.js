const snowflakesContainer = document.querySelector("#snowflakesContainer");

function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.style.left = Math.random() * window.innerWidth + "px";
  snowflake.style.animationDuration = Math.random() * 5 + 5 + "s";
  snowflakesContainer.appendChild(snowflake);
}

setInterval(createSnowflake, 1000);

const texts = document.querySelectorAll('.text-container p');

let delay = 0;
texts.forEach(text => {
  setTimeout(() => {
    text.classList.add('show');
  }, delay);
  delay += 500;
});

const textArray = ['Gửi em',
'Người con gái anh thương',
'Em chính là lý do mà mỗi ngày của anh trở nên ngọt ngào và ý nghĩa',
'Cảm ơn em đã luôn yêu thương anh vô điều kiện',
'Cảm ơn em vì vẫn luôn ở đây',
'Chúc em Valentine vui vẻ và hạnh phúc nhé!',
'             '];
let currentLine = 0;
function displayText() {
  if (currentLine<7)
  {
    document.getElementById('textContainer').innerHTML = textArray[currentLine];
  }
  currentLine++;

  // if (currentLine >= textArray.length) {
  //   currentLine = 0;
  // }
}

setInterval(displayText, 4000);



const clickmail = document.querySelector('.icon')
clickmail.addEventListener("click", function()
{
  window.location.href="index1.html"
})


// sau khi ấn vào text
const clickbutton = document.querySelector('#box')
  clickbutton.addEventListener("click", function(){
    document.querySelector('.container').style.display = "flex"
  })

