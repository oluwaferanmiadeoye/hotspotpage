//  Menu button
 
 document.addEventListener("DOMContentLoaded", function () {
const menuBtn = document.querySelector(".menu-btn");
const menuIcon = menuBtn.querySelector("i");
const navMenu = document.querySelector(".main-menu");

menuBtn.addEventListener("click", function () {
navMenu.classList.toggle("show"); 
menuIcon.classList.toggle("fa-bars"); 
menuIcon.classList.toggle("fa-arrow-left");
  });
});

// Login form

  document.querySelectorAll(".input-group").forEach((group) => {
                const input = group.querySelector(".input-field");
                const label = group.querySelector(".input-label");
              
                input.addEventListener("focus", () => {
                  label.classList.add("placeholder");
                });
              
                input.addEventListener("blur", () => {
                  if (input.value.trim() === "") {
                    label.classList.remove("placeholder");
                  }
                });
              });
                   


              // Popup


              function openPopup(id) {
                let popup = document.getElementById(id);
                popup.style.display = "flex"; 
                setTimeout(() => popup.classList.add("active"), 10); 
                document.body.classList.add("popup-active");
            }
            
            function closePopup(id) {
                let popup = document.getElementById(id);
                popup.classList.remove("active"); 
                
                
                setTimeout(() => {
                    popup.style.display = "none";
                    document.body.classList.remove("popup-active");
                }, 300);
            }
            
            
            window.onclick = function (event) {
                if (event.target.classList.contains("popup")) {
                    closePopup(event.target.id);
                }
            };
            
           
            document.addEventListener("DOMContentLoaded", function () {
                document.querySelectorAll(".popup").forEach((popup) => {
                    popup.style.display = "none";
                });
            });



            document.querySelectorAll('.faq-question').forEach(item => {
              item.addEventListener('click', () => {
                  const parent = item.parentElement;
                  parent.classList.toggle('active');
                  const answer = parent.querySelector('.faq-answer');
                  if (answer.style.display === "block") {
                      answer.style.display = "none";
                  } else {
                      answer.style.display = "block";
                  }
              });
          });
        
        