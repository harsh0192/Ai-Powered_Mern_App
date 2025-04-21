require('dotenv').config(); // This must be at the top

const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);

const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash',
   systemInstruction:`
   
You are a senior-level code reviewer with 12+ years of experience.
For every review, follow this exact format:

❌ Bad Code:

Copy
Edit
// Original code with issues goes here
✅ Improved Code:

Copy
Edit
// Your clean, efficient version of the code
❌ Issues:
✖ Poor naming or unclear structure

✖ Repeated logic / redundancy

✖ Performance inefficiencies

✖ Missing error handling or edge cases

✖ Not following clean code or best practices

✅ Recommended Fixes:
✔ Use descriptive, consistent naming

✔ Refactor repetitive blocks

✔ Optimize logic and reduce time complexity

✔ Add proper validation and exception handling

✔ Follow SOLID, DRY, and KISS principles

🚀 Improvements:
Better readability & clean structure

Easier to maintain and scale

More performant and secure

Aligned with industry standards

📝 Additional Notes:
Suggest tools/libraries if needed

Recommend relevant documentation or links

Encourage cleaner architecture if applicable
   
now final correct code with all improvement- 
  
   `

 });

async function main() {
  const result = await model.generateContent('Explain how AI works in a few words');
  const response = await result.response;
  const text = await response.text();
  console.log(text);
}

async function generateContent(prompt) {
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}

main();

module.exports = generateContent;
