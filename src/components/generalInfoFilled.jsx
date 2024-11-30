/* eslint-disable react/prop-types */
export default function GeneralInfoFilled({ generalInfo, setFilled }) {
  const { fName } = generalInfo;
  const { lName } = generalInfo;
  const { email } = generalInfo;
  const { phone } = generalInfo;

  return (
    <div className="general-info-cv">
      <ul className="general-info-list">
        <li><strong>First name: </strong>{fName}</li>
        <li><strong>Last name: </strong>{lName}</li>
        <li><strong>Email: </strong>{email}</li>
        <li><strong>Phone: </strong>{phone}</li>
      </ul>
      <div className="buttons-wrapper">
        <button type='button' className="buttons edit" onClick={() => setFilled(false)}>Edit</button>
      </div>
    </div>
  );
}
