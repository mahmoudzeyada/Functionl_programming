export interface IData {
  segment: string;
  basicSalary: number;
}

export interface IGrossSalaryCalculator {
  segment: string;
  myGrossSalaryCalculator: (bonus: number) => number;
}
