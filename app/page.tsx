import { Inter, Urbanist } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-gradient-to-b from-[#F7FBFF] via-white to-[#EDF6FF] text-slate-900 font-sans">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#D4E7FF_0%,#E8F4FF_25%,transparent_45%),radial-gradient(circle_at_80%_15%,#E3E4FF_0%,#F9FCFF_20%,transparent_40%)]" />
        <div className="absolute -top-24 -left-10 h-[760px] w-[760px] rounded-full bg-[#0096FF] opacity-22 blur-[320px]" />
        <div className="absolute top-40 right-[-180px] h-[520px] w-[520px] rounded-full bg-[#0096FF] opacity-16 blur-[300px]" />
      </div>
      <div className="relative z-10">
        <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="WealthUp Logo" />
          </div>
          <div className="flex items-center gap-3 text-sm font-semibold text-slate-600">
            {/* <a className="hover:text-slate-900" href="#features">Features</a>
            <a className="hover:text-slate-900" href="#advantages">Why Us</a>
            <a className="hover:text-slate-900" href="#how">How It Works</a> */}
            <button
              className={`rounded-full bg-[#F8FAFC33] px-5 py-2.5 text-[#294F7C] text-[20px] leading-[1] tracking-normal font-semibold shadow-[0px_4px_10px_0px_#4A90E2] ${urbanist.className}`}
            >
              Login
            </button>
          </div>
        </header>

        {/* top section */}
        <section className="mx-auto mb-8 flex w-full max-w-7xl flex-col items-center gap-10 px-6 pb-8 pt-10 lg:flex-row lg:items-start lg:gap-14 lg:px-10">
          {/* Hero Section */}
          <div className="w-full lg:w-1/2">
            <div className="mb-3 inline-flex items-center gap-3 rounded-full border border-white/70 bg-[#EAF4FF] px-4 py-2 text-[18px] leading-[1] text-[#2F4D78] shadow-[0_8px_20px_rgba(47,77,120,0.12)]">
              <div className="flex -space-x-2">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[#F6D7B0] text-xs font-semibold text-[#2F4D78]">
                  <img src="/person1.png" alt="User 1" />
                </span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[#F0B7C4] text-xs font-semibold text-[#2F4D78]">
                  <img src="/person2.png" alt="User 2" />
                </span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[#BFE3FF] text-xs font-semibold text-[#2F4D78]">
                  <img src="/person3.png" alt="User 3" />
                </span>
              </div>
              <span
                className={`text-[14px] leading-[1] tracking-normal font-thin italic ${urbanist.className}`}
              >
                Trusted by over 2,000 users
              </span>
            </div>
            <h1
              className={`mb-6 text-[56px] leading-[1] tracking-normal ${inter.className}`}
            >
              <span className="block text-[#2F4D78]">Plan your life </span>
              <span className="block text-[#2F4D78]">
                goals.{" "}
                <span className="text-[#5C8FE8]">
                  We&apos;ll plan the investments.
                </span>
              </span>
            </h1>
            <p className={`mb-8 max-w-lg text-[20px] leading-[1] tracking-normal font-normal text-[#294F7C] ${urbanist.className}`}>
              WealthUp helps you achieve goals through
              <span className="block">personalised goal based investing.</span>
            </p>
            {/* <div className="flex flex-col gap-3 sm:flex-row">
              <button className="rounded-full bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-blue-700">Open Account</button>
              <button className="rounded-full border border-blue-200 bg-white px-6 py-3 text-base font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-50">How it works</button>
            </div>
            <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-500">
              <span className="rounded-2xl bg-white px-3 py-1 shadow-sm">Projected return 15.2% p.a.</span>
              <span className="rounded-2xl bg-white px-3 py-1 shadow-sm">Easy withdrawals in 24h</span>
              <span className="rounded-2xl bg-white px-3 py-1 shadow-sm">Zero commission first year</span>
            </div> */}
          </div>
          {/* Goal Planning Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-[32px] border border-[#4A90E2] p-8 shadow-[0px_10px_30px_rgba(74,144,226,0.25)]">
              <h3
                className={`mb-8 text-center text-[18px] font-semibold leading-[1] tracking-normal text-[#294F7C] ${inter.className}`}
              >
                Buy a car
              </h3>

              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
                <div className="space-y-8">
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <span className={`${urbanist.className} text-[14px] font-normal leading-[1] tracking-normal text-[#294F7C]`}>Car price</span>
                      <span className={`${urbanist.className} text-[14px] font-semibold leading-[1] tracking-normal text-[#294F7C]`}>₹20L</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="100"
                      value="30"
                      className="goal-range w-full"
                      readOnly
                    />
                    <div className="mt-2 flex justify-between">
                      <span className={`${urbanist.className} text-[11px] font-normal leading-[1] tracking-normal text-[#7A7A7A]`}>₹5L</span>
                      <span className={`${urbanist.className} text-[11px] font-normal leading-[1] tracking-normal text-[#7A7A7A]`}>₹1cr</span>
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <span className={`${urbanist.className} text-[14px] font-normal leading-[1] tracking-normal text-[#294F7C]`}>Time to buy</span>
                      <span className={`${urbanist.className} text-[14px] font-semibold leading-[1] tracking-normal text-[#294F7C]`}>5 years</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="100"
                      value="30"
                      className="goal-range w-full"
                      readOnly
                    />
                    <div className="mt-2 flex justify-between">
                      <span className={`${urbanist.className} text-[11px] font-normal leading-[1] tracking-normal text-[#7A7A7A]`}>1 year</span>
                      <span className={`${urbanist.className} text-[11px] font-normal leading-[1] tracking-normal text-[#7A7A7A]`}>10 years</span>
                    </div>
                  </div>

                  <div>
                    <button className={`${urbanist.className} rounded-full border border-[#4A90E2] bg-[#EAF4FB] px-6 py-3 text-[16px] font-semibold leading-[1] tracking-normal text-[#294F7C] shadow-[0_4px_12px_rgba(74,144,226,0.25)] transition hover:opacity-95`}>
                      Let&apos;s get your car 🚗
                    </button>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <div className="w-[220px] rounded-[22px] border border-[#4A90E2] bg-white px-6 py-5 text-center shadow-[0_6px_16px_rgba(41,79,124,0.18)]">
                    <p className={`${urbanist.className} text-[16px] font-normal leading-[1] tracking-normal text-[#294F7C]`}>Lump Sum</p>
                    <p className={`${inter.className} mt-4 text-[34px] font-semibold leading-[1] tracking-normal text-[#294F7C]`}>₹11.3L</p>
                  </div>
                  <div className={`text-center ${urbanist.className} text-[16px] font-light leading-[1] tracking-normal text-[#294F7C]`}>
                    OR
                  </div>
                  <div className="w-[220px] rounded-[22px] border border-[#4A90E2] bg-white px-6 py-5 text-center shadow-[0_6px_16px_rgba(41,79,124,0.18)]">
                    <p className={`${urbanist.className} text-[16px] font-normal leading-[1] tracking-normal text-[#294F7C]`}>Monthly SIP</p>
                    <p className={`${inter.className} mt-4 text-[34px] font-semibold leading-[1] tracking-normal text-[#294F7C]`}>₹24k</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="vehicleSelection" className="mx-auto -mt-6 mb-8 max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div className="grid w-full max-w-[380px] gap-4 sm:grid-cols-2">
              {[
                { name: "Car", image: "/car.png", selected: true },
                { name: "Travel", image: "/plane.png" },
                { name: "Home", image: "/home.png" },
                { name: "Custom", image: "/arch.png" },
              ].map((vehicle) => (
                <button
                  key={vehicle.name}
                  className={`flex h-[100px] w-[180px] items-center gap-4 rounded-[20px] border px-4 py-3 text-left shadow-[0_8px_18px_rgba(41,79,124,0.18)] ${vehicle.selected
                    ? "border-[#4A90E2] bg-white"
                    : "border-[#D6E6FA] bg-[#EAF4FB]"
                    }`}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/80">
                    <img src={vehicle.image} alt={vehicle.name} className="h-10 w-10 object-contain" />
                  </span>
                  <span className={`${urbanist.className} text-[16px] font-semibold leading-[1] text-[#294F7C]`}>
                    {vehicle.name}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex items-center justify-center lg:justify-end">
              <img
                src="/carwithshadow.png"
                alt="Selected Vehicle"
                className="h-[280px] w-[460px] object-contain"
              />
            </div>
          </div>
        </section>

        {/* Partners */}
        <section id="partners" className="mx-auto mb-14 max-w-7xl px-6 lg:px-10">
          <div className="rounded-[20px] border border-[#CFE6FF] bg-[#D9EEFF] px-6 py-5 shadow-[0_10px_24px_rgba(41,79,124,0.12)]">
            <p className={`${urbanist.className} mb-4 text-center text-[12px] font-semibold leading-[1] tracking-[0.18em] text-[#2F4D78]`}>
              Backed By
            </p>
            <div className="grid items-center gap-4 sm:grid-cols-3 lg:grid-cols-7">
              {[
                { name: "Registered", src: "/backed/registered.png" },
                { name: "DPIIT", src: "/backed/dpiit.png" },
                { name: "Startup India", src: "/backed/startupindia.png" },
                { name: "NVIDIA", src: "/backed/nvidia.png" },
                { name: "Razorpay", src: "/backed/razorpay.png" },
                { name: "AMFI", src: "/backed/amfi.png" },
                { name: "Wadhwani", src: "/backed/wadhwani.png" },
              ].map((logo) => (
                <div key={logo.name} className="flex items-center justify-center">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-8 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

      <section id="features" className="mx-auto mb-14 max-w-7xl px-6 lg:px-10">
        <h2 className="mb-10 text-center text-3xl font-bold text-slate-900 sm:text-4xl">Multiple ways to grow your wealth</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Planned Invest",
              description: "Set a recurring investment plan and let your money compound automatically.",
            },
            {
              title: "Target Goals",
              description: "Define goals (car, house, vacation) and watch tailored portfolios get created.",
            },
            {
              title: "Auto Diversifying",
              description: "Rebalances across 80+ assets to keep risk in check and returns stable.",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 h-12 w-12 rounded-xl bg-blue-100" />
              <h3 className="mb-2 text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="advantages" className="mx-auto mb-14 max-w-7xl px-6 lg:px-10">
        <h2 className="mb-8 text-center text-3xl font-bold text-slate-900 sm:text-4xl">Why Your Wealth Grows Faster With WealthUp</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Smart Rebalancing",
              details: "AI rebalances automatically based on market cycles.",
            },
            {
              title: "Low Fees",
              details: "Transparent pricing with no hidden costs.",
            },
            {
              title: "Dedicated Planner",
              details: "Personal advisor support when you need it.",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="text-slate-600">{item.details}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mb-14 max-w-7xl px-6 lg:px-10">
        <div className="rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-500 to-indigo-500 p-10 text-white shadow-lg sm:flex sm:items-center sm:justify-between">
          <h2 className="text-2xl font-bold sm:text-3xl">Your Goals Deserve a Plan</h2>
          <button className="mt-5 rounded-full border border-white/40 bg-white/10 px-6 py-3 font-semibold transition hover:bg-white/20 sm:mt-0">Get Your Personalized Plan</button>
        </div>
      </section>

      <section id="how" className="mx-auto mb-24 max-w-7xl px-6 lg:px-10">
        <h2 className="mb-10 text-center text-3xl font-bold text-slate-900 sm:text-4xl">How It Works</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { step: "01", title: "Define Your Goal", desc: "Choose a goal and timeline (new car, home, retirement)." },
            { step: "02", title: "Start Your Investment", desc: "Select strategy, set monthly deposits, and fund your plan." },
            { step: "03", title: "Track & Grow", desc: "Use dashboard to monitor performance and adjust automatically." },
          ].map((item) => (
            <article key={item.step} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">{item.step}</div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>
      </div>
    </main>
  );
}


