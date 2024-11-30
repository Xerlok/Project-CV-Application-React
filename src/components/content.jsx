/* eslint-disable react/prop-types */
import '../styles/content.css'
import { useState } from 'react';
import GeneralInfoFilled from './generalInfoFilled';
import EducationFilled from './educationFilled';
import WorkExperienceFilled from './workExperienceFilled';

export default function Main() {
  return (
    <main>
      <GeneralInfo /> 
      <Education />
      <WorkExperience />
      <Advert />
    </main>
  );
}

function GeneralInfo() {
  const [isFilled, setFilled] = useState(false);
  const [generalInfo, setGeneralInfo] = useState({ fName: "", lName: "", email: "", phone: "" });

  return (
    <div className='wrapper general-info'>
      <h2>General Information</h2>
      { isFilled ? <GeneralInfoFilled generalInfo={generalInfo} setFilled={setFilled} /> :
      <GeneralInfoForm setGeneralInfo={setGeneralInfo} setFilled={setFilled} generalInfo={generalInfo} /> }
    </div>
  );
}

function Education() {
  const [isFilled, setFilled] = useState(false);
  const [educationInfo, setEducationInfo] = useState({ schoolName: "", title: "", gradDate: "", achievements: "" });

  return (
    <div className='wrapper education'>
      <h2>Education</h2>
      { isFilled ? <EducationFilled educationInfo={educationInfo} setFilled={setFilled} /> :
      <EducationInfoForm setEducationInfo={setEducationInfo} setFilled={setFilled} educationInfo={educationInfo} /> }
    </div>
  );
}

function WorkExperience() {
  const [isFilled, setFilled] = useState(false);
  const [workInfo, setWorkInfo] = useState({ companyName: "", title: "", workDates: "", responsibilities: "" });

  return (
    <div className='wrapper work-experience'>
      <h2>Work Experience</h2>
      { isFilled ? <WorkExperienceFilled workInfo={workInfo} setFilled={setFilled} /> :
      <WorkExperienceForm setWorkInfo={setWorkInfo} setFilled={setFilled} workInfo={workInfo} /> }
    </div>
  );
}

function GeneralInfoForm({ setGeneralInfo, setFilled, generalInfo }) {
  const { fName } = generalInfo;
  const { lName } = generalInfo;
  const { email } = generalInfo;
  const { phone } = generalInfo;

  return (
    <form action="" className='general-info-form' onSubmit={(e) => {
      e.preventDefault();
      const generalInfo = { fName: null, lName: null, email: null, phone: null };
      generalInfo.fName = document.querySelector('#fname').value;
      generalInfo.lName = document.querySelector('#lname').value;
      generalInfo.email = document.querySelector('#email').value;
      generalInfo.phone = document.querySelector('#tel').value;
      setGeneralInfo(generalInfo);
      setFilled('true');
    }}>
      <div className='inputs-wrapper'>
        <UserInput
          labelFor="fname"
          labelText="First name:"
          type="text"
          name="fname"
          id="fname"
          text={fName}
        />
        <UserInput
          labelFor="lname"
          labelText="Last name:"
          type="text"
          name="lname"
          id="lname"
          text={lName}
        />
        <UserInput
          labelFor="email"
          labelText="Email:"
          type="email"
          name="email"
          id="email"
          text={email}
        />
        <UserInput
          labelFor="tel"
          labelText="Phone:"
          type="tel"
          name="tel"
          id="tel"
          text={phone}
        />
      </div>
      <Buttons />
    </form>
  );
  
}

function EducationInfoForm({ setEducationInfo, setFilled, educationInfo }) {
  const { schoolName } = educationInfo;
  const { title } = educationInfo;
  const { gradDate } = educationInfo;
  const { achievements } = educationInfo;

  return (
    <form action="" className='education-form' onSubmit={(e) => {
      e.preventDefault();
      const educationInfo = { schoolName: null, title: null, gradDate: null, achievements: null };
      educationInfo.schoolName = document.querySelector('#school-name').value;
      educationInfo.title = document.querySelector('#title-study').value;
      educationInfo.gradDate = document.querySelector('#grad-date').value;
      educationInfo.achievements = document.querySelector('#achievements').value;
      setEducationInfo(educationInfo);
      setFilled('true');
    }}>
      <div className='inputs-wrapper'>
        <UserInput
          labelFor="school-name"
          labelText="School name:"
          type="text"
          name="school-name"
          id="school-name"
          text={schoolName}
        />
        <UserInput
          labelFor="title-study"
          labelText="Title of study:"
          type="text"
          name="title-study"
          id="title-study"
          text={title}
        />
        <UserInput
          labelFor="grad-date"
          labelText="Graduation date:"
          type="text"
          name="grad-date"
          id="grad-date"
          text={gradDate}
        />
        <UserInput
          textarea="true"
          labelFor="achievements"
          labelText="Extra achievements:"
          name="achievements"
          id="achievements"
          text={achievements}
        />
      </div>
      <Buttons />
    </form>
  );
}

function WorkExperienceForm ({ setWorkInfo, setFilled, workInfo }) {
  const { companyName } = workInfo;
  const { title } = workInfo;
  const { workDates } = workInfo;
  const { responsibilities } = workInfo;

  return (
    <form action="" className='work-experience-form' onSubmit={(e) => {
      e.preventDefault();
      const workInfo = { companyName: null, title: null, workDates: null, responsibilities: null };
      workInfo.companyName = document.querySelector('#company-name').value;
      workInfo.title = document.querySelector('#position-title').value;
      workInfo.workDates = document.querySelector('#work-dates').value;
      workInfo.responsibilities = document.querySelector('#responsibilities').value;
      setWorkInfo(workInfo);
      setFilled('true');
    }}>
      <div className='inputs-wrapper'>
        <UserInput
          labelFor="company-name"
          labelText="Company name:"
          type="text"
          name="company-name"
          id="company-name"
          text={companyName}
        />
        <UserInput
          labelFor="position-title"
          labelText="Position title:"
          type="text"
          name="position-title"
          id="position-title"
          text={title}
        />
        <UserInput
          labelFor="work-dates"
          labelText="Work dates:"
          type="text"
          name="work-dates"
          id="work-dates"
          text={workDates}
        />
        <UserInput
          textarea="true"
          labelFor="responsibilities"
          labelText="Main responsibilities:"
          name="responsibilities"
          id="responsibilities"
          text={responsibilities}
        />
      </div>
      <Buttons />
    </form>
  );
}

function UserInput({ textarea, labelFor, labelText, type, name, id, text }) {
  if (textarea) {
    return (
      <div className="input-wrapper">
          <label htmlFor={labelFor}>{labelText}</label>
          <textarea name={name} id={id} rows="5" cols="22" maxLength="300" defaultValue={text}></textarea>
      </div>
    );
  }
  return (
    <div className="input-wrapper">
        <label htmlFor={labelFor}>{labelText}</label>
        <input type={type} name={name} id={id} defaultValue={text} required />
  </div>
  );
}

function Buttons() {
  return (
    <div className="buttons-wrapper">
      <button type="submit" className='buttons'>Submit</button>
    </div>
  );
}

function Advert() {
  return (
    <div className='wrapper advert'></div>
  );
}
