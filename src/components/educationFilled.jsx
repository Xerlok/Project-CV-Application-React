/* eslint-disable react/prop-types */
export default function EducationFilled({ educationInfo, setFilled }) {
  const { schoolName } = educationInfo;
  const { title } = educationInfo;
  const { gradDate } = educationInfo;
  const { achievements } = educationInfo;

  return (
    <div className="education-cv">
      <ul className="education-list">
        <li>School name: {schoolName}</li>
        <li>Title of study: {title}</li>
        <li>Graduation date: {gradDate}</li>
        <li>Extra Achievements: {achievements}</li>
      </ul>
      <div className="buttons-wrapper">
        <button type='button' className="buttons edit" onClick={() => setFilled(false)}>Edit</button>
      </div>
    </div>
  );
}
