import '../styles/content.css'

export default function Main() {
  return (
    <main>
      <div className='wrapper general-info'>
        <h2>General Information</h2>
        <GeneralInfoForm></GeneralInfoForm> 
        <Buttons></Buttons>
      </div>
      <div className='wrapper education'>
        <h2>Education</h2>
        <EducationForm></EducationForm>
        <Buttons></Buttons>
      </div>
      <div className='wrapper work-experience'>
        <h2>Work Experience</h2>
        <WorkExperienceForm></WorkExperienceForm>
        <Buttons></Buttons>
      </div>
    </main>
  );
}

function GeneralInfoForm() {
  return (
    <form action="" className='general-info-form'>
      <label>
        First name:
        <input type="text"/>
      </label>
      <label>
        Last name:
        <input type="text"/>
      </label>
      <label>
        Email:
        <input type="email"/>
      </label>
      <label>
        Phone:
        <input type="phone"/>
      </label>
    </form>
  );
}

function EducationForm() {
  return (
    <form action="" className='education-form'>
      <label>
        School name:
        <input type="text"/>
      </label>
      <label>
        Title of study:
        <input type="text"/>
      </label>
      <label>
        Graduation date:
        <input type="text"/>
      </label>
      <label>
        Extra achievements:
        <input type="text"/>
      </label>
    </form>
  );
}

function WorkExperienceForm() {
  return (
    <form action="" className='work-experience-form'>
      <label>
        Company name:
        <input type="text"/>
      </label>
      <label>
        Position title:
        <input type="text"/>
      </label>
      <label>
        Main responsibilities:
        <input type="text"/>
      </label>
      <label>
        Work dates:
        <input type="text"/>
      </label>
    </form>
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
