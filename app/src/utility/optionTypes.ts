type TMakes = 'cadillac' | 'chevrolet' | 'dodge' | 'ford' | 'jeep' | 'ram';

type TCadillacModels = 'Escalade' | 'Optiq';
type TChevroletModels = 'Tahoe' | 'Silverado' | 'Equinox';
type TDodgeModels = 'Charger';
type TFordModels = 'FSeries';
type TJeepModels = 'Wrangler' | 'Grand Cherokee';
type TEscaladeYear = 1999;
type TOptiqYear = 2023;
type TTahoeYear = 1995;
type TSilveradoYear = 2000;
type TEquinoxYear = 2004;
type TChargerYear = 2006;
type TFSeriesYear = 1951;
type TWranglerYear = 1986;
type TGrandCherokeeYear = 1993;

export type TVehicleInformation = {
  make: TMakes;
  model:
    | TCadillacModels
    | TChevroletModels
    | TDodgeModels
    | TFordModels
    | TJeepModels;
  year:
    | TEscaladeYear
    | TOptiqYear
    | TTahoeYear
    | TSilveradoYear
    | TEquinoxYear
    | TChargerYear
    | TFSeriesYear
    | TWranglerYear
    | TGrandCherokeeYear;
};
