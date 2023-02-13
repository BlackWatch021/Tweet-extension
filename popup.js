let btn = document.querySelector("button");

let textArea = document.querySelector("#tweet");
let hashtagsvalue = document.querySelector("#hashtags");

textArea.addEventListener("input", count);
hashtagsvalue.addEventListener("input", count);

btn.addEventListener("click", () => {
  if (textArea.value.length + hashtagsvalue.value.length > 279) {
  } else {
    let textArea = document.querySelector("#tweet");
    let hashtagsvalue = document.querySelector("#hashtags");
    let tweet = "";
    let hashtags = "";
    //finding hashtags, removing from the tweets
    let hashsplit = hashtagsvalue.value.split(" ");
    hashsplit.map((el) => {
      if (el !== "") {
        if (el[0] === "#") {
          if (hashtags === "") {
            hashtags = el.slice(1);
            el.s;
          } else {
            hashtags = hashtags + "," + el.slice(1);
          }
        } else if (hashtags === "") {
          hashtags = el;
        } else {
          hashtags = hashtags + "," + el;
        }
      }
    });

    hashtags.trim();

    //finding hashtags

    let twitterURL = `https://twitter.com/intent/tweet?text=${textArea.value}&hashtags=${hashtags}`;
    window.open(twitterURL);
  }
});

function count() {
  let countPara = document.querySelector("#count");
  let length = textArea.value.length + hashtagsvalue.value.length;
  countPara.innerHTML = length;
  if (length === 280) {
    countPara.innerHTML = 0;
    countPara.innerHTML = 280 - length;
    countPara.style.borderColor = "red";
    countPara.style.color = "red";
    countPara.style.fontWeight = "600";
    btn.style.opacity = ".6";
    btn.style.cursor = "default";
    btn.disabled = true;
  } else if (length > 280) {
    countPara.innerHTML = 280 - length;
    countPara.style.borderColor = "red";
    countPara.style.color = "red";
    countPara.style.fontWeight = "600";
    btn.style.opacity = ".6";
    btn.disabled = true;
    btn.style.cursor = "default";
  } else {
    countPara.style.borderColor = "rgb(29, 155, 240)";
    countPara.style.color = "black";
    countPara.style.fontWeight = "100";
    btn.style.cursor = "pointer";
    btn.style.opacity = "1";
    btn.disabled = false;
  }
}
