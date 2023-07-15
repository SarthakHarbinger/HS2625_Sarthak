document.addEventListener('DOMContentLoaded', function() {
    // Get the navigation element
    const nav = document.querySelector('nav');
  
    // Get all the navigation links
    const navLinks = nav.querySelectorAll('a');
  
    // Get all the sections
    const sections = document.querySelectorAll('section');
  
    // Function to hide all sections
    function hideAllSections() {
      sections.forEach(function(section) {
        section.style.display = 'none';
      });
    }
  
    // Function to show a specific section
    function showSection(sectionId) {
      const targetSection = document.getElementById(sectionId);
      targetSection.style.display = 'block';
    }
  
    // Hide all sections except the first one
    hideAllSections();
    showSection(sections[0].id);
  
    // Add click event listener to the navigation element (event delegation)
    nav.addEventListener('click', function(event) {
      event.preventDefault();
      const targetLink = event.target;
  
      // Check if the clicked target is a navigation link
      if (targetLink.tagName === 'A') {
        const targetSectionId = targetLink.getAttribute('href').substring(1);
  
        // Show the clicked section and hide the rest
        sections.forEach(function(section) {
          if (section.id === targetSectionId) {
            section.style.display = 'block';
          } else {
            section.style.display = 'none';
          }
        });
      }
    });
  });
  




  function validateForm() {
    // Perform additional validations here
    // Return true if form is valid, false otherwise
    // You can use if statements, regular expressions, etc.
    var username = document.getElementById("username").value;
        var age = document.getElementById("age").value;
        var name = document.getElementById("input-name").value;
        var email = document.getElementById("input-email").value;
        var subject = document.getElementById("input-subject").value;
        var message = document.getElementById("input-message").value;


        if (username.trim() === "") {
            alert("Please enter your name.");
            return false;
        }
        if (name.trim() === "") {
            alert("Please enter your name.");
            return false;
        }
        if (email.trim() === "" || !validateEmail(email)) {
            alert("Please enter a valid email address.");
            return false;
        }
        if (subject.trim() === "") {
            alert("Please enter a subject.");
            return false;
        }
        if (message.trim() === "") {
            alert("Please enter your message.");
            return false;
        }



        

    // Example: Validate phone number (10 digits)
    var phoneNumber = document.getElementById("Phno").value;
    if (!/^\d{10}$/.test(phoneNumber)) {
      alert("Please enter a valid phone number.");
      return false;
    }

    // Example: Validate age (between 18 and 100)
    var age = parseInt(document.getElementById("age").value);
    if (age < 1 || age > 100) {
      alert("Please enter a valid age between 18 and 100.");
      return false;
    }

    // Add more validations as needed

    return true; // Submit the form if all validations pass
  }

