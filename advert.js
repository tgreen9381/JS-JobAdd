let placeOfWork = 'Cambridge';
let jobTitle = "JavaScript Developer";
let technicalSkills = ["JavaScript", "React", "jQuery", "Bootstrap", "Git"];
let annualRemuneration = [35000, " to ", 70000, " DOE"];

function jobAd (salary, location, skills, title){
	console.log(`I am looking for a ${title} based in ${location} but does offer remote working and can pay ${salary}`);
	console.log(`If you have the following skills and want to find out more please get in touch; ${skills}`);
	}

jobAd(annualRemuneration, placeOfWork, technicalSkills, jobTitle);
