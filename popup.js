let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let textArea = document.querySelector("textarea");
  let tweet = "";
  let hashtags = "";
  //finding hashtags, removing from the tweets
  // let str=textArea.value
  let hashsplit = textArea.value.split(" ");
  hashsplit.forEach((el) => {
    if (el[0] === "#") {
      if (hashtags === "") {
        hashtags = el.slice(1);
      } else {
        hashtags = hashtags + "," + el.slice(1);
      }
      //   let index = hashsplit.indexOf(el);
      //   hashsplit.splice(index, 1);
    } else {
      if (el.includes("#")) {
        if (hashtags === "") {
          hashtags = el.trim().slice(1);
        } else {
          hashtags = hashtags + "," + el.trimEnd().slice(1);
        }

        let index = hashsplit.indexOf(el);
        hashsplit.splice(index, 1);
      }
    }
  });

  tweet = hashsplit.filter((el) => el.trim()[0] !== "#").join(" ");

  //finding hashtags

  //   let twitterURL = `https://twitter.com/intent/tweet?text=${tweet}&hashtags=${hashtags}`;
  //   window.open(twitterURL);
  //   console.log(tweet);
  //   console.log("hashtags", hashtags);
  console.log("hashsplit", hashsplit);
  //   console.log("tweet", tweet);
  console.log("textArea.value", textArea.value);
});

// useEffect(()=>{
//     let toFetch=async ()=>{
//         // let response=await fetch('https://api.quotable.io/random');
//         let response=await fetch('https://type.fit/api/quotes');
//         let data=await response.json(); //returns an array of quotes
//         setQuote(data);
//         setLoad(false);
//     }
//     toFetch()
// },[])

// const twitte=()=>{
//   let twitterURL=`https://twitter.com/intent/tweet?text=${quote[random].text}`
//   window.open(twitterURL)
// }
