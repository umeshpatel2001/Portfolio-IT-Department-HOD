const data = [
	{
		Conference: `“LFNN: Lion Fuzzy Neural Network based Evolutionary model for Text 
		Classification using Context and Sense based Features” Applied soft computing 
		71(2018) 994-1008, Elsevier, July 2018. (SCI Indexed)`,
	},
	{
		Conference: `“Automatic text classification using BPLion-neural network and semantic word 
		processing” ISSN: 1368-2199 (Print) 1743-131X, Taylor & Francis, Sept. 2017.(SCI 
		Indexed)`,
	},
	{
		Conference: `“Evolutionary and Incremental Text Document Classifier using Deep Learning” 
		International Journal of Grid and Distributed Computing Vol. 14, No. 1, (2021), pp. 
		587-595 (Web of Science)
		`,
	},
	{
		Conference: ` “A Brief Survey on Text Document Classification”, International Journal of Future 
		Generation Communication and Networking, Vol. 13, No. 3s, (2020), pp. 568–575 
		(Web of Science)`,
	},
	{
		Conference: `“A Brief Survey of Machine Learning Algorithms for Text Document Classification 
		on Incremental Database”, Test Engineering & Management, ISSN: 0193-4120 Page 
		No. 25246 – 25251, May – June 2020, pp 25246 – 25251 (SCOPUS Indexed)`,
	},
	{
		Conference: `“PARKINSON’S DISEASE DETECTION USING MACHINE LEARNING”, 
		International Journal of Development Research, Vol. 12, Issue, 04, pp. 55117-55119, 
		April, 2022`,
	},
	{
		Conference: `“Detection of Parkinson’s Disease using Machine Learning Algorithm”, International 
		Journal of Computer Applications, Volume 184 – No.6, April 2022`,
	},
	{
		Conference: `“Implementation of Machine Learning Algorithm to Detect Credit Card Frauds”, 
		International Journal of Computer Applications, Volume 184 – No.1, March 2022`,
	},
	{
		Conference: `“Diagnosis of Parkinson Disease using Handwriting Analysis”, International Journal
		of Computer Applications, Volume 184 – No.1, March 2022`,
	},
	{
		Conference: `“A NOVEL APPROACH FOR DISEASE PREDICTION SCHEME FOR 
		HEALTHCARE MANAGEMENT”, IJRECE VOL. 8 ISSUE 2, ISSN: 2393-9028 
		(PRINT) | ISSN: 2348-2281 (ONLINE), pp 155-159, APR.-JUNE 2020`,
	},
	{
		Conference: `“A FRAMEWORK TO PREDICT THE ADVERTISE VIEW ABILITY BY USING 
		MACHINE LEARNING”, IJRECE VOL. 8 ISSUE 2, ISSN: 2393-9028 (PRINT) | 
		ISSN: 2348-2281 (ONLINE), pp 165-168, APR.-JUNE 2020
		`,
	},
	{
		Conference: `“AI ALGORITHM FOR HEALTH RISK PREDICTION”, JETIR, Volume 6, Issue 6, 
		SSN-2349-5162, pp 600-607, June 2019`,
	},
	{
		Conference: `“Survey paper on A Novel approach for Disease Prediction Scheme for Healthcare 
		Management”, JETIR June 2020, Volume 7, Issue 6, SSN-2349-5162, pp 1327-1332`,
	},
	{
		Conference: `“A Survey paper on framework to predict the advertise view ability by using machine 
		learning”, JETIR June 2020, Volume 7, Issue 6, ISSN-2349-5162, pp 1333-1336`,
	},
	{
		Conference: `“Text Document Classification using Convolutional Neural Networks” Journal of 
		emerging technologies and innovative research, ISSN-2349-5162, June 2020, Volume 
		7, Issue 6,pp 329-332`,
	},
	{
		Conference: `“A Brief Survey on Text Analytics Methods and Applications” Journal of Data 
		Mining and Management, Volume 6 Issue 3 pp 13-23, December 2021. `,
	},
	{
		Conference: `“Text Analytics: An Application of Text Mining” Journal of Data Mining and 
		Management, Volume 6 Issue 3 pp 1-6, December 2021. `,
	},
	{
		Conference: `“Smart Mirror: Google Assistant Enabled Mirror” Journal of Emerging Technologies 
		and Innovative Research, Volume 6, Issue 5, pp 292-297, May 2019`,
	},
	{
		Conference: `“Text Document Classification by using WordNet Ontology and Neural Network”, 
		International Journal of Computer Applications, Volume 182 – No. 33, December 
		2018
		`,
	},
	{
		Conference: `“Prediction of Seismic Activities in Coal Mines using Machine Learning”, 
		International Journal of Engineering Technology Science and Research, Volume 4, 
		Issue 11, Nov 2017, Nov.2017.`,
	},
	{
		Conference: `“IOT Based Irrigation Automation and Nutrients Recommendation System”, 
		International Journal of Innovations & Advancement in Computer Science, Volume 
		6, Issue 11, Nov 2017.`,
	},
	{
		Conference: `“Document Classification using LSTM Neural Network”, Journal of Data Mining 
		and Management, Volume 2 Issue 2, 2017`,
	},
	{
		Conference: `“Military Robot for Reconnaissance and Surveillance using Image Processing”, 
		International Research Journal of Engineering and Technology, Volume: 04 Issue: 05 
		pp 1767-1769, May -2017`,
	},
	{
		Conference: `“A Neural Network Approach for Text Document Classification and Semantic Text 
		Analytics”, Journal of Data Mining and Management, Volume 2 Issue 2, 2017
		`,
	},
	{
		Conference: `“A Survey on Techniques in NLP”, International Journal of Computer Applications 
		(0975 – 8887), Volume 134 – No.8, January 2016.`,
	},
	{
		Conference: `“Voice Interactive Home Automation System”, International Journal of Current 
		Research, Vol. 8, Issue, 06, pp.32456-32460, June 2016.`,
	},
	{
		Conference: `“MULTI-DOCUMENT SUMMARIZATION USING SIMILARITY MEASURES”, 
		International Journal of Current Research, Vol. 8, Issue, 06, pp.32430-32434, 2016.
		`,
	},
	{
		Conference: `“Automated Text Analytics and Classification of Text Document with Machine 
		Learning”, International Journal of Current Research, Vol. 8, Issue, 06, pp.32474-
		32477, 2016`,
	},
	{
		Conference: `“Genre Detection of Documents using Hybrid Techniques of Machine Learning”, 
		International Journal of Current Research, Vol. 8, Issue, 06, pp.32421-32425, 2016`,
	},
	{
		Conference: `“A Survey on Text Classification of Documents Using Hybrid Techniques of 
		Machine Learning”, Vol.2, Issue-1 , pp 6-11, 2016`,
	},
	{
		Conference: `“Automatic Text Document Summarization” International Journal of Research in 
		Applied Science and Technology, Volume 4 Issue I, pp 98-102 January 2016.`,
	},
	{
		Conference: `. “ Detection of Authenticity in Social Network”, International Journal of Research in 
		Applied Science and Technology Volume 3 Issue IV, April 2015`,
	},
	{
		Conference: `“Author Identification in Text Mining for Used in Forensics”, International Journal of 
		Research in Advent Technology, 2321-9637, Volume 1, Issue 5, 2015`,
	},
	{
		Conference: ` “Searching Relevant Documents from Large Volume of Unstructured Database”, 
		International Journal for Research in Applied science & engineering Technology, 
		2321-9653, volume 3, issue IV, 2015.`,
	},
	{
		Conference: `“Detection of Authenticity in Social Network”, International Journal for Research in 
		Applied science & engineering Technology, 2321-9653 Volume 3 Issue IV, 2015.`,
	},
	{
		Conference: `“Helping Hands: Enabling the Disabled”, International Journal of Soft Computing 
		and Engineering, 2231-2307, Volume 3, issue 5, 2015.`,
	},
	{
		Conference: `“A Survey on Text Analytics and Classification Techniques for Text Documents”, 
		International Journal of Development Research 2230-9926, Vol 5, Issue 11, pp 5952-
		5955 ,2015.`,
	},
	{
		Conference: ` “A Survey on Text Classification of Documents Using Hybrid techniques of machine 
		learning”, 2452-1363, Vol 2, Issue-1, pp 6-10,2015
		`,
	},
	{
		Conference: `“ROBUST REDUNDANT VIDEO GRADER”, International Journal of Advances in 
		Science Engineering and Technology, Volume- 1, Issue-3, Jan.-2014`,
	},
	{
		Conference: `“Universal PC Suite using AT Command”, International Conference on Emerging 
		Intelligent Sustainable Technologies, 978-93-81693-88-15, pp 2, 2013.`,
	},
	{
		Conference: `“MITRA: An Android Application for Image to Text Converter and Text to Feasible 
		Languages”, International Conference on Recent Trends in Engineering and 
		Technology, 978-93-82208-23-5, pp 77- 79, 2013.`,
	},
	{
		Conference: `“Ensuring Data Storage Security in Cloud Computing Using Ring Mechanism”, 
		International Conference on Recent Trends in Engineering and Technology, 978-93-
		82208-23-5, pp 77- 79, 2012.`,
	},
	{
		Conference: `“Face Emotion Detection”, International Conference on Advanced Engineering and 
		Technologies, GOA, 978-93-82702-12-2, PP 15-19, 2012.`,
	},
	{
		Conference: `“Flower Image Retrieval Based on Color & Shape Feature”, Research India 
		Publication, 0973-6107, Volume 2 , Number 3, 2009.`,
	},
];

export default data;
