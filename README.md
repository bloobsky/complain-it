#######################################################

<h3>>Version Control</h3>

<h5>>This Project uses Semantic Versioning (https://semver.org/)</h5>

-->0.2.4 -- Added Datetime stamp in 'Complain a job form'

-->0.2.3 -- Button stylised in editcat.html

-->0.2.2 -- README.md file beautified

-->0.2.1 -- Documentation included in README.md

-->0.2 <strong>[STABLE]</strong> -- Stable version of Complain It with all the functions working. 

-->0.1.13 -- Changed label for job description

-->0.1.12 -- Fixed minor issues with delete job function

-->0.1.11 -- Adjusted for proper displaying of new function

-->0.1.10 -- Added function Delete in 'Complain for a job section'

-->0.1.9 -- search_for.html update (removed unneccesary paragraph) 

-->0.1.8 -- Added  'media queries' for photos uploaded to be presented differently on all devices

-->0.1.7 -- App.py beautified and removed unneccesary code

-->0.1.6 -- Removed duplicate 'viewport' in base.html

-->0.1.5 -- Added EuroSymbol€ next to the 'value' form

-->0.1.4 -- Fixed Issue with 'uploaded_by' not displaying properly

-->0.1.3 -- Different Job Types Added Using inner form

-->0.1.2 -- Logo dimensions adjusted in order to present it @ smaller devices

-->0.1.1 -- Added Value field in complain a job subpage

-->0.1 <strong>[STABLE]</strong> -- All functionalities working now perfectly 

->0.0.42 -- Photos can be uploaded now to MongoDB

->0.0.41 -- Complain a Job works perfectly now

->0.0.40 -- search_for.html available

->0.0.39 -- App.py preperad for handling 'Complain a Job' and files upload

->0.0.38 -- Complain.html adjusted & beautified

->0.0.37 -- Complain.html fixed > Added JS into init.js

->0.0.36 -- Complain.html updated ** add_job.html added

->0.0.35 -- Changed init.js file

->0.0.34 -- Fixed indent issue in App.py

->0.0.33 -- Added Comments in App.py

->0.0.32 -- Added media-queries for Logo to be presented properly on smaller devices

->0.0.31 -- Buttons in Categories adjusted

->0.0.30 -- Edit Category function available

->0.0.29 -- Buttons in Categories stylised

->0.0.28 -- Fixed Issue with Add Category

->0.0.27 -- Function 'Add Category' available

->0.0.26 -- Changed the way of displaying in Categories subpage

->0.0.25 -- .html files for categories and App.py updated

->0.0.24 -- Categories Subpage Added

->0.0.23 -- Added sendMail.js and updated contact section

->0.0.22 -- Added Categories into a Home Page

->0.0.21 -- How it works subpage added

->0.0.20 -- Frequently Asked Questions subpage added

->0.0.19 -- Privacy Policy Subpage Added

->0.0.18 -- File directions.html filled with information & map.js uploaded

->0.0.17 -- Added ability of dynamic Title Pages in App.py

->0.0.16 -- * .html files prepared for Flask

->0.0.15 -- Fixed bug [missing brackets ]in App.py 

->0.0.14 -- Added rest of .html files (blank)

->0.0.13 -- Added base.html

->0.0.12 -- App.py & Index.html prepared for Flask

->0.0.11 -- Changed directory structure in order to work for Flask

->0.0.10 -- app.py file expanded and also it hides passwords from the public

->0.0.9 -- Added Procfile for Heroku development

->0.0.8 -- Added requirements.txt file

->0.0.7 -- Added file app.py

->0.0.6 -- File index.html upgrade

->0.0.5 -- Added Logos (.jpg & .png )

->0.0.4 -- CSS file added

->0.0.3 -- .js files from materialize added

->0.0.2 -- Index.html added

->0.0.1 -- Initial Commit with README.md file


<h3>Project Info</h3>

Complain It is a fully functional web apllication that allows user to add information about recent job done by a trademan in order to approve or complain it so other user can take advantage of their experience and may decide whetever to do with their house project.

Complain a local tradesman if the job he/she did is not good enough, so other people can rely on your experience and they can avoid unnecessary hustle.

We are a non-profit organisation that helps people with selecting proper tradesman for a certain job. It allows user to see other job whenever they are good or bad. Our application will always be for FREE.

<h3>UX</h3>

Page is divided into 6 anchor points that are available from navigation menu located at the top of the page. Also there is 3 anchor point that are located in the footer sections

TOP:

Home -- Homepage it show the general information about project

How it works -- Show how the proposed project works

Search for complained job -- Ability to check the database for posts that were uploaded to the website.

Complain a job -- Ability to publish some information about job.

Categories -- fully functional menu that allows to add/modify or delete existing categories.

FAQ - Frequently Asked Questions

FOOTER:

Privacy Policy -- Information how your data is used by our company

Contact Us -- Ability to send an email to our office using emailJS component

Directions -- How to approach our office using Google Maps API



As a homeowner, I want to look for a jobs done by tradesman in order to proceed with mine.

As a contractor, I want to search for bad jobs in order to look for a good tradesman.

As a DIY guy, I want to look for inspirations using the application provided.

As a housewife, I often looking for refurbishments and the application can show me which tradesman NOT to hire.

As a man, I often would like to see other handyman job, especially if they were executed badly.

As a enterpreneur I would like my handymans deliver good job, so their job would not be presented on that website.


<h3>Testing</h3>
Website was tested using 3 devices: Desktop PC, Tablet (Samsung a300) and smartphone (Samsung s8+ EDGE). Website was also tested using Inspect function in Google Chrome
HTML and CSS Validator were also used in place.


<h3>>Deployement</h3>
Using Git Command Line to upload to a repository

Type in terminal these commands:
git init to initialize a new repository
git add README.md to add README.md file to repository
git commit -m "Initial commit" to add a message for first commitement.
git remote add origin https://github.com/bloobsky/your_repository_name.git to assign repository
git push -u origin master to upload files to the repository


<h3>Project is deployed @ GitHub.</h3>
Github was used in deployement process as it is integrated, simple and ther is no need to use additional services.
It also containt Version Control and everything is uploaded using terminal commands (git)

<h3>How it is done ?</h3>

Open www.github.com.
Login with your credentials
On the Navigation Bar in the repository you would like to deploy look for 'settings' link.
Scroll down the page and look for 'GitHub Pages'
Under the source section select 'master branch' option
Message should appear 'Your site is ready to be published at https://$YourLogin.github.io/$RepositoryName/
Your website is deployed now.

<h3>Technologies,Programming Languages and APIs</h3>

HTML5, CSS, Materialize, JavaScript, jQuery, Python, Flask with (PyMongo, dnspython), MongoDB, GoogleFonts
API: emailJS and Google Maps API

<h3>Features to be implemented</h3>


Ability to edit an already posted job. 
Login possibilities in further use of website.
Form checkup in jQuery in order not to publish empty fields. 


<h3>Media</h3>

Screenshots for testing were done by using SnippingTool @ MS Windows
ComplainIt logo was created in Adobe Illustrator.
Icons used in Project are part of Materialize (www.materialize.com)

<h3>Acknowledgements</h3>

I received inspiration from CodeInstitute (www.codeinstitute.net)
Privacy Policy was generated using www.iubenda.com
MongoDB Atlas - for possibility to create a free database
Gitpod was used to entirely written all the code for the proposed project.