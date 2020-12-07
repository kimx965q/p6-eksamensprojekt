// credit w3schools

let q = document.getElementsByClassName("question");
let i;

// START FAQ accordion kode

for (i = 0; i < q.length; i++) {
    q[i].addEventListener("click", function() {
      /* Skifter mellem at tilføje eller fjerne "active" class, 
      for at skifte farve på den knap, der kontrollerer, om man kan se svaret */
      this.classList.toggle("active");
  
      // Henholdsvis gem eller vis det aktive svar
      let answer = this.nextElementSibling;
      if (answer.style.display === "block") {
        answer.style.display = "none";
      } else {
        answer.style.display = "block";
      }
      // Animeret slide down
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  }

  // SLUT FAQ accordion kode


  // START search bar kode

  function myFunction() {
    // Erklær variable
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = document.getElementsByClassName("search_item");
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

  // SLUT search bar kode