// utils/validationUtils.js

// Function to validate an email address format
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Function to validate a password format (example: at least 8 characters)
  const isValidPassword = (password) => {
    return password.length >= 8;
  };

  module.exports = {
    isValidEmail,
    isValidPassword,
  };
