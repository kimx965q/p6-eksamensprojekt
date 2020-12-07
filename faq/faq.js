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
  

  // SLUT search bar kode