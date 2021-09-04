function chk() {
  var score = 0;
  var q1rightans = document.getElementById("q1-a1");
  var q1ans2 = document.getElementById("q1-a2");
  var q1ans3 = document.getElementById("q1-a3");
  var q1ans4 = document.getElementById("q1-a4");
  if (q1rightans.checked == true) {
    //checked is a predefine function
    score++;
    alert("Q1 answer right ! ");
  } else {
    alert("answer is wrong !");
  }
  var q2rightans = document.getElementById("q2-a1");
  var q2ans2 = document.getElementById("q2-a2");
  var q2ans3 = document.getElementById("q2-a3");
  var q2ans4 = document.getElementById("q2-a4");
  if (q2rightans.checked == true) {
    //checked is a predefine function
    score++;
    alert("Q2 answer right ! ");
  } else {
    alert("answer is wrong !");
  }
  var q3rightans = document.getElementById("q3-a1");
  var q3ans2 = document.getElementById("q3-a2");
  var q3ans3 = document.getElementById("q3-a3");
  var q3ans4 = document.getElementById("q3-a4");
  if (q3rightans.checked == true) {
    //checked is a predefine function
    score++;
    alert("Q3 answer right ! ");
  } else {
    alert("answer is wrong !");
  }
  alert("your score is "+score);
}
