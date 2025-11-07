import {
  ChartColumnBig,
  CircleQuestionMark,
  Clipboard,
  Zap,
} from 'lucide-react';

const CHContent = () => {
  return (
    <div className="max-w-5xl mx-auto">
      {/* SEKTION 1: Nutzen und Anleitung */}
      <section className="mb-8 shadow-xs border border-gray-200 rounded-lg p-6 md:p-8">
        <div className="bg-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Berechne Deinen Schweizer Notendurchschnitt (1.0–6.0)
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Du möchtest wissen, wo Du wirklich stehst? Die Schweizer Notenskala
            (Note) ist sehr genau und verlangt eine gewichtete Berechnung mit
            ECTS-Credits. Nur so erhältst Du einen offiziellen Durchschnitt für
            Master-Bewerbungen, Auslandssemester oder Stipendien. Unser Tool
            nimmt Dir die komplizierte Rechnerei ab – schnell und präzise!
          </p>
        </div>

        {/* 3 Schritte zur Berechnung */}
        <div className="bg-white ">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Clipboard className="text-indigo-600 mr-3 shrink-0" />
            In 3 Schritten zu Deiner gewichteten Note
          </h2>
          <p className="text-gray-600 mb-6">
            So ermittelst Du Deine finale, gewichtete Durchschnittsnote (Note)
            anhand Deines Zeugnisses:
          </p>

          <ol className="space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Trage Deine ECTS-Punkte ein
                </h3>
                <p className="text-gray-600">
                  Die ECTS-Punkte (Kreditpunkte) bestimmen das Gewicht Deines
                  Moduls. Sie sind der Schlüssel zur korrekten
                  Durchschnittsberechnung, denn sie spiegeln den tatsächlichen
                  Arbeitsaufwand wider.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Gib Deine Endnote an
                </h3>
                <p className="text-gray-600">
                  Gib die finale numerische Note für jedes Modul ein. Das
                  Schweizer System verwendet oft Viertelschritte (z. B. 4.75,
                  5.25). Achte darauf, die Note exakt von Deinem Transcript zu
                  übernehmen.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Lass die Note berechnen
                </h3>
                <p className="text-gray-600">
                  Der Rechner verarbeitet Deine Eingaben und liefert Dir sofort
                  Deine gewichtete Durchschnittsnote (1.0 bis 6.0) sowie die
                  entsprechende akademische Klassifizierung (Prädikat).
                </p>
              </div>
            </li>
          </ol>

          <p className="text-gray-600 mt-6 italic">
            Diese Berechnungsmethode ist die einzige, die von Schweizer
            Hochschulen wie der ETH Zürich, EPFL oder den Universitäten Basel
            und Genf anerkannt wird, da sie die ECTS-Punkte korrekt gewichtet.
          </p>
        </div>
      </section>

      {/* SEKTION 2: Das Notensystem verstehen */}
      <section className="bg-white rounded-lg shadow-xs border border-gray-200 p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <ChartColumnBig className="text-indigo-600 mr-3 shrink-0" />
          Die Schweizer Notenskala: Noten und Benchmarks
        </h2>
        <p className="text-gray-600 mb-6">
          Die akademische Skala reicht von 1.0 (schlechteste) bis 6.0 (beste).
          Es ist wichtig, die entscheidenden Notenschwellen zu kennen, besonders
          die Mindestnote zum Bestehen.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mb-6">
          {/* 6.0 - Ausgezeichnet */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-green-800">6.0</span>
              <span className="text-green-700 font-bold">Ausgezeichnet</span>
            </div>
            <p className="text-green-600 text-sm mt-2">Die Bestnote</p>
          </div>

          {/* 5.5 - Sehr Gut */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-blue-800">5.5 - 5.9</span>
              <span className="text-blue-700 font-bold">Sehr Gut</span>
            </div>
            <p className="text-blue-600 text-sm mt-2">Hervorragende Leistung</p>
          </div>

          {/* 5.0 - Gut */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-yellow-800">4.5 - 4.9</span>
              <span className="text-yellow-700 font-bold">Gut</span>
            </div>
            <p className="text-yellow-600 text-sm mt-2">
              Über dem Durchschnitt
            </p>
          </div>

          {/* 4.0 - Mindestnote */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-orange-800">4.0</span>
              <span className="text-orange-700 font-bold">Bestanden</span>
            </div>
            <p className="text-orange-600 text-sm mt-2">
              Genügend (Die Mindestnote zum Bestehen)
            </p>
          </div>

          {/* Unter 4.0 - Nicht Bestanden */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-red-800">
                3.75 & darunter
              </span>
              <span className="text-red-700 font-bold">Nicht Bestanden</span>
            </div>
            <p className="text-red-600 text-sm mt-2">
              Ungenügend (Durchgefallen)
            </p>
          </div>
        </div>

        <aside className="bg-gray-50 border-l-4 border-gray-400 p-4 mt-8 mb-4">
          <p className="text-gray-800">
            <span className="font-semibold">Wichtig zu wissen:</span>
            Ein 6-ECTS-Seminar trägt weniger zur Gesamtnote bei als die
            12-ECTS-Masterarbeit. Die Gewichtung ist entscheidend, denn nur so
            wird der tatsächliche Workload Deiner Fächer berücksichtigt.
          </p>
        </aside>
      </section>

      {/* SEKTION 3: Prädikate und Umrechnung */}
      <section className="bg-indigo-50 rounded-lg border border-indigo-200 p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Zap className="text-indigo-600 mr-3 shrink-0" />
          Dein Abschluss: Prädikate und internationale Umrechnung
        </h2>
        <p className="text-gray-600 mb-6">
          Neben der Note ist Dein Prädikat wichtig. Diese offizielle
          Klassifizierung ist ausschlaggebend für Dein Diplom und für
          Bewerbungen im Ausland.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <article className="bg-white rounded-lg p-4 border border-indigo-200">
            <h3 className="font-semibold text-blue-900 mb-2">
              Schweizer Prädikate (Klassifizierung)
            </h3>
            <ul className="text-gray-700 text-sm space-y-1 list-disc ml-4">
              <li>Mit Auszeichnung (Summa Cum Laude): Typischerweise ge 5.5</li>
              <li>Sehr Gut (Magna Cum Laude): Typischerweise ge 5.0</li>
              <li>Gut (Cum Laude): Typischerweise ge 4.5</li>
              <li>Bestanden: Typischerweise ge 4.0</li>
            </ul>
            <p className="text-xs text-gray-500 mt-2 italic">
              (Die genauen Grenzwerte können je nach Hochschule leicht
              variieren, aber diese Werte dienen als starke Richtlinie.)
            </p>
          </article>

          <article className="bg-white rounded-lg p-4 border border-indigo-200">
            <h3 className="font-semibold text-blue-900 mb-2">
              US GPA Umrechnung (Annäherung)
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Für Bewerbungen an amerikanischen Hochschulen ist die Umrechnung
              Deiner 1.0–6.0 Note in die US 4.0 GPA Skala oft nötig. Hier eine
              Orientierung:
            </p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <span className="font-semibold text-gray-900">
                Schweizer Note (6.0)
              </span>
              <span className="font-bold text-indigo-700">US GPA (4.0)</span>
              <span className="text-gray-700">6.0 - 5.5</span>
              <span className="text-indigo-600">4.0 (A/A+)</span>
              <span className="text-gray-700">5.4 - 5.0</span>
              <span className="text-indigo-600">3.7 - 3.3 (A-/B+)</span>
              <span className="text-gray-700">4.9 - 4.5</span>
              <span className="text-indigo-600">3.3 - 3.0 (B+/B)</span>
              <span className="text-gray-700">4.4 - 4.0</span>
              <span className="text-indigo-600">2.7 - 2.3 (C+)</span>
            </div>
          </article>
        </div>
      </section>

      {/* SEKTION 4: Häufig gestellte Fragen (FAQ) */}
      <section className="bg-white rounded-lg shadow-xs border border-gray-200 p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <CircleQuestionMark className="text-indigo-600 mr-3 shrink-0" />
          Häufig gestellte Fragen zu Schweizer Noten
        </h2>

        <div className="space-y-6">
          <dl className="border-b border-gray-200 pb-4">
            <dt className="font-semibold text-gray-900 mb-2">
              Was ist die Mindestnote zum Bestehen im Schweizer System?
            </dt>
            <dd className="text-gray-600">
              Die Mindestnote zum Bestehen (Genügend) ist 4.0. Jede Endnote
              unter 4.0 (also 3.75, 3.5, etc.) gilt als nicht bestanden (Nicht
              Bestanden). Du musst diese Fächer in der Regel wiederholen.
            </dd>
          </dl>

          <dl className="border-b border-gray-200 pb-4">
            <dt className="font-semibold text-gray-900 mb-2">
              Muss ich meine Durchschnittsnote wirklich mit ECTS gewichten?
            </dt>
            <dd className="text-gray-600">
              Ja, absolut! Die Gewichtung durch ECTS (Kreditpunkte) ist
              unerlässlich, da sie den Aufwand der Module korrekt abbildet. Ein
              einfacher, ungewichteter Durchschnitt würde Deine eigentliche
              Leistung verfälschen. Offizielle Dokumente und Master-Programme
              verlangen immer die gewichtete Note.
            </dd>
          </dl>

          <dl className="border-b border-gray-200 pb-4">
            <dt className="font-semibold text-gray-900 mb-2">
              Ist eine 5.0 eine gute Note?
            </dt>
            <dd className="text-gray-600">
              Eine 5.0 ist eine sehr gute Leistung! Sie liegt im Bereich 'Sehr
              Gut' und qualifiziert Dich in der Regel für das Prädikat 'Magna
              Cum Laude'. Mit dieser Note bist Du bestens für kompetitive
              Master-Studiengänge und Stipendien positioniert.
            </dd>
          </dl>

          <dl className="border-b border-gray-200 pb-4">
            <dt className="font-semibold text-gray-900 mb-2">
              Werden auch Noten unter 4.0 (ungenügend) in den Durchschnitt
              eingerechnet?
            </dt>
            <dd className="text-gray-600">
              Ja. Alle Noten, auch die ungenügenden (unter 4.0), werden in der
              Regel in die Berechnung des Gesamt-Durchschnitts einbezogen, um
              Deine finale Note zu ermitteln. Sie wirken sich negativ auf den
              Durchschnitt aus, selbst wenn Du das Modul später erfolgreich
              wiederholst.
            </dd>
          </dl>
        </div>
      </section>

      {/* Footer CTA */}
      <div className="text-center p-6 bg-indigo-600 rounded-lg text-white">
        <h3 className="text-xl font-bold mb-2">
          Hör auf zu schätzen – fang an zu rechnen!
        </h3>
        <p className="text-indigo-200">
          Scrolle nach oben und nutze unser kostenloses Tool, um Deine präzise
          Schweizer Durchschnittsnote sofort zu erhalten. Viel Erfolg!
        </p>
      </div>
    </div>
  );
};

export default CHContent;
