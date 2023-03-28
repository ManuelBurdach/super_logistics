import "./form.css";

const lkw = {
  hersteller: "",
  fahrgestellnummer: "",
  kilometer: "",
  kennzeichen: "",
  last: "",
  farbe: "",
};

const LkwForm = ({ setLkws }) => {
  const save = (e) => {
    e.preventDefault();
    fetch("http://localhost:7777/api/v1/lkw", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lkw),
    })
      .then((res) => res.json())
      .then((data) => setLkws(data));
  };
  return (
    <form className="LkwForm">
      <input
        type="text"
        placeholder="Hersteller"
        onChange={(e) => (lkw.hersteller = e.target.value)}
      />
      <input
        type="text"
        placeholder="Fahrgestellnummer"
        onChange={(e) => (lkw.fahrgestellnummer = e.target.value)}
      />
      <input
        type="text"
        placeholder="Kilometerstand"
        onChange={(e) => (lkw.kilometer = e.target.value)}
      />
      <input
        type="text"
        placeholder="Kennzeichen"
        onChange={(e) => (lkw.kennzeichen = e.target.value)}
      />
      <input type="text" placeholder="Max. Last" onChange={(e) => (lkw.last = e.target.value)} />
      <input type="text" placeholder="Farbe" onChange={(e) => (lkw.farbe = e.target.value)} />
      <input type="submit" value="Speichern" onClick={save} />
    </form>
  );
};

export default LkwForm;
