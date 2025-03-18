import {
  Frontend,
  BackEnd,
  Design,
  Methodologies,
  Testing,
  Documentation,
  DevOps,
  Versionning,
} from "../enums/enums.common";

// export type ProficiencyCategory = keyof (typeof Frontend &
//   typeof BackEnd &
//   typeof Design &
//   typeof Methodologies &
//   typeof Testing &
//   typeof Documentation &
//   typeof DevOps &
//   typeof Collaboration);

export type ProficiencySubcategory =
  | Frontend
  | BackEnd
  | Design
  | Methodologies
  | Testing
  | Documentation
  | DevOps
  | Versionning;

export type ProficiencyCategory = {
  Frontend: Frontend;
  BackEnd: BackEnd;
  Design: Design;
  Methodologies: Methodologies;
  Testing: Testing;
  Documentation: Documentation;
  DevOps: DevOps;
  Versionning: Versionning;
};
