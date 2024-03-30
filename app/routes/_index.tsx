import type { MetaFunction } from "@remix-run/node";
import TwitterX from "~/icons/twitterX";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex justify-center md:items-center bg-grey/50 md:h-screen p-0 md:p-8 ">
      <div className="flex flex-col gap-[75px] max-w-4xl text-brown p-16 bg-grey shadow-lg">
        <section className="grid md:grid-cols-2 justify-items-center items-center gap-24">
          <img className="rounded p-5 bg-brown/10" src="/holy_cat_frame.png" alt="holy cat mascot" />
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-serif">HolyCat</h1>
            <div className="h-1 w-full rounded-full bg-brown" />
            {/* <p className="text-2xl font-serif">A cool crypto currency</p> */}
            <p className="text-base leading-[32px]">HolyCat is the holiest cat of them all. He sits on his cross, arms outstretched, patiently waiting for his followers to bow to him. Support HolyCat as he spreads good across the world.</p>
          </div>
        </section>
        <section className="grid md:grid-cols-2 gap-24">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-serif">Tokenomics</h1>
            <div className="h-1 w-full rounded-full bg-brown" />
            <ul className="flex flex-col gap-4 pl-4 list-disc">
              <li>No tax</li>
              <li>Liquidity pool burnt</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 ">
            <h1 className="text-4xl font-serif">Find us here</h1>
            <div className="h-1 w-full rounded-full bg-brown" />
            <section className="flex flex-1 flex-col text-brown">
              <div className="flex flex-1 items-center gap-8 md:justify-end">
                <Link to="https://x.com/holy_cat80?t=Z5g_QxYnKtWp1TPwisv_eg&s=09" target="_blank" rel="noreferrer">
                  <TwitterX className="w-8 h-8" />
                </Link>
              </div>
            </section>
          </div>
        </section>
        <p className="text-center text-xs">@2024 - Holy Cat</p>

      </div>

    </div>
  );
}
