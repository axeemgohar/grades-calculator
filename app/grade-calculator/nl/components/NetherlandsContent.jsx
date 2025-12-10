const NetherlandsContent = () => {
  return (
    <div className="p-0 md:p-8">
      <h2 className="text-2xl font-extrabold text-slate-800 mb-4 border-b pb-2">
        Hoe werkt het gemiddelde cijfer?
      </h2>
      <p className="text-slate-600 mb-6">
        In Nederland worden schoolcijfers gegeven op een schaal van 1 tot 10. Om
        je rapportcijfer of eindcijfer te bepalen, moet je vaak een{' '}
        <strong>gewogen gemiddelde</strong> berekenen. Dit betekent dat sommige
        toetsen (bijvoorbeeld proefwerken) zwaarder meetellen dan andere
        (bijvoorbeeld overhoringen).
      </p>

      <h3 className="text-lg font-bold text-slate-800 mt-6 mb-3">
        De 5,5 regel (Voldoende)
      </h3>
      <p className="text-slate-600 mb-4">
        Op de meeste scholen en universiteiten geldt een 5,5 (soms afgerond naar
        een 6) als de grens voor een voldoende.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
        <h4 className="font-bold text-blue-800 mb-2">Rekenvoorbeeld</h4>
        <p className="text-sm text-blue-700">
          Stel je haalt een <strong>6,0</strong> voor een SO (telt 1x mee) en
          een <strong>7,0</strong> voor een proefwerk (telt 3x mee).
          <br />
          <br />
          Berekening: (6,0 × 1 + 7,0 × 3) ÷ (1 + 3) = <strong>6,75</strong>.
          <br />
          Je gemiddelde is dan een 6,8 (afgerond).
        </p>
      </div>

      <p className="text-slate-600">
        Gebruik onze tool hierboven om snel je gemiddelde te berekenen. Je kunt
        zoveel cijfers toevoegen als je wilt.
      </p>
    </div>
  );
};
export default NetherlandsContent;
