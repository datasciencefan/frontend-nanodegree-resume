/*
This is empty on purpose! Your code to build the resume will go here.
 */
var skills = ["Data Analysis", "Machine Learning", "Visualization", "Web Scraping", "Data Munging", "Tableau", "R Software", "Python", "NLP"];

var bio = {
	"name" : "Thomas Wong",
 	"role" : "Data Analyst",
 	"email" : "thomaswong@berkeley.edu",
 	"bioPic" : "images/profilePic.jpg",
 	"welcomeMessage" : "Nice to meet you!",
 	"skills" : skills
 };

 //$("#main").append(bio.name + '&#xA;', bio.role + '&#xA;', bio.email + '&#xA;', bio.welcomeMessage + '&#xA;', bio.skills + '&#xA;');
 //$("#main").prepend(bio.bioPic + '&#xA;');

var work = {
	"jobs": [
	{
		"employer": "John Hopkins University",
		"title": "Baltimore, MD, US",
		"location": "Data Science Certification",
		"dates": "Data Science",
		"description": "Data Science"
	},
	{
		"name": "UC Berkeley",
		"city": "Berkeley, CA, US",
		"degree": "MS",
		"major": "Transportation Engineering"
	}
	]
}

var education = {
	"schools": [
	{
		"name": "John Hopkins University",
		"city": "Baltimore, MD, US",
		"degree": "Data Science Certification",
		"major": "Data Science"
	},
	{
		"name": "UC Berkeley",
		"city": "Berkeley, CA, US",
		"degree": "MS",
		"major": "Transportation Engineering"
	}
	]
}