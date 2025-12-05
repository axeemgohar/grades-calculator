const SwitzerlandContent = () => {
  return (
    <div className="p-0 md:p-8">
      <h2 className="text-2xl font-extrabold text-slate-800 mb-4 border-b pb-2">
        Das Schweizer Notensystem erklärt
      </h2>
      <p className="text-slate-600 mb-6">
        In der Schweiz werden schulische Leistungen meistens mit den Noten 6 bis
        1 bewertet. Dabei ist die <strong>Note 6 die beste</strong> und die{' '}
        <strong>Note 1 die schlechteste</strong> Bewertung. Die Note 4 gilt als
        "genügend", also als die Note, die erreicht werden muss, um eine Prüfung
        zu bestehen.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-3">
            Die Notenskala
          </h3>
          <ul className="space-y-2 text-sm text-slate-600 bg-slate-50 p-4 rounded-lg">
            <li className="flex justify-between border-b border-slate-200 pb-1">
              <span>6.0</span>{' '}
              <span className="font-semibold text-green-600">Sehr gut</span>
            </li>
            <li className="flex justify-between border-b border-slate-200 pb-1">
              <span>5.5</span>{' '}
              <span className="font-semibold text-green-500">
                Gut bis sehr gut
              </span>
            </li>
            <li className="flex justify-between border-b border-slate-200 pb-1">
              <span>5.0</span>{' '}
              <span className="font-semibold text-green-500">Gut</span>
            </li>
            <li className="flex justify-between border-b border-slate-200 pb-1">
              <span>4.5</span>{' '}
              <span className="font-semibold text-yellow-600">
                Genügend bis gut
              </span>
            </li>
            <li className="flex justify-between border-b border-slate-200 pb-1">
              <span>4.0</span>{' '}
              <span className="font-semibold text-yellow-600">Genügend</span>
            </li>
            <li className="flex justify-between border-b border-slate-200 pb-1">
              <span>3.0</span>{' '}
              <span className="font-semibold text-red-500">Ungenügend</span>
            </li>
            <li className="flex justify-between">
              <span>2.0 - 1.0</span>{' '}
              <span className="font-semibold text-red-600">
                Schwach / Schlecht
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-3">
            Wie funktioniert der Punkte-Rechner?
          </h3>
          <p className="text-slate-600 mb-4">
            Um aus einer Punktzahl eine Note zu berechnen, wird in der Schweiz
            meist eine lineare Skala verwendet. Die Formel lautet:
          </p>
          <div className="bg-indigo-50 p-3 rounded text-center font-mono text-indigo-700 text-sm mb-4">
            (Erreichte Punkte / Max. Punkte) * 5 + 1
          </div>
          <p className="text-slate-600 text-sm">
            Diese Formel stellt sicher, dass 0 Punkte die Note 1 ergeben und die
            volle Punktzahl die Note 6 ergibt.
          </p>
        </div>
      </div>
    </div>
  );
};
export default SwitzerlandContent;
