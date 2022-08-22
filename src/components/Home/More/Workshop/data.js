const data = [
	{
		Workshop: `Attended one week FDP on “ AI Diving in IoT and Computer Vision” Organized by 
		JSPM RSCOE, Jan 2022
		`,
	},
	{
		Workshop: `Participated in one week FDP on “ Outcome Based Pedeagogy for Effective Teaching 
		and Learning in Engineering Education” Organized by SKN SCOE, Pandharpur, June 
		2021
		`,
	},
	{
		Workshop: `Attended one week FDP on “OUTCOME BASED EDUCATION: A STEP TOWARDS
		EXCELLENCE” organized by Govt. Engg. College Karad under AICTE Margdarshan
		Scheme, May 2020`,
	},
	{
		Workshop: `Attended TEQIP - III Sponsered one Week Online Faculty Development Program on 
		“Machine Learning and Deep Learning Applications in Engineering & Science” May 
		2020`,
	},
	{
		Workshop: `Attended TEQIP - III Sponsered One week online FDP on “Industry 4.0, Data Analytics, 
		Disruptive Technologies” May 2020
		`,
	},
	{
		Workshop: ` Attended ONLINE INTERNATIONAL CONFERENCE ON EDUCATION FOR SOCIAL 
		COHESION, July 2020`,
	},
	{
		Workshop: `Attended one week National Online Teacher/Faculty Development Program (FDP) E-Learning and ICT Tools for Effective Teaching- Learning, June 2020`,
	},
	{
		Workshop: `Attended Two Weeks Faculty Development Program on “Data Science and its 
		Research Challenges” from 6th Nov- 19th Nov 2017 at Coimbatore, Tamiladu`,
	},
	{
		Workshop: `Attended one week workshop on “Research Methodology & Thesis Writing for 
		Engineering Scholars” from 12th
		- 16th June 2017 at SKNCOE, Pune`,
	},
	{
		Workshop: `Attended two days workshop on “Software Modeling and Testing” from 20th
		– 21st
		January 2017 at PICT, Pune. `,
	},
	{
		Workshop: `Attended one day workshop on “Research Paper writing: Tips & Track” on 6th
		February 2017, SKNCOE, Pune`,
	},
	{
		Workshop: `Attended one day workshop on “Content Preparation Using Latex” on 15th July 2016 
		at SKNCOE, Pune`,
	},
	{
		Workshop: ` Attended one day FDP on “A Foundation on Data Science using Statistica” on 21st
		August 2017 at IOIT, Pune`,
	},
	{
		Workshop: `Attended two weeks STTP on “Accreditation of Technical Institutes” from 1st
		- 13th
		February 2016 at SITS, Pune.`,
	},
	{
		Workshop: `Attended two days workshop on “Research Methodology” from 9th
		-10th October 2015 
		at SITS, Pune`,
	},
	{
		Workshop: `Attended two days FDP on “Software Design Methodologies and Testing” from 11th
		–
		12th December 2015 at BSCOER, Pune.`,
	},
	{
		Workshop: `Attended two days state level FDP on “Emerging Research Trends in Computing, 
		Communication & Storage” from 27th
		-28th January 2017 at ZCOER, Pune`,
	},
	{
		Workshop: ` Attended two days seminar on “Data Mining and Optimization Techniques in 
		Computer Engineering” from 11th
		-12th December 2014 at AISSMS, Pune`,
	},
	{
		Workshop: `Attended one week “Train the Trainer Program on Discrete Mathematics” from 2nd
		-
		6
		th June 2014 at SKNCOE, Pune`,
	},
	{
		Workshop: `Attended one day workshop on “Question Bank Preparation and Paper Setting 
		Methodology” for S.E Computer Engineering (2012 Course) on 2nd April 2014 at 
		SAE,Pune.
		`,
	},
	{
		Workshop: `Attended one week “Train the Trainer Program for the subject Data Base 
		Management System “from 17th
		– 22nd June 2013 at SKNCOE, Pune.`,
	},
	{
		Workshop: `Attended one week “Train the Trainer Program for the subject Finance Management 
		Information System” form 9th
		– 14th December 2013 at RMDSCOE, Pune.`,
	},
	{
		Workshop: `Attended two week AICTE sponsored Faculty Development Program on “Machine
		Learning and Data Mining Approaches: A Research Perspective” from 28th march- 6
		th
		April 2013 at COEP, Pune`,
	},
	{
		Workshop: `Attended two days state level workshop on “Cloud Computing” from 26th
		– 27th
		September 2013 at IOIT, Pune.
		`,
	},
	{
		Workshop: `Attended one day Faculty Development Program on “Discrete Structure” on 20th July 
		2013 at Anantrao Pawar COE, Pune`,
	},
	{
		Workshop: `Attended one week Faculty Development Program on “Cloud Computing Technology 
		& Its Application” from 20th
		-24th March 2013 at PDACE, Gulbarga`,
	},
	{
		Workshop: `Attended one day Faculty Development Program on “Current Research Trend in 
		Computer Engineering” from 16th March 2012 at Modern COE, Pune`,
	},
	{
		Workshop: ` Attended two days Faculty Development Program on “Business Intelligence and 
		Analytics” from 28th & 29th June 2012 organized by Persistent systems, Pune.
		`,
	},
	{
		Workshop: `Attended one day workshop on “How to Convert Research into Patent” on 5th
		November 2011 at COEP, Pune.
		`,
	},
	{
		Workshop: `Attended three days “Faculty Orientation Program” from 21st
		-23rd December 2011 at 
		SITS, Pune.
		`,
	},
	{
		Workshop: `Attended one week “Mission 10X” workshop from 22nd
		-26th November 2010 
		organized by WIPRO at SCOE, Pune`,
	},
	{
		Workshop: `Attended one week Short Term Training Program on “Network and Information 
		Security” from 20th
		-25th October 2010 at MIT, Pune.
		`,
	},
	{
		Workshop: `Attended four days workshop on “Object Oriented Analysis and Design using UML 
		with Essentials of Rational Software Architect” from 27th
		-30th November 2010 at SITS, 
		Pune`,
	},
	{
		Workshop: `Attended two days workshop on “High Impact Teaching Skill” from 22nd
		-23rd
		November 2010 organized by WIPRO at SCOE, Pune`,
	},
	{
		Workshop: `Attended on day workshop on “Implementation of Communication and Language 
		Laboratory “ on 18th July 2009 at VIIT, Pune.`,
	},
	{
		Workshop: `Attended three days workshop on “Change in Work Style with Soft Skill” from 8th
		–
		9
		th November 2008 at RSCOE, Pune.
		`,
	},
	{
		Workshop: ` Attended two days Faculty Development Program on “Enabling the Guru” from 17th
		–
		18th January 2008 at Navi Mumbai.`,
	},
	{
		Workshop: `Attended two days seminar on “Mobile and Pervasive Computing” from 24th
		-25th
		November 2006 at PDACOE, Gulbarga`,
	},
	{
		Workshop: `Attended one week Faculty Development Program on “Software Testing & Quality 
		Assurance” from 13th
		– 18th june 2005 at SKNCOE, Pune.
		`,
	},
	{
		Workshop: `Attended three days Faculty Orientation Program “Orientation Program for 
		Engineering College Teachers” form 11th
		-13th July 2003.`,
	},
];

export default data;
