import { FC, useState, useRef, useEffect } from "react";
import Head from "next/head";
import { Button } from "../components/Button";
import { InputNumberWithIcon } from "../components/InputNumberWithIcon";
import { Dollar } from "../components/svgs/dollar";
import { Logo } from "../components/svgs/logo";
import { Person } from "../components/svgs/person";

const predefinedTips = [5, 10, 15, 25, 50];

const Home: FC = () => {
  const [bill, setBill] = useState<number>(0);
  const [tip, setTip] = useState<number>(0);
  const [customTip, setCustomTip] = useState<string | undefined>("");
  const [error, setError] = useState<any>({});
  const [numberOfPeople, setNumberOfPeople] = useState<number>(1);
  const [tipPerPerson, setTipPerPerson] = useState("0.00");
  const [totalPerPerson, setTotalPerPerson] = useState("0.00");

  const changeTip = (tip: number) => {
    if (predefinedTips.includes(tip)) {
      setCustomTip("");
    } else {
      setCustomTip(tip.toString());
    }
    setTip(tip);
  };

  const resetValues = () => {
    setBill(0);
    setTip(0);
    setCustomTip("");
    setError({});
    setNumberOfPeople(1);
    setTipPerPerson("0.00");
    setTotalPerPerson("0.00");
  };

  useEffect(() => {
    if (tip && bill && numberOfPeople) {
      const totalTip = bill * (tip / 100);
      const tipPerson = totalTip / numberOfPeople;
      const totp = bill / numberOfPeople;
      setTipPerPerson(tipPerson === Infinity ? "0.00" : tipPerson.toFixed(2));
      setTotalPerPerson(totp === Infinity ? "0.00" : totp.toFixed(2));
    }
    if (numberOfPeople === 0) {
      setError((prev) => ({ ...prev, noOfPeople: "Can't be zero" }));
    } else {
      setError((prev) => ({ ...prev, noOfPeople: null }));
    }
  }, [bill, tip, numberOfPeople]);

  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={`${process.env.NEXT_PUBLIC_PREFIX}/favicon-32x32.png`}
        />
        <title>Frontend Mentor | Tip calculator app</title>
      </Head>
      <div className=" h-full md:h-screen w-screen flex bg-gray-cyan-500 flex-col items-center justify-center space-y-10 text-sm font-bold">
        <div className="md:mt-0 mt-10">
          <Logo />
        </div>
        {/* CARD */}
        <div className="shadow-lg rounded-xl p-4 flex flex-col md:flex-row  bg-white text-cyan-dark space-y-4  md:space-x-4">
          <div className="w-80 flex-1 space-y-8 p-6">
            <InputNumberWithIcon
              label="Bill"
              controlId="bill"
              placeholder="0"
              Icon={Dollar}
              value={bill}
              setValue={setBill}
            />
            <div className="space-y-4">
              <div>Select Tip %</div>
              <div className="grid grid-cols-3 gap-2">
                {predefinedTips.map((predefinedTip) => (
                  <Button
                    key={predefinedTip}
                    onClick={() => {
                      changeTip(predefinedTip);
                    }}
                    active={tip === predefinedTip}
                  >
                    {predefinedTip}%
                  </Button>
                ))}
                <div className="">
                  <input
                    type="number"
                    autoComplete="off"
                    placeholder="Custom"
                    value={customTip}
                    onChange={(e) => changeTip(Number(e.target.value))}
                    className="bg-gray-cyan-300 w-full py-1 focus:ring rounded ring-gray-cyan-500 font-bold text-right pr-2 focus:outline-none placeholder-gray-cyan-900"
                  />
                </div>
              </div>
            </div>
            <InputNumberWithIcon
              label="Number of People"
              placeholder="0"
              controlId="noOfPeople"
              Icon={Person}
              error={error && error["noOfPeople"] ? error["noOfPeople"] : null}
              value={numberOfPeople}
              setValue={setNumberOfPeople}
            />
          </div>
          <div className="w-80 flex-1  p-6 bg-cyan-dark text-cyan rounded-xl">
            <div className="flex flex-col justify-between h-full">
              <div className="space-y-8 pt-4">
                <div>
                  <div className="flex justify-between">
                    <div>
                      <div className="text-white">Tip Amount</div>
                      <div className="text-xs text-gray-cyan-900">/ person</div>
                    </div>
                    <div className="text-cyan text-3xl font-bold">
                      ${tipPerPerson}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <div>
                      <div className="text-white">Total</div>
                      <div className="text-xs text-gray-cyan-900">/ person</div>
                    </div>
                    <div className="text-cyan text-3xl font-bold">
                      ${totalPerPerson}
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="block w-full rounded uppercase bg-cyan text-cyan-dark hover:bg-gray-cyan-500 font-bold py-2 transition-all duration-150"
                onClick={() => resetValues()}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
