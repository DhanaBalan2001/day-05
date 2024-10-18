var resumeData = {
  Name: "Dhanbalan",
  Age: 23,
  "Email ID": "dana@gmail.com",
  "Phone no": "1234567890",
  Qualification: "B.E. ECE",
  Project: ["Hackathon", "Hotel Booking App"],
  Language: ["Tamil", "English"],
  Skills: ["JavaScript", "Python", "React", "Node.js"],
  Experience: [
    { company: "Tech Solutions", position: "Software Engineer", years: "2022 - Present" },
    { company: "Code Innovators", position: "Intern", years: "2021 - 2022" }
  ],
  Hobbies: ["Coding", "Reading", "Gaming"],
  Achievements: ["First Place in Hackathon", "Certified JavaScript Developer"]
};// Get the output element
  const output = document.getElementById('output');

// 1. For loop (Iterating over language array)
output.innerHTML += "<h2>Languages (For loop):</h2>";
for (let i = 0; i < resumeData.Language.length; i++) {
  output.innerHTML += resumeData.Language[i] + "<br>";
}

// 2. For...in loop (Iterating over basic info, excluding arrays and objects)
output.innerHTML += "<h2>Basic Information (For...in loop):</h2>";
for (let key in resumeData) {
  if (typeof resumeData[key] !== 'object') { // Skip objects and arrays
    output.innerHTML += `${key}: ${resumeData[key]}<br>`;
  }
}

// 3. For...of loop (Iterating over experience array)
output.innerHTML += "<h2>Work Experience (For...of loop):</h2>";
for (const job of resumeData.Experience) {
  output.innerHTML += `${job.company} - ${job.position} (${job.years})<br>`;
}

// 4. forEach loop (Iterating over skills array)
output.innerHTML += "<h2>Skills (forEach loop):</h2>";
resumeData.Skills.forEach(skill => {
  output.innerHTML += skill + "<br>";
});

// 5. Additional For loop (Iterating over achievements array)
output.innerHTML += "<h2>Achievements (For loop):</h2>";
for (let i = 0; i < resumeData.Achievements.length; i++) {
  output.innerHTML += resumeData.Achievements[i] + "<br>";
}

// 6. forEach (Iterating over hobbies array)
output.innerHTML += "<h2>Hobbies (forEach loop):</h2>";
resumeData.Hobbies.forEach(hobby => {
  output.innerHTML += hobby + "<br>";
});
