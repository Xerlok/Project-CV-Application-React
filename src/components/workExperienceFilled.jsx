/* eslint-disable react/prop-types */
export default function WorkExperienceFilled({ workInfo, setFilled }) {
  const { companyName } = workInfo;
  const { title } = workInfo;
  const { workDates } = workInfo;
  const { responsibilities } = workInfo;

  return (
    <div className="work-cv">
      <ul className="work-list">
        <li>School name: {companyName}</li>
        <li>Title of study: {title}</li>
        <li>Graduation date: {workDates}</li>
        <li>Extra Achievements: {responsibilities}</li>
      </ul>
      <div className="buttons-wrapper">
        <button type='button' className="buttons edit" onClick={() => setFilled(false)}>Edit</button>
      </div>
    </div>
  );
}
