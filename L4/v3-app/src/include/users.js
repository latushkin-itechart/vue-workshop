const names = `Rhyley Schofield
Allan Kent
Duncan Cantu
Chaim Pratt
Charley Salas
Eleni Guest
Olivia Carroll
Taylah Calvert
Maxime Dale
Iga Brock
Ruari Burke
Hamid Kendall
Katrina Jefferson
Todd Millington
Evelina Blanchard
Fateh Livingston
Eleanor Hawes
Earl Spencer
Rizwan Boyd
Sally Prosser
Pierce Pike
Vincenzo Glover
Dina Carty
Micheal Sears
Sofie Shaw
Sara Stephenson
Rafi Ayala
Ezmae Bell
Amayah Petty
Hunter Valdez
Kamila Gray
Mikaela Greer
Sami Graves
Patsy Ruiz
Neave Rice
Josephine Mata
Samera Werner
Viktoria Campos
Subhan Jackson
Ria Braun
Mckenzie Wormald
Kasey Donovan
Roger Adam
Reo Saunders
Jada Peacock
Santiago Ferrell
Emmie Knowles
Aaryan Mackenzie
Reginald Kerr
Clodagh Farrell
Cinar Stokes
Katherine Mcintosh
Amelia-Rose Burnett
Anna-Marie Nieves
Ayaana Espinosa
Abdulrahman Hale
Jobe Wilkerson
Sultan Rowe
Anwar Mcgee
Lily-May Nicholson
Arnie Duarte
Patryk Noel
Kye Hester
Bentley Butt
Marnie Wright
Ayyub Daly
Bea Atkinson
Brenda Morris
Marcie Bassett
Jaidon Fernandez
Courtnie Penn
Ocean Rosas
Julien William
Madeeha George
Chelsy Wheeler
Gabija Clay
Lulu Sharma
Kit Beard
Jamil Mcdougall
Lloyd Vargas
Kobe Salazar
Kellan Buckley
Bethan Reeve
Axl Baird
Jacob Wiley
Clarence Prentice
Farzana Hamilton
Nathaniel Riggs
Carlton Powell
Rory Mohamed
Kalum Plummer
Jasmine Sanchez
Balraj Ayers
Christian Vaughn
Arley Goldsmith
Isobella Gonzalez
Beatriz Farrington
Catriona Morrison
Kristen Ferreira
Sofia Woodcock`.split('\n');

const jobs = `Grounds Foreman
Viticulturist
Terrazzo Setter
Substitute Teacher
Timber Faller
Student Success Counselor
Hawk Missile Air Defense Artillery
An/Sqq-89a(V)15 Surface Ship Usw Combat Systems Sensor Operator
Ultrasound Technologist
Baseball Umpire
Special Education Professor
Laser Engraver
Automotive Specialty Technician
Meteorological Aide
Explosive Technician
Child Abuse Worker
Emergency Services Program Coordinator
Attending Anesthesiologist
Wallpaper Hanger Helper
Postal Service Mail Processor
Sushi Chef
Accompanist
Tribal Judge
Advisory Title Officer
Lacing Operator
Deaf Interpreter
Trumpeter
Metallographer
Memorial Mason
Special Forces Weapons Sergeant
Ground Nuclear Weapons Assembly Officer
Satellite Dish Installer
Data Processing Equipment Repairer
Contact Lens Fitter
Climatology Professor
An/Sqq-89(V)14 Sonar System Level I Operator
Aviation Warfare Systems Operator (Non-Acoustic)
An/Ssn-2 (V) 4 Operator
Residence Life Coordinator
Plant Sprayer
Renal Social Worker
Mechanical Engineering Director
Tax Consultant
Rural Sociologist
Public School Speech Therapist
Tenor
Foreign Exchange Clerk
Marble Ceiling Installer
Scout Sniper
Pharmacist Aide`.split('\n');

const skills = `Adaptability & Flexibility
Attention to Detail
Collaboration & Teamwork
Communication
Creativity & Innovation
Independence
Interpersonal Skills
Leadership & Management
Problem Solving & Analytical Thinking
Professionalism
Time Management
Work Ethic
Brainstorming
Initiative
Delegation
Troubleshooting
Organization
Mediation
Written Communication
Stress Management
Foreign Languages
Social Media
Teaching
Design
Project Management
Computer Technology
Accounting & Finance
Business & Data Analysis
Nursing
Economics
Automotive Services, Parts and Design
SEO/SEM Marketing
Cloud and Distributed Computing
Data Presentation
Database Management and Software
Electronic and Electrical Engineering
Copywriting
Statistical Analysis and Data Mining
Perl/Python/Ruby
User Interface Design`.split('\n');

const getAge = () => Math.round(Math.random() * 30 + 20);
const getJobTitle = () => jobs[Math.floor(Math.random() * jobs.length)];

const data = names.map((name, idx) => ({
  id: idx,
  name,
  age: getAge(),
  jobTitle: getJobTitle(),
  avatar: `https://eu.ui-avatars.com/api/?name=${name}`,
  skills: skills.sort(() => Math.random() - 0.5).slice(0, 6),
}))

export default data;