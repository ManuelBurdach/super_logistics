import "./output.css";

const Output = ({ lkw, index }) => {
  return (
    <div className="Output">
      <p>{index}. LKW</p>
      <p>{lkw.hersteller}</p>
      <p>{lkw.fahrgestellnummer}</p>
      <p>{lkw.kilometer}</p>
      <p>{lkw.kennzeichen}</p>
      <p>{lkw.last}</p>
      <p>{lkw.farbe}</p>
    </div>
  );
};

export default Output;
