import { IData, IGrossSalaryCalculator } from "./types";
class APP {
  get data(): IData[] {
    return [
      {
        segment: "a",
        basicSalary: 1000,
      },
      {
        segment: "b",
        basicSalary: 2000,
      },
      {
        segment: "c",
        basicSalary: 3000,
      },
    ];
  }

  get grossSalaryCalculators(): IGrossSalaryCalculator[] {
    return this.data.map(({ segment, basicSalary }) => ({
      segment,
      myGrossSalaryCalculator: this.grossSalaryCalculator(basicSalary),
    }));
  }

  private grossSalaryCalculator(
    basicSalary: number
  ): (bonus: number) => number {
    const tax = basicSalary * 0.2;
    return (bonus) => bonus + tax + basicSalary;
  }
}

const app = new APP();
console.log(app.grossSalaryCalculators[0].myGrossSalaryCalculator(80));
console.log(app.grossSalaryCalculators[1].myGrossSalaryCalculator(90));
console.log(
  app.grossSalaryCalculators
    .find(({ segment }) => segment === "c")
    ?.myGrossSalaryCalculator(100)
);
