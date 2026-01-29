import { useEffect, useState } from "react";
import SummaryItem from "./SummaryItem";

function App() {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        setIsLoading(true);

        await new Promise(r => setTimeout(r, Math.floor(2000 + Math.random() * 2000))); // Loading simulation 2 - 4 seconds

        const res = await fetch("./data.json", {
          signal: abortController.signal,
        });
        const data = await res.json();

        setResult(data);
      } catch (error) {
        if (error.name === "AbortError") return;

        setErrorMessage(error instanceof Error ? error.message : String(error));
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div className="wrapper md:flex md:items-center md:justify-center md:h-[100vh] md:bg-paleBlue">
      <main className="font-hankenGrotesk md:flex md:flex-row overflow-hidden md:rounded-[32px] md:bg-white ---md:w-full md:max-w-[740px]  md:shadow-2xl  md:shadow-lightLavender">
        {
          // LOADING
          isLoading && (
            <header className="h-[100vh] text-white flex items-center justify-center pt-[25px] pb-[40px] w-[100vw] bg-gradient-to-b from-lightSlateBlueBackground to-lightRoyalBlueBackground overflow-hidden md:flex-1 md:max-w-[400px] md:min-h-[520px] md:h-0">
              <div className="loading-wrapper w-[140px] aspect-square flex items-center justify-center rounded-[50%] bg-gradient-to-b from-violetBlueCircle to-persianBlueCircle">
                <span className="loader w-[48px] h-[48px] border-[5px] border-solid border-white border-b-transparent rounded-[50%] inline-block box-border animate-spin"></span>
              </div>
            </header>
          )
        }
        {
          // ERROR
          errorMessage != null && (
            <header className="h-[100vh] text-white flex items-center justify-center pt-[25px] pb-[40px] w-[100vw] bg-gradient-to-b from-lightSlateBlueBackground to-lightRoyalBlueBackground overflow-hidden md:flex-1 md:max-w-[400px] md:min-h-[520px] md:h-0">
              <div className="w-[140px] aspect-square flex items-center justify-center rounded-[50%] bg-gradient-to-b from-violetBlueCircle to-persianBlueCircle">
                {errorMessage}
              </div>
            </header>
          )
        }
        {
          // SUCCESS
          !isLoading && result != null && (
            <header className="h-auto rounded-b-[32px] text-white flex items-center justify-center pt-[25px] pb-[40px] w-full bg-gradient-to-b from-lightSlateBlueBackground to-lightRoyalBlueBackground overflow-hidden shadow-2xl shadow-[color-mix(in_srgb,_theme(colors.lightRoyalBlueBackground)_20%,_transparent)] md:flex-1 md:rounded-r-[32px] md:w-[50%]">
              <div className="header-wrapper flex flex-col items-center justify-center gap-[24px] md:px-8 md:gap-[32px]">
                <div className="title text-[color-mix(in_srgb,theme(colors.white)_70%,transparent)] md:text-2xl">
                  Your Result
                </div>
                <div className="score bg-gradient-to-b from-violetBlueCircle to-persianBlueCircle w-[36%] aspect-square rounded-[50%] flex flex-col items-center justify-center md:w-[65%] md:gap-0">
                  <div className="numerator text-[54px] text-white font-[700] md:text-[72px] md:leading-none">
                    {Math.floor(
                      result
                        .map((data) => data.score)
                        .reduce((acc, num) => acc + num, 0) / result.length,
                    )}
                  </div>
                  <div className="divisor text-[color-mix(in_srgb,theme(colors.white)_50%,transparent)]">
                    of 100
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center md:gap-3">
                  <div className="predicate text-[24px] md:text-[32px]">
                    Great
                  </div>
                  <div className="description w-[75%] text-center text-[color-mix(in_srgb,theme(colors.white)_70%,transparent)] md:tracking-wide">
                    You scored higher than 65% of the people who have taken
                    these tests.
                  </div>
                </div>
              </div>
            </header>
          )
        }
        {!isLoading && result != null && (
          // SUCCESS
          <article className="p-[30px] md:p-0 md:flex-1  md:w-[50%]">
            <div className="flex flex-col justify-center gap-[20px] md:p-10 md:pt-7 md:gap-[24px]">
              <div className="title font-bold md:text-2xl">Summary</div>
              <div className="list flex flex-col items-stretch gap-[16px] md:gap-[14px] md:mb-4">
                {result.map((res, idx) => (
                  <SummaryItem key={idx} result={res} />
                ))}
              </div>
              <button className="continue border-none bg-darkGrayBlue text-white hover:bg-gradient-to-b from-lightSlateBlueBackground to-lightRoyalBlueBackground rounded-full py-[12px] text-lg">
                Continue
              </button>
            </div>
          </article>
        )}
      </main>
    </div>
  );
}

export default App;
