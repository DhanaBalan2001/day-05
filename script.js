var resumeData = {
    name: "dhanbalan",
    age: 23,
    email: "dana@gmail.com",
    phone: "1234567890",
    Qualification: "B.E.ECE"
    Project: "Hackathon"
    Language : "Tamil,English"
  };
  // for loop
  for (var key in resumeData) {
    if (resumeData.hasOwnProperty(key)) {
      console.log(key + ": " + JSON.stringify(resumeData[key]));
    }
  }
  //for..in loop
  for (var section in resumeData) {
    console.log(section + ": " + JSON.stringify(resumeData[section]));
    if (typeof resumeData[section] === 'object') {
      for (var subKey in resumeData[section]) {
        console.log("  " + subKey + ": " + JSON.stringify(resumeData[section][subKey]));
      }
    }
  }

  //for.of
  for (var element of Object.keys(resumedata)) {
    console.log(resumedata[element]);
}
//for-Each
for (const [key, value] of Object.entries(resumedata)) {
  console.log(`${key}: ${value}`);
}