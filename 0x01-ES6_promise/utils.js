import asyncUploadUser from './100-await.js';

async function someOtherFunction() {
  const result = await asyncUploadUser();
  console.log(result);
}

someOtherFunction();
