// utils/errorHandler.js

// Function to create a standardized error response
const createErrorResponse = (statusCode, message) => {
    return {
      success: false,
      error: {
        statusCode,
        message,
      },
    };
  };

  module.exports = {
    createErrorResponse,
  };
