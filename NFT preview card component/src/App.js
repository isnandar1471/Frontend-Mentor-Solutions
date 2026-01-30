export default function App() {
  return (
    <main className="bg-mainBG flex items-center justify-center h-screen px-6 font-outfit">
      <section className="bg-cardBG rounded-2xl p-6 flex flex-col gap-3 text-slate-400 sm:w-[22rem]">
        <a href="#" className="rounded-lg overflow-hidden relative group">
          <img
            src="./build/images/image-equilibrium.jpg"
            alt="Equilibrium #3429"
          />
          <div
            className="overlay absolute inset-0 w-full h-full hidden group-hover:flex bg-[color-mix(in_hsl,_theme(colors.cyan400)_50%,_transparent)]
 items-center justify-center"
          >
            <img src="./build/images/icon-view.svg" alt="View Icon" />
          </div>
        </a>
        <a
          href="#"
          className="text-white hover:text-cyan400 text-2xl leading-loose sm:text-[1.42rem]"
        >
          Equilibrium #3429
        </a>
        <p>Our Equilibrium collection promotes balance and calm.</p>
        <div className="details flex items-center justify-between">
          <div className="price text-cyan400 flex items-center gap-2">
            <img src="./build/images/icon-ethereum.svg" alt="Ethereum Icon" />
            <span>0.041 ETH</span>
          </div>
          <div className="time-left flex items-center gap-2">
            <img src="./build/images/icon-clock.svg" alt="Clock Icon" />
            <span>3 days left</span>
          </div>
        </div>
        <div className="separator bg-line h-[2px]"></div>
        <footer className="flex items-center gap-4">
          <div className="w-8 aspect-square rounded-full border-2">
            <img alt="Creator Icon" src="./build/images/image-avatar.png" />
          </div>
          <div>
            Creation of{" "}
            <a href="#" className="text-white hover:text-cyan400">
              Jules Wyvern
            </a>
          </div>
        </footer>
      </section>
    </main>
  );
}
