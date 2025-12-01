// components/GermanyContent.jsx
const GermanyContent = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <section className="mb-8 shadow-xs border border-gray-200 rounded-lg p-6 md:p-8">
        {/* <!-- Main Heading --> */}
        <div className="bg-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Was ist der Notendurchschnitt und wie wird er berechnet?
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Der Notendurchschnitt (auch: Durchschnittsnote) ist eine zentrale
            Kennzahl im deutschen Bildungssystem. Er gibt eine zusammenfassende
            Bewertung der schulischen oder akademischen Leistung. In Deutschland
            reicht die Notenskala in der Regel von 1,0 (Sehr Gut – die beste
            Note) bis 6,0 (Ungenügend – die schlechteste Note). Für die
            Zulassung zu vielen Studiengängen (Numerus Clausus, NC) oder
            Masterprogrammen ist der Durchschnitt oft entscheidend.
          </p>
        </div>

        {/* <!-- How to Use Section --> */}
        <div className="bg-white ">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center">
            Die Wichtigkeit der Gewichtung (Gewichtung)
          </h2>
          <p className="text-gray-600 mb-6">
            Die Berechnung ist nicht immer ein einfacher arithmetischer
            Mittelwert. Oft werden Noten unterschiedlich gewichtet:
          </p>

          <ul className="space-y-2">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3 shrink-0"></div>
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">
                  Fächergewichtung:
                </span>{' '}
                Hauptfächer (wie Deutsch, Mathematik, Fremdsprachen) zählen oft
                mehr (z.B. doppelt) als Nebenfächer.
              </p>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3  shrink-0"></div>
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">
                  Leistungsgewichtung:
                </span>{' '}
                Innerhalb eines Faches wird die schriftliche Note (Klausuren,
                Schulaufgaben) häufig höher gewichtet als die mündliche
                Mitarbeit (z.B. Verhältnis 2:1 oder 1:1).
              </p>
            </li>
          </ul>

          <p className="text-gray-600 mt-6 italic">
            Unser Rechner ermöglicht es dir, jede Note einzeln mit der korrekten
            Gewichtung einzutragen, um deinen präzisen Notendurchschnitt schnell
            und fehlerfrei zu ermitteln.
          </p>
        </div>
      </section>
    </div>
  );
};
export default GermanyContent;
