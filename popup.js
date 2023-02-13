let btn = document.querySelector("button");

let textArea = document.querySelector("#tweet");
let hashtagsvalue = document.querySelector("#hashtags");

textArea.addEventListener("input", count);
hashtagsvalue.addEventListener("input", count);

btn.addEventListener("click", () => {
  if (textArea.value.length + hashtagsvalue.value.length > 279) {
    console.log("Limit reached");
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
    //   console.log(tweet);
    //   console.log("hashtags", hashtags);
    console.log("hashsplit", hashsplit);
    console.log("hashtags", hashtags);
    //   console.log("tweet", tweet);
    console.log("textArea.value", textArea.value);
  }
});

function count() {
  let countPara = document.querySelector("#count");
  let length = textArea.value.length + hashtagsvalue.value.length;
  countPara.innerHTML = length;
  if (length === 280) {
    countPara.innerHTML = 0;
  } else if (length > 280) {
    countPara.innerHTML = 280 - length;
  }
}
