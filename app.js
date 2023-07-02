// Add event listeners to navigation links
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');
  
    navLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
  
        // Scroll to the corresponding section smoothly
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
  
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth',
          });
        }
      });
    });
  });
  
  // Add code editor functionality
  document.addEventListener('DOMContentLoaded', function () {
    const codeEditors = document.querySelectorAll('.code-editor');
  
    codeEditors.forEach(function (editor) {
      // Initialize code editor using a library like CodeMirror or Ace Editor
      // Example:
      // const cm = CodeMirror(editor, {
      //   lineNumbers: true,
      //   mode: 'javascript',
      //   theme: 'dracula',
      // });
  
      // Add event listener to execute code on button click
      const runButton = editor.querySelector('.run-button');
      const outputContainer = editor.querySelector('.output');
  
      runButton.addEventListener('click', function () {
        // Get code from the editor
        const code = editor.querySelector('.code').value;
  
        try {
          // Execute the code
          const output = eval(code);
  
          // Display the output
          outputContainer.textContent = output;
        } catch (error) {
          // Handle errors
          outputContainer.textContent = 'Error: ' + error.message;
        }
      });
    });
  });
  