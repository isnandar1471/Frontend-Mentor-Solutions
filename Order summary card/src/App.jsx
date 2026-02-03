import iconMusic from "./../public/images/icon-music.svg";
import illustrationHero from "./../public/images/illustration-hero.svg";

function App() {
  return (
    <>
      <main
        className="h-screen p-6 flex items-center justify-center font-redHatDisplay
                  text-cBlue950 bg-cBlue100 bg-top bg-contain bg-no-repeat
                  bg-[url('./images/pattern-background-mobile.svg')]
                  sm:bg-[url('./images/pattern-background-desktop.svg')]"
      >
        <article
          className="overflow-hidden rounded-2xl max-w-md
                  bg-white shadow-[0_15px_50px_-30px_var(--color-cBlue700)]"
        >
          <figure className="image-cover">
            <img
              src={illustrationHero}
              alt="Order Summary Illustration"
              className="w-full"
            />
          </figure>
          <section
            className="flex flex-col gap-2 px-6 pt-8 pb-4 
                      items-stretch sm:px-12 sm:gap-5"
          >
            <h1 className="text-2xl font-extrabold text-center pb-4 sm:text-3xl">
              Order Summary
            </h1>
            <p className="text-center px-2 pb-2">
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </p>
            <aside className="bg-cBlue50 flex py-5 px-4 gap-5 rounded-2xl mb-2">
              <div className="rounded-full">
                <img src={iconMusic} alt="Music Icon" />
              </div>
              <div className="flex-1 flex flex-col items-stretch justify-center">
                <strong className="font-extrabold text-sm">Annual Plan</strong>
                <span className="text-sm">$59.99/year</span>
              </div>
              <button
                type="button"
                className="underline font-bold text-cBlue700 text-sm
                          hover:cursor-pointer hover:no-underline"
              >
                Change
              </button>
            </aside>
            <button
              type="submit"
              className="bg-cBlue700 text-white text-center font-bold p-3
                          rounded-xl shadow-[0_15px_50px_-15px_var(--color-cBlue700)]
                          hover:cursor-pointer hover:bg-cBlue700/70"
            >
              Proceed to Payment
            </button>
            <button
              type="button"
              className="bg-transparent font-extrabold text-center p-4 
                        rounded-2xl hover:cursor-pointer"
            >
              Cancel Order
            </button>
          </section>
        </article>
      </main>
    </>
  );
}

export default App;
