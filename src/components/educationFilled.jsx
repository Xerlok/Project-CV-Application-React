/* eslint-disable react/prop-types */
export default function EducationFilled({ schoolName, titleName, gradDate, achievements }) {
  return (
    <ul className="education-cv">
      <li>School name: {schoolName}</li>
      <li>Title of study: {titleName}</li>
      <li>Graduation date: {gradDate}</li>
      <li>Extra Achievements: {achievements}</li>
    </ul>
  );
}
