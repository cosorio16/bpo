import NumberFlow from "@number-flow/react";
import { useState } from "react";

function Calc() {
  const [employees, setEmployees] = useState(10);
  const [salary, setSalary] = useState(4000);

  const getSavingsRate = () => {
    if (salary > 7000) return 0.35;
    if (salary > 4000) return 0.4;
    return 0.5;
  };

  const savingsRate = getSavingsRate();

  const currentCost = employees * salary;
  const monthlySavings = currentCost * savingsRate;
  const newCost = currentCost - monthlySavings;
  const annualSavings = monthlySavings * 12;

  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });
  };
  return (
    <div className="font-DM flex flex-col gap-4 w-full h-full">
      <div>
        <div className="flex flex-col gap-1">
          <p className="w-fit text-emerald-500 bg-emerald-50 px-4 py-1 rounded-full border border-emerald-200">
            You could save monthly
          </p>
          <span className="text-7xl font-manrope text-indigo-500 font-medium px-2">
            <NumberFlow
              value={monthlySavings}
              format={{
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              }}
            />
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between border-b pb-4 border-neutral-200">
            <span className="font-medium text-2xl text-neutral-500">
              Current Cost:
            </span>
            {/* <NumberFlow value={currentCost} /> */}
            <span className="bg-indigo-50 text-indigo-500 px-2 py-1 border-indigo-200 isolate">
              {formatCurrency(currentCost)}
            </span>
          </div>

          <div className="flex items-center justify-between border-b pb-4 border-neutral-200">
            <span className="font-medium text-2xl text-neutral-500">
              With cost:
            </span>
            {/* <NumberFlow value={newCost} /> */}

            <span className="bg-indigo-50 text-indigo-500 px-2 py-1 border-indigo-200 isolate">
              {formatCurrency(newCost)}
            </span>
          </div>

          <div className="flex items-center justify-between border-b pb-4 border-neutral-200">
            <span className="font-medium text-2xl text-neutral-500">
              Annual Savings:
            </span>{" "}
            {/* <NumberFlow value={annualSavings} /> */}
            <span className="bg-indigo-50 text-indigo-500 px-2 py-1 border-indigo-200 isolate">
              {formatCurrency(annualSavings)}
            </span>{" "}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-neutral-500 bg-neutral-50 px-4 py-1 border border-neutral-200 rounded-full w-fit">
            Salary: {salary}
          </span>
          <input
            type="range"
            min="1000"
            max="10000"
            step="500"
            value={salary}
            className="w-full text-indigo-500"
            onChange={(e) => setSalary(Number(e.target.value))}
          />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-neutral-500 bg-neutral-50 px-4 py-1 border border-neutral-200 rounded-full w-fit">
            Employees: {employees}
          </span>
          <input
            type="range"
            min="10"
            max="200"
            step="10"
            value={employees}
            className="w-full text-indigo-500"
            onChange={(e) => setEmployees(Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
}

export default Calc;
