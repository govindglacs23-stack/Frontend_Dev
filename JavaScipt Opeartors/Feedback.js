let fb="Great product! Fast delivery and amazing sound quality!";
let words=fb.split(" ").length;
if(fb.toLowerCase().includes("bad")||fb.toLowerCase().includes("poor")){
  console.log("Needs Improvement");
}else{
  console.log("Positive Feedback");
}
console.log(words);