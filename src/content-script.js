/*jshint esversion: 6 */
$(function () {
  const academic = {"A+":"4.6","A":"4.3","A-":"4.0","B+":"3.6","B":"3.3","B-":"3.0",
    "C+":"2.6","C":"2.3","C-":"2.0","D+":"1.6","D":"1.3","E":"0.0"
  };
  const honors = {"A+":"5.6","A":"5.3","A-":"5.0","B+":"4.6","B":"4.3","B-":"4.0",
    "C+":"3.6","C":"3.3","C-":"3.0","D+":"2.6","D":"2.3","E":"0.0"
  };
  const advanced = {"A+":"6.1","A":"5.8","A-":"5.5","B+":"5.1","B":"4.8","B-":"4.5",
    "C+":"4.1","C":"3.8","C-":"3.5","D+":"3.1","D":"2.8","E":"0.0"
  };

  const halfYear = ["Financial Literacy", "AP Macro", "AP Micro"];

  const health = ["Health", "Safety"];

  const physEd = ["Physical Ed"];

  const grades_and_classes = $("table[class='list']")[0].rows;

  let grades = [];
  let courses = [];
  let credits = [];
  let gpas = [];
  let total_credits = 0;
  let qualityPoints = 0;

  const ifValid = (name, grade) => {
    return (
      grade.indexOf("No Grades") == -1 &&
      grade.indexOf("Not Graded") == -1 &&
      grade.indexOf("Missing") == -1 &&
      grade.length > 0
    );
  };

  for(let i = 1; i < grades_and_classes.length; i++) {
    let name = grades_and_classes[i].cells[0].innerText;
    let grade = grades_and_classes[i].cells[3].innerText.replace(/[^A-F+-]/g, '');
    if(ifValid(name, grade)) {
      courses.push(name);
      grades.push(grade);
    }
  }

  for(let i = 0; i < courses.length; i+=1){
    if(halfYear.indexOf(courses[i]) > -1){
      credits.push("2.5");
      total_credits += 2.5;
      console.log(courses[i]);
    }
    else if(health.indexOf(courses[i]) > -1){
      credits.push("1.25");
      total_credits += 1.25;
      console.log(courses[i]);

    }
    else if(physEd.indexOf(courses[i]) > -1){
      credits.push("3.75");
      total_credits += 3.75;
      console.log(courses[i]);

    }
    else{
      credits.push("5");
      total_credits += 5;
      console.log(courses[i]);
    }
  }

  for(let i = 0; i < courses.length; i+=1){
    if(courses[i].indexOf("AP") > -1){
      gpas.push(advanced[grades[i]]);
    }
    else if((courses[i].indexOf("Honors") > -1) || (courses[i].indexOf("Advanced") > -1)){
      gpas.push(honors[grades[i]]);
    }
    else{
      gpas.push(academic[grades[i]]);
    }
  }

  for(let i = 0; i < courses.length; i+=1){
    qualityPoints += gpas[i] * credits[i];
  }

  let gpa = qualityPoints / total_credits;

  $("p[style='text-align: center']").remove();
  $("#gpa").remove();
  let html = '<h1 id="gpa" style="color:#ffffff;background-color:#222222;height:10px;text-align:center;line-height:100px;width:50px;margin:0 auto;margin-top:10px;  box-shadow: 2px 2px 4px rgba(0, 0, 0, .4);"> GPA: ';
  html += gpa.toFixed(3);
  html += "</h1>";
  setTimeout(function(){
    $('p[class="sectionTitle"]').append($(html));
    gpaDiv = $("#gpa");
    gpaDiv.animate({height: '100px', opacity: '0.6'}, "slow");
    gpaDiv.animate({width: '250px', opacity: '1'}, "fast");
    }, 1500);
});
