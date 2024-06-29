# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
<!-- 
Tech-Driven Solution for Undertrial Prisoners in India
SIH1282
Software Configuration Management Report

 1. Identification of Configuration Items
 1.1 Core Functionalities
•	Resource Management: Tools for managing legal resources, prisoner information, and support resources. Includes databases for legal documents, prisoner profiles, and resource tracking.
•	Review Workflow: Workflow for reviewing legal cases, rehabilitation progress, and resource allocation, ensuring each case is tracked from initiation to resolution.
•	User Management: Management of user roles, access control, and user data, including authentication mechanisms, role-based access control, and data privacy measures.
 1.2 Supporting Functionalities
•	Search and Filtering: Advanced search capabilities, including full-text search, metadata filtering, and user-defined search parameters.
•	Reporting and Analytics: Tools for generating reports and performing data analysis to monitor system performance, user engagement, and identify trends.
•	Notification System: System for sending notifications to users regarding updates, due dates, and penalties via SMS, and in-app notifications.
 2. Promotion Management
 2.1 Version Control and Branching
•	Version Control System: Implement Git for tracking changes and maintaining code integrity with distributed version control.
•	Branching Strategy: Develop a branching strategy for feature development, bug fixes, and releases.
 2.2 Preparing for Open-Source Release
•	Code Review and Security Audit: Conduct thorough code reviews and security audits using automated tools for static code analysis and vulnerability scanning.
•	Documentation: Prepare comprehensive documentation for developers and users, including API documentation, user guides, and setup instructions.
 2.3 Promotion and Community Building
•	Open-Source Platform Selection: Choose a platform like GitHub or GitLab for collaborative development and issue tracking.
Tech Driven Solutions for Undertrial Prisoners in India
SIH 1282
Software Requirements Specification

1. Introduction
1.1 Purpose
•	This document outlines the software requirements for a tech driven solution aimed at addressing the challenges faced by undertrial prisoners in India. The solution focuses on enhancing access to legal aid, improving justice accessibility, and supporting rehabilitation efforts.
1.2 Scope
•	The scope of this report is confined to the software components of the solution. It encompasses functionalities related to legal aid, remote court access, prisoner management, rehabilitation programs, security, and user interfaces. Hardware components and specific implementations will be detailed in supplementary documents.
•	This report will provide a better understanding of term Which will be used for defining this project Such as Dashboard, where he/she can find his data like hearing date, real time update, due time and penalty amount. 
•	This report also include legal contact such as lawyer, human rights, police and administration.
•	In his or her rehabilitation program, they can find their educational support, mental health support, physical health support and resources, and as well as economical support
1.3 Definitions, Acronyms, and Abbreviations
•	AI (Artificial Intelligence): Technology simulating human intelligence in machines.
•	API (Application Programming Interface): Protocols for building and interacting with software applications.
•	UI (User Interface): The means through which a user interacts with a computer, software, or application.
•	NLP (Natural Language Processing): AI subfield focused on the interaction between computers and humans through natural language.
1.4 References
•	Government of India legal frameworks
•	National Legal Services Authority (NALSA)wine = st.radio(
          "What wine do you prefer?\n\n", ["Red", "white", "None"], key="wine", horizontal=True
        )

PROJECT='qwiklabs-gcp-00-9dfcb4262045'
REGION='us-central1'

python3 -m venv gemini-streamlit
source gemini-streamlit/bin/activate
python3 -m pip install -r requirements.txt
streamlit run chef.py --browser.serverAddress=localhost --server.enableCORS=false --server.enableXsrfProtection=false --server.port 8080

vi Dockerfile

shift+alt+:-> wq -> enter

AR_REPO='chef-repo'
SERVICE_NAME='chef-streamlit-app'
gcloud artifacts repositories create "$AR_REPO" --location "$REGION" --repository-format=Docker
gcloud builds submit --tag "$REGION-docker.pkg.dev/$PROJECT/$AR_REPO/$SERVICE_NAME"
gcloud run deploy "$SERVICE_NAME" --port=8080 --image="$REGION-docker.pkg.dev/$PROJECT/$AR_REPO/$SERVICE_NAME" --allow-unauthenticated --region=$REGION --platform=managed --project=$PROJECT --set-env-vars=PROJECT=$PROJECT,REGION=$REGION 
•	Prison statistics reports
1.5 Intended Audiences	
•	This programme will target prisoners, Police Department, Government authorities, to maintain and observe the prisoners.
•	Princess can also cheque their case details legal professionals and sentence length etc.
•	Legal professionals such as lawyers, police and human rights also have access to this app application.
1.6 Overview
•	The tech driven solution aims to bridge the gap in the legal system by providing real-time legal aid, facilitating remote court access, and supporting rehabilitation programs for undertrial prisoners. This comprehensive solution leverages AI, secure communication, and data management to enhance the overall efficiency and effectiveness of the justice system.
2. General Description
•	Factors such as the type of case or the Acts, which are applied on the prisoners whether it is CRPC or IPC.
•	Involvement of local authorities or any higher authorities may affect the procedure of this application
2.1 Product Perspective
The solution targets the following primary users:
•	Legal Aid Providers: Lawyers and legal organizations offering assistance to undertrial prisoners.
•	Prison Administrators: Authorities managing prisoner records and rehabilitation programs.
•	Undertrial Prisoners: Individuals awaiting trial who require legal aid and support for their cases.
•	Judicial Authorities: Judges and court officials facilitating remote court sessions and hearings.
2.2 Product Functions
The software will include the following key functionalities:
•	Registration function:
	In these prisoners can register their cases
	Govt authorities also register themselves
•	Login function
	Login function for government authorities
	Login function for prisoners
•	Case detail
	Case type, sentence length and  Acts/Rules
	Document submission and management.
•	Family member
	This will contain the relation of prisoners and family members
	Detail of family members such as name and contact number
•	Legal professional
	Realtime access to legal advice and case management.
	Secure video conferencing for court hearings.
•	Dashboard 
	Comprehensive prisoner records management.
	Monitoring and scheduling of court appearances.
•	Rehabilitation Programs:
	Educational and vocational training modules.
	Mental health and counselling services.
2.3 User Classes and Characteristics
•	Registration page: prisoners can register their case detail with family member, such as their prisoner id contact number, age, gender and name
•	Login page: For the prisoner it will require prisoner ID password. Administrator It will require username and password
•	Case detail: it included type of case name of case sentence length and the matter of case the rules and acts which applied to the prisoner
•	Family member: this will include the name, relation and the contact number of the family member which is present currently with the prisoners in the court or in other sessions
•	Legal contact: This will include the name of the lawyer, His/her experience and specialisation and the rating of the handled cases in his/her past
•	Dashboard: this will include the hearing data of prisoners its real time, update of any hearing also the due time of any penalties or any compensation given by court It’s also include the amount of penalty
•	Legal professionals: This will include human rights, police and administrator where prisoners can connect with them
•	Rehabilitation program: This will include the educational mental health, physical health and resources data
2.4 General Constraints
•	Network Connectivity: Reliable internet access is essential for real-time communication and data access.
•	Data Privacy: Ensuring the confidentiality of sensitive legal and personal data.
•	System Compatibility: Integration with existing prison and court management systems.
2.5 Assumptions and Dependencies
•	Assumptions:
	Users have access to necessary hardware and internet connectivity.
	Legal frameworks support the use of technology for court hearings and legal aid.
•	Dependencies:
	The system depends on the availability and reliability of internet and communication infrastructure.
	Collaboration with legal authorities and organizations for successful implementation.
3. Specific Requirements
3.1 External Interface Requirements
3.1.1 User Interfaces (UI)
•	Web Interface:
	Accessibility: The web interface is accessible through standard web browsers, allowing users to easily manage their cases from any device with internet access.
	Key Features: It includes robust case management tools, video conferencing capabilities for remote consultations and court appearances, secure document submission for legal filings, and scheduling features to manage court dates and appointments efficiently.
•	Mobile App Interface:
	Compatibility: The mobile app is designed for compatibility with both ios and Android devices, ensuring broad accessibility for users.
	Key Features: The app provides real-time notifications to keep users informed about their case status and upcoming court dates. It offers access to legal aid services, allowing prisoners to connect with lawyers and legal professionals.
	The app enables participation in remote court sessions, facilitating greater flexibility and reducing the need for physical presence in courtrooms.
3.1.2 Hardware Interfaces
•	Video Conferencing Equipment:
	Integration: The system integrates with cameras and microphones to facilitate high-quality remote court sessions. This allows prisoners to attend hearings and consultations without needing to be physically present, ensuring safety and reducing logistical challenges.
	Features: The video conferencing setup supports multiple participants, enabling effective communication between prisoners, lawyers, judges, and family members. It also includes options for recording sessions for legal records and reviews.
•	Biometric Devices:
	Integration: The solution offers optional integration with biometric devices, such as fingerprint scanners and facial recognition systems, to ensure secure prisoner identification and access control.
	Features: Biometric verification enhances security by providing accurate identification, reducing the risk of identity fraud. It streamlines access to the system for authorized users, including prisoners, legal professionals, and administrators. The use of biometrics also ensures compliance with legal and institutional security standards.
3.1.3 Software Interfaces
•	Apis:
	Integration: The system incorporates apis (Application Programming Interfaces) to interface with existing legal databases, court management systems, and educational platforms. This ensures that data can be efficiently shared and utilized across different systems, providing a unified and comprehensive view of a prisoner's case and legal status.
	Features: apis enable real-time data synchronization, ensuring that the latest information is always available to users. They support a variety of functionalities, including retrieving case details, updating court schedules, accessing educational resources, and more. This integration enhances the system's efficiency and reduces the need for manual data entry.
•	Data Exchange Formats:
	Standardization: The system uses standard data exchange formats such as JSON (javascript Object Notation) and XML (extensible Markup Language) to facilitate seamless integration with other systems. These formats are widely accepted and used in the industry, ensuring compatibility and ease of integration.
	Features: JSON and XML formats support structured data representation, making it easy to parse and process information. This standardization enables smooth communication between the solution and external systems, ensuring data integrity and consistency. It also allows for efficient data exchange, reducing the risk of errors and ensuring that all stakeholders have access to accurate and up-to-date information.
3.1.4 Communications Interfaces
•	Data Transmission Channels:
	Secure Internet Connections: The system utilizes secure internet connections for all data transmission activities, ensuring that sensitive information is protected during transit. By leveraging secure channels, the solution minimizes the risk of data breaches and unauthorized access, providing a reliable and safe environment for users to manage and access their legal information.
•	Data Security:
	TLS/SSL Protocols: The implementation of TLS (Transport Layer Security) and SSL (Secure Sockets Layer) protocols ensures secure communication between the system's components. These protocols encrypt data transmitted over the internet, preventing unauthorized parties from intercepting or modifying the information. TLS/SSL protocols provide end-to-end encryption and include authentication mechanisms to verify the identity of communicating parties, further enhancing security.
3.2 Functional Requirements
	3.2.1.1 Registration Page
•	3.2.1.2 Inputs
	Prisoner ID
	Contact number
	Age
	Gender
	Name
	Family member details
•	3.2.1.3 Processing
	Validation of input data
	Storing prisoner and family member details in the database
•	3.2.1.4 Outputs
	Confirmation of successful registration
	User account creation
•	3.2.1.5 Error Handling
	Display error messages for invalid inputs
	Handle database connection issues
	3.2.2.1 Login Page
•	3.2.2.2 Inputs
	Prisoner: Prisoner ID and password
	Administrator: Username and password
•	3.2.2.3 Processing
	Authentication of user credentials
	Validation against stored records
•	3.2.2.4 Outputs
	Access to the system for authenticated users
	Error message for failed login attempts
•	3.2.2.5 Error Handling
	Handle incorrect login credentials
	Manage account lockout after multiple failed attempts
	3.2.3.1 Case Detail
•	3.2.3.2 Inputs
	Type of case
	Sentence length
	Matter of case
	Applicable rules and acts
•	3.2.3.3 Processing
	Validation and storage of case details
	Retrieval of relevant legal information
•	3.2.3.4 Outputs
	Display of case details
	Summary of applicable rules and acts
•	3.2.3.5 Error Handling
	Handle invalid case information
	Manage database retrieval issues
	3.2.4.1 Family Member
•	3.2.4.2 Inputs Name
	Relation
	Name
	Contact number
•	3.2.4.3 Processing
	Validation and storage of family member details
	Association with the prisoner’s record
•	3.2.4.4 Outputs
	Display of family member information
	Confirmation of successful association
•	3.2.4.5 Error Handling
	Handle invalid family member details
	Manage database storage issues
	3.2.5.1 Legal Contact
•	3.2.5.2 Inputs
	Name of lawyer
	Experience
	Specialization
	Case handling rating
•	3.2.5.3 Processing
	Validation and storage of legal contact details
	Retrieval of lawyer's profile and past performance
•	3.2.5.4 Outputs
	Display of legal contact information
	Rating and specialization details
•	3.2.5.5 Error Handling
	Handle invalid lawyer information
	Manage database retrieval issues
	3.2.6.1 Dashboard
•	3.2.6.2 Inputs
	Hearing dates
	Penalties
	Due Time
•	3.2.6.3 Processing
	Aggregation and display of hearing data
	Real-time updates on case status
•	3.2.6.4 Outputs
	Display of hearing schedule
	Notification of due penalties and compensation amounts
•	3.2.6.5 Error Handling
	Handle incorrect or missing data
	Manage real-time update failures
	3.2.7.1 Legal Professionals
•	3.2.7.2 Inputs
	Human rights contacts
	Police contacts
	Administrator contacts
•	3.2.7.3 Processing
	Validation and storage of professional contacts
	Association with relevant cases
•	3.2.7.4 Outputs
	Display of legal professional information
	Access to contact details
•	3.2.7.5 Error Handling
	Handle invalid contact information
	Manage database storage and retrieval issues
	3.2.8.1 Rehabilitation Program
•	3.2.8.2 Inputs
	Educational resources
	Mental health resources
	Physical health resources
	Remote court Hearing
•	3.2.8.3 Processing
	Validation and storage of rehabilitation program details
	Association with prisoner profiles
•	3.2.8.4 Outputs
	Display of available rehabilitation programs
	Access to educational and health resources
•	3.2.8.5 Error Handling
	Handle invalid program details
	Manage resource retrieval issues
3.3 Use Cases
3.3.1 Emergency Legal Aid
•	Actors: Undertrial Prisoner, Legal Aid Provider
•	System: Tech Driven Solution for Undertrial Prisoners
•	Use Case: Emergency Legal Aid
•	Description: This use case describes a scenario where an undertrial prisoner requires immediate legal assistance.
•	Flow of Events:
o	The prisoner initiates an emergency legal aid request via the mobile app.
o	The system alerts the nearest available legal aid provider.
o	The legal aid provider reviews the case details and connects with the prisoner through secure video conferencing.
o	The provider offers legal advice and documents the interaction.
3.3.2 Remote Court Hearing
•	Actors: Undertrial Prisoner, Judicial Authority, Prison Administrator
•	System: Tech Driven Solution for Undertrial Prisoners
•	Use Case: Remote Court Hearing
•	Description: This use case outlines the process of conducting a remote court hearing for an undertrial prisoner.
•	Flow of Events:
o	The prison administrator schedules the court hearing and notifies the prisoner.
o	On the hearing day, the prisoner is set up in a secure video conferencing room.
o	The judicial authority conducts the hearing remotely, reviewing case details and listening to the prisoner's testimony.
o	The outcome of the hearing is recorded and updated in the system.
3.4 Class and Objects
3.4.1 Register 
•	Case detail
•	Personal data
3.4.2 Login
•	ID
•	Password
3.4.3 Case Details
•	Case name
•	Case type
•	Sentence length
•	Acts/rules
3.4.4 Family member
•	Name 
•	Relation 
•	Contact number
3.4.5 Legal contact details
•	Lawyer id
•	Name
•	Specialisation
•	Experience
•	Case Handled
3.4.6 Dashboard
•	Hearing date 
•	Real time update
•	Due time 
•	Penalty amount
3.4.7 Legal professional
•	Human rights
•	Police
•	Administration
3.4.8 Rehabilitation
•	Education
•	Physical health 
•	Mental health
•	Resources
3.5 Non-functional Requirements
3.5.1 Performance
•	Realtime: System should support real-time video conferencing and legal aid.
•	Efficiency: Quick data retrieval and processing for case management and court schedules.
3.5.2 Usability
•	User Friendly Interface: Intuitive and easy to navigate interfaces for all user types.
•	Accessibility: Accessible design for users with varying levels of technical expertise.
3.5.3 Reliability and Availability
•	Uptime: High availability with minimal downtime.
•	Data Backup: Regular data backups and recovery mechanisms.
3.5.4 Security
•	Compliance: Adherence to data security regulations such as GDPR.
•	Encryption: Use of industry standard encryption for data protection.
•	Audits: Regular security audits and vulnerability assessments.
3.5.5 Maintainability
•	Modularity: Design for easy updates and maintenance.
•	Documentation: Comprehensive documentation for developers and users.
3.6 Inverse Requirements
•	Unauthorized Access: The system shall prevent unauthorized access to sensitive data and functionalities.
•	Privacy Violations: The system shall not violate user privacy or collect unnecessary data.
3.7 Design Constraints
•	Hardware Limitations: Compatibility with existing prison and court hardware.
•	Processing Power: Efficient use of processing power for AI and real time functionalities.
•	Power Consumption: Minimization of power usage for continuous operation.

A. APPENDICES
A.	Appendix 1: Technical Specifications
•	System Architecture: Describe the software's overall structure, including backend, frontend, and database components.
•	Security Measures: Outline authentication, authorization, data encryption, and secure communication protocols.
B.	Appendix 2: User Manuals
•	Introduction: Overview of the software's purpose, target users, and benefits.
•	Getting Started: Installation instructions, system requirements, and initial setup guidance.
•	Using the Software: Step-by-step instructions on accessing legal aid, submitting requests, and tracking progress.
•	Marketing and Outreach: Promote the project through social media, webinars, and conferences to attract stakeholders.
 3. Release Management
 3.1 Release Schedule Definition
•	SDLC Integration: Integrate release management into the SDLC to ensure consistent and timely releases, defining release phases and criteria.
•	Versioning Strategy: Define a versioning strategy (e.g., semantic versioning) reflecting the nature of changes (major, minor, patch).
 3.2 Release Process Activities
•	Internal Testing and Code Review: Perform internal testing and code reviews to automate testing and deployment.
•	Release Documentation: Create detailed release notes and documentation highlighting new features, bug fixes, and known issues.
•	Version Control Tagging: Tag releases in the version control system following the defined versioning strategy.
 3.3 Public Release and Communication
•	Open-Source Platform Communication: Announce releases and updates on the chosen platform.45
•	External Communication: Communicate releases through email newsletters, press releases, and community forums.
 3.4 Post-Release Monitoring and Support
•	Bug Fixes and Updates: Monitor for bugs and provide timely updates using issue tracking systems.
•	Community Support: Provide support through forums, issue trackers, and encourage community involvement in troubleshooting.
 4. Branch Management
 4.1 Branching Strategy
•	Main Branch: Stable branch containing release-ready code, always in a deployable state.
•	Feature Branches: Branches for developing new features in isolation.
•	Integration Branch: Branches for integrating and testing features before merging into the main branch, using CI/CD.
•	Release Branch: Branches for preparing and stabilizing releases, fixing last-minute issues.
 4.2 Branch Management Practices
•	Clear Branch Naming Conventions: Use clear and consistent naming conventions.
•	Pull Requests: Use pull requests for code changes with detailed descriptions and testing instructions.
•	Merge Reviews: Conduct thorough reviews of merge requests using automated tools.
•	Branch Deletion: Delete branches after merging to reduce clutter.
 4.3 Collaboration and Monitoring
•	Version Control Platform Features: Utilize features like GitHub Actions for collaboration and monitoring.
•	Communication and Coordination: Use tools like Slack or Microsoft Teams for effective team communication.
 4.4 Integration with Release Management
•	Release Decisions Based on Branch Activity: Monitor branch activity to identify potential issues and inform release decisions.
 5. Variant Management
 5.1 Managing Controlled Release Variants
•	Core Codebase with Feature Flags: Use feature flags to manage software variants, enabling or disabling features without redeployment.
•	Variant Configuration Files: Maintain configuration files for different variants, including environment-specific settings.
•	Version Control and Branching: Manage variants with version control, each variant having its own branch and release cycle.
 5.2 Stable Version Management
•	Tagged Releases: Use tagged releases for managing stable versions.
•	Separate Build and Deployment Processes: Implement separate processes for stable version testing and deployment.
•	Version Support Lifecycle: Define and follow a support lifecycle for different versions.
 5.3 Archiving Old Variants
•	Archiving Criteria: Establish criteria for archiving old variants based on age, usage, and support status.
•	Archive Format: Ensure archived versions are stored in a retrievable format.
•	Archiving Location: Designate a location for storing archived variants, such as a dedicated server or cloud storage.
 6. Change Management
 6.1 Change Request Sources
•	Community Discussions: Gather change requests from community discussions and feedback.
•	Issue Tracking: Use an issue tracking system to manage and categorize change requests.
 6.2 Change Request Evaluation
•	Community Input and Voting: Use community input to evaluate change requests.
•	Project Lead Review: Have project leads review and prioritize change requests based on feasibility and impact.
 6.3 Decision Making and Communication
•	Transparency and Communication: Ensure transparency in decision-making, documenting decisions and providing rationale.
•	Prioritization and Road mapping: Prioritize change requests and update the project roadmap, communicating updates to stakeholders.
 6.4 Open-Source Collaboration
•	Community Contributions: Encourage community contributions and provide guidelines for code, issues, and feature suggestions.
•	Code Reviews and Merging: Implement a process for code reviews and merging, ensuring contributions meet quality standards. -->
