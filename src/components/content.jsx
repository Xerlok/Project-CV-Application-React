/* eslint-disable react/prop-types */
import '../styles/content.css'
import GeneralInfoFilled from './generalInfoFilled';
import { useState } from 'react';

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
      { isFilled ? <GeneralInfoFilled generalInfo={generalInfo} /> :
      <GeneralInfoForm setGeneralInfo={setGeneralInfo} setFilled={setFilled} /> }
    </div>
  );
}

function Education() {
  return (
    <div className='wrapper education'>
      <h2>Education</h2>
      <EducationInfoForm />
    </div>
  );
}

function WorkExperience() {
  return (
    <div className='wrapper work-experience'>
      <h2>Work Experience</h2>
      <WorkExperienceForm />
    </div>
  );
}

function GeneralInfoForm({ setGeneralInfo, setFilled }) {
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
      </div>
      <Buttons />
    </form>
  );
  
}

function EducationInfoForm() {
  return (
    <form action="" className='education-form'>
      <div className='inputs-wrapper'>
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
      </div>
      <Buttons />
    </form>
  );
}

function WorkExperienceForm () {
  return (
    <form action="" className='work-experience-form'>
      <div className='inputs-wrapper'>
        <UserInput
          labelFor="company-name"
          labelText="Company name:"
          type="text"
          name="company-name"
          id="company-name"
        />
        <UserInput
          labelFor="position-title"
          labelText="Position title:"
          type="text"
          name="position-title"
          id="position-title"
        />
        <UserInput
          labelFor="work-dates"
          labelText="Work dates:"
          type="text"
          name="work-dates"
          id="work-dates"
        />
        <UserInput
          textarea="true"
          labelFor="responsibilities"
          labelText="Main responsibilities:"
          name="responsibilities"
          id="responsibilities"
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
          <textarea name={name} id={id} rows="5" cols="33" maxLength="300" value={text}></textarea>
      </div>
    );
  }
  return (
    <div className="input-wrapper">
        <label htmlFor={labelFor}>{labelText}</label>
        <input type={type} name={name} id={id} value={text} required />
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
