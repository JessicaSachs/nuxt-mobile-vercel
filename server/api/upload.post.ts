export default defineEventHandler(async (event) => {
  console.log(`Entering upload.post.ts`);
  let formData;
  try {
    formData = await readMultipartFormData(event);
    console.log(`Parsed the formData without throwing up. Sweet. It's ${formData}`);
  } catch (err) {
    console.error(`This isn't great. ${{ err }}`);
  }

  console.log(`Responding with whatever formData is now.`);
  return formData;
});
