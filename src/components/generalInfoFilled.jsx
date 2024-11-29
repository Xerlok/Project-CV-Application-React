/* eslint-disable react/prop-types */
export default function GeneralInfoFilled({ generalInfo }) {
  const { fName } = generalInfo;
  const { lName } = generalInfo;
  const { email } = generalInfo;
  const { phone } = generalInfo;

  return (
    <div className="general-info-cv">
      <ul className="general-info-list">
        <li>First name: {fName}</li>
        <li>Last name: {lName}</li>
        <li>Email: {email}</li>
        <li>Phone: {phone}</li>
      </ul>
      <div className="buttons-wrapper">
        <button className="buttons edit">Edit</button>
      </div>
    </div>
  );
}
