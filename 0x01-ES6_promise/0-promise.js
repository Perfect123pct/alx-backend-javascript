export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Perform asynchronous operation here
    // For demonstration purposes, let's resolve with a dummy response after a short delay
    setTimeout(() => {
      resolve("Dummy API response");
    }, 1000); // 1 second delay as an example
  });
}
