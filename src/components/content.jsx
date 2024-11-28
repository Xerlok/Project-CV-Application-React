/* eslint-disable react/prop-types */
import '../styles/content.css'

export default function Main() {
  return (
    <main>
      <GeneralInfo /> 
      <Education />
      <WorkExperience />
    </main>
  );
}

function GeneralInfo() {
  return (
    <div className='wrapper general-info'>
      <h2>General Information</h2>
      <GeneralInfoForm />
      <Buttons />
    </div>
  );
}

function Education() {
  return (
    <div className='wrapper education'>
      <h2>Education</h2>
      <EducationInfoForm />
      <Buttons></Buttons>
    </div>
  );
}

function WorkExperience() {
  return (
    <div className='wrapper work-experience'>
      <h2>Work Experience</h2>
      <WorkExperienceForm />
      <Buttons></Buttons>
    </div>
  );
}

function GeneralInfoForm() {
  return (
    <form action="" className='general-info-form'>
      <UserInput
        labelFor="fname"
        labelText="First name:"
        type="text"
        name="fname"
        id="fname"
      />
      <UserInput
        labelFor="lname"
        labelText="Last name:"
        type="text"
        name="lname"
        id="lname"
      />
      <UserInput
        labelFor="email"
        labelText="Email:"
        type="email"
        name="email"
        id="email"
      />
      <UserInput
        labelFor="tel"
        labelText="Phone:"
        type="tel"
        name="tel"
        id="tel"
      />
    </form>
  );
  
}

function EducationInfoForm() {
  return (
    <form action="" className='education-form'>
      <UserInput
        labelFor="school-name"
        labelText="School name:"
        type="text"
        name="school-name"
        id="school-name"
      />
      <UserInput
        labelFor="title-study"
        labelText="Title of study:"
        type="text"
        name="title-study"
        id="title-study"
      />
      <UserInput
        labelFor="grad-date"
        labelText="Graduation date:"
        type="text"
        name="grad-date"
        id="grad-date"
      />
      <UserInput
        textarea="true"
        labelFor="achievements"
        labelText="Extra achievements:"
        name="achievements"
        id="achievements"
      />
    </form>
  );
}

function WorkExperienceForm () {
  return (
    <form action="" className='work-experience-form'>
      <UserInput
        labelFor="school-name"
        labelText="Company name:"
        type="text"
        name="school-name"
        id="school-name"
      />
      <UserInput
        labelFor="title-study"
        labelText="Position title:"
        type="text"
        name="title-study"
        id="title-study"
      />
      <UserInput
        textarea="true"
        labelFor="responsibilities"
        labelText="Main responsibilities:"
        name="responsibilities"
        id="responsibilities"
      />
      <UserInput
        labelFor="work-dates"
        labelText="Work dates:"
        type="text"
        name="work-dates"
        id="work-dates"
      />
    </form>
  );
}

function UserInput({ textarea, labelFor, labelText, type, name, id }) {
  if (textarea) {
    return (
      <div className="input-wrapper">
          <label htmlFor={labelFor}>{labelText}</label>
          <textarea name={name} id={id} rows="5" cols="33" maxLength="300"></textarea>
      </div>
    );
  }
  return (
    <div className="input-wrapper">
        <label htmlFor={labelFor}>{labelText}</label>
        <input type={type} name={name} id={id} />
  </div>
  );
}

function Buttons() {
  return (
    <div className="buttons">
      <button>Edit</button>
      <button>Submit</button>
    </div>
  );
}
