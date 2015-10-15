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

var formattedEducation = HTMLeducation.replace('%data%', education);
var formattedProjects = HTMLprojects.replace('%data%', projects);

var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span><hr/>';

/* use the below with the var lines above and the classes below for appending to add all info!

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';

*/

$('#header').append(formattedName, formattedRole, formattedPic, formattedMessage);
$('#lets-connect').append(formattedMobile, formattedEmail, formattedLocation);

if(bio.skills.length > 0){
$('#skills-h3').append(HTMLskillsStart);

for(skill in bio.skills){
	HTMLskills = HTMLskills.replace('%data%', bio.skills[skill]);
	$('#skills-h3').append(HTMLskills);
	HTMLskills = HTMLskills.replace(bio.skills[skill], '%data%');
};

$('#workExperience').append(formattedEducation);
$('#projects').append(formattedProjects);

}; // end of file