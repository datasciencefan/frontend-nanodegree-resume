/*
This is empty on purpose! Your code to build the resume will go here.
 */
var skills = ["Data Analysis", "Machine Learning", "Visualization", "Web Scraping", "Data Munging", "Tableau", "R Software", "Python", "NLP"];

var bio = {
	"name" : "Thomas Wong",
 	"role" : "Data Analyst",
 	"contact" : {
 		"email" : "thomaswong@berkeley.edu",
 		"phone" : "510-499-2610",
 		"location" : "Berkeley, CA, US"
 	},
 	"pic" : "images/profilePic.jpg",
 	"message" : "Nice to meet you!",
 	"skills" : skills
 };

 //$("#main").append(bio.name, bio.role, bio.email, bio.welcomeMessage, bio.skills);
 //$("#main").prepend(bio.bioPic);

var work = {
	"jobs": [
	{
		"employer": "Leidos",
		"title": "Data Analyst",
		"location": "Oakland, CA, US",
		"dates": "Jul 2014 - Present",
		"description": "Data collecting, cleaning, processing, and analysis for over 30 transit agencies in the Bay Area"
	},
	{
		"employer": "Seed",
		"title": "Hardware and Software Engineer",
		"location": "Hayward, CA, US",
		"dates": "Jan 2015 - Jun 2015",
		"description": "Hardware installation, software debugging, finances for startup"
	}
	]
};

var education = {
	"schools": [
	{
		"name": "John Hopkins University",
		"location": "Baltimore, MD, US",
		"degree": "Data Science Certification",
		"major": "Data Science",
		"dates": "May 2014 - May 2015",
		"url" : "www.udacity.com"
	},
	{
		"name": "UC Berkeley",
		"location": "Berkeley, CA, US",
		"degree": "MS",
		"major": "Transportation Engineering",
		"dates": "Aug 2013 - Dec 2014",
		"url" : "www.udacity.com"
	}
	],
	"online courses": [
	{
		"title": "MS",
		"school": "Transportation Engineering",
		"dates": "Aug 2013 - Dec 2014",
		"url" : "www.udacity.com"
	}
	]
};

var projects = {
	"projects": [
	{
		"title": "Next Word Predictor",
		"dates": "Dec 2014 - May 2015",
		"description": "Predict next word (like SwiftKey). Capstone project for Data Science Certification.",
		"images" : []
	},
	{
		"title": "Next Word Predictor",
		"dates": "Dec 2014 - May 2015",
		"description": "Predict next word (like SwiftKey). Capstone project for Data Science Certification.",
		"images" : []
	}
	]
};

var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
var formattedPic = HTMLbioPic.replace('%data%', bio.pic);
var formattedMessage = HTMLwelcomeMsg.replace('%data%', bio.message);

var formattedEmail = HTMLemail.replace('%data%', bio.contact.email);
var formattedMobile = HTMLmobile.replace('%data%', bio.contact.phone);
var formattedLocation = HTMLlocation.replace('%data%', bio.contact.location);

$('#header').append(formattedName, formattedRole, formattedPic, formattedMessage);
$('#topContacts').append(formattedMobile, formattedEmail, formattedLocation);

if(bio.skills.length > 0){
$('#header').append(HTMLskillsStart);

for(skill in bio.skills){
	HTMLskills = HTMLskills.replace('%data%', bio.skills[skill]);
	$('#skills').append(HTMLskills);
	HTMLskills = HTMLskills.replace(bio.skills[skill], '%data%');
};
};