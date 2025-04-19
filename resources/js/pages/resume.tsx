import Nav from '@/pages/components/nav';


const CVStyles: { [key: string]: React.CSSProperties } = {
    container: {
        fontFamily: "Arial, sans-serif",
        lineHeight: 1.6,
        maxWidth: "90%",
        margin: "2rem auto",
        background: "#2A2B2E",
        padding: "2rem",
        color: "#C3E2CC",
    },
    heading: {
        color: "#C3E2CC",
    },
    section: {
        marginBottom: "2rem",
    },
    table: {
        width: "100%",
        borderCollapse: "collapse",
        margin: "1rem 0",
    },
    cell: {
        padding: "0.5rem",
        border: "1px solid #ccc",
        verticalAlign: "top",
    },
    headerCell: {
        backgroundColor: "#40444B",
        textAlign: "left",
    },
  };


export default function Resume () {
    return (
        <>
            <Nav />
           
            <section className='wrapper wrapper-background'>
                    <div className='cv-container'>
                        <CvJeroen />
                    </div>
            </section>
        </>

    );
}

const CvJeroen: React.FC = () => {
    return (
      <div style={CVStyles.container}>
        <h1 style={CVStyles.heading}>Curriculum Vitae</h1>
        <h2 style={CVStyles.heading}>Jeroen Berkhof</h2>
        <p>
          <strong>Laatst aangepast:</strong> 18/04/2025
        </p>
  
        <section style={CVStyles.section}>
          <h3 style={CVStyles.heading}>Persoonlijke informatie</h3>
          <table style={CVStyles.table}>
            <tbody>
              <tr>
                <th style={{ ...CVStyles.cell, ...CVStyles.headerCell }}>Naam</th>
                <td style={CVStyles.cell}>Jeroen Berkhof</td>
              </tr>
              <tr>
                <th style={{ ...CVStyles.cell, ...CVStyles.headerCell }}>
                  Telefoonnummer
                </th>
                <td style={CVStyles.cell}>+31 6 10608421</td>
              </tr>
              <tr>
                <th style={{ ...CVStyles.cell, ...CVStyles.headerCell }}>Geslacht</th>
                <td style={CVStyles.cell}>Mannelijk</td>
              </tr>
              <tr>
                <th style={{ ...CVStyles.cell, ...CVStyles.headerCell }}>
                  Geboortedatum
                </th>
                <td style={CVStyles.cell}>19-12-1998</td>
              </tr>
              <tr>
                <th style={{ ...CVStyles.cell, ...CVStyles.headerCell }}>Adres</th>
                <td style={CVStyles.cell}>Oldenzaalsestraat 186 a</td>
              </tr>
              <tr>
                <th style={{ ...CVStyles.cell, ...CVStyles.headerCell }}>Postcode</th>
                <td style={CVStyles.cell}>7514 DV</td>
              </tr>
              <tr>
                <th style={{ ...CVStyles.cell, ...CVStyles.headerCell }}>
                  Woonplaats
                </th>
                <td style={CVStyles.cell}>Enschede</td>
              </tr>
              <tr>
                <th style={{ ...CVStyles.cell, ...CVStyles.headerCell }}>
                  E-mailadres
                </th>
                <td style={CVStyles.cell}>jeroencem@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </section>
  
        <section style={CVStyles.section}>
          <h3 style={CVStyles.heading}>Persoonlijke prestaties</h3>
          <h4>Opleidingen</h4>
          <ul>
            <li>
              <strong>2019 - 2022:</strong> Creative Media and Game Technologies
              (HBO bachelor) - Saxion Hogeschool <em>(Niet behaald)</em>
            </li>
            <li>
              <strong>2015 - 2019:</strong> ICT - Applicatieontwikkeling (MBO-4) -
              ROC van Twente <em>(Diploma - specialisatie veilig programmeren)</em>
            </li>
            <li>
              <strong>2011 - 2015:</strong> VMBO TL Technische leerweg (MAVO){" "}
              <em>(Diploma)</em>
            </li>
          </ul>
        </section>
  
        <section style={CVStyles.section}>
          <h3 style={CVStyles.heading}>Werkervaring</h3>
          <ul>
            <li>Medewerker ICT bij Siemens Hengelo – 6 weken</li>
            <li>Stage junior programmeur bij Recreate (Rijssen) – 6 maanden</li>
            <li>Stage junior programmeur bij Bitwise/Chainwise – 6 maanden</li>
            <li>
              Full stack junior software developer bij Label305 / Keeping – 3 jaar
            </li>
          </ul>
        </section>
  
        <section style={CVStyles.section}>
          <h3 style={CVStyles.heading}>Talen</h3>
          <table style={CVStyles.table}>
            <thead>
              <tr>
                <th style={{ ...CVStyles.cell, ...CVStyles.headerCell }}>Taal</th>
                <th style={{ ...CVStyles.cell, ...CVStyles.headerCell }}>Mondeling</th>
                <th style={{ ...CVStyles.cell, ...CVStyles.headerCell }}>Schriftelijk</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={CVStyles.cell}>Nederlands</td>
                <td style={CVStyles.cell}>Goed</td>
                <td style={CVStyles.cell}>Goed</td>
              </tr>
              <tr>
                <td style={CVStyles.cell}>Engels</td>
                <td style={CVStyles.cell}>Goed</td>
                <td style={CVStyles.cell}>Goed</td>
              </tr>
              <tr>
                <td style={CVStyles.cell}>Duits</td>
                <td style={CVStyles.cell}>Redelijk</td>
                <td style={CVStyles.cell}>Redelijk</td>
              </tr>
            </tbody>
          </table>
        </section>
  
        <section style={CVStyles.section}>
          <h3 style={CVStyles.heading}>Programmeertalen</h3>
          <table style={CVStyles.table}>
            <thead>
              <tr>
                <th style={{ ...CVStyles.cell, ...CVStyles.headerCell }}>Taal</th>
                <th style={{ ...CVStyles.cell, ...CVStyles.headerCell }}>Ervaring</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={CVStyles.cell}>PHP / Laravel / Blade</td>
                <td style={CVStyles.cell}>Medior</td>
              </tr>
              <tr>
                <td style={CVStyles.cell}>TypeScript / React</td>
                <td style={CVStyles.cell}>Junior</td>
              </tr>
              <tr>
                <td style={CVStyles.cell}>HTML / CSS</td>
                <td style={CVStyles.cell}>Medior</td>
              </tr>
              <tr>
                <td style={CVStyles.cell}>C# / ASP.NET</td>
                <td style={CVStyles.cell}>Junior</td>
              </tr>
              <tr>
                <td style={CVStyles.cell}>C# / Unity</td>
                <td style={CVStyles.cell}>&lt; Beginner</td>
              </tr>
              <tr>
                <td style={CVStyles.cell}>Angular</td>
                <td style={CVStyles.cell}>Beginner</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    );
  };