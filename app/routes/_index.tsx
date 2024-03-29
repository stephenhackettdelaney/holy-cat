import type { MetaFunction } from "@remix-run/node";
import TwitterX from "~/icons/twitterX";
import Facebook from "~/icons/facebook";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex justify-center md:items-center  bg-grey/70 md:h-screen">
      <div className="flex flex-col gap-[75px] max-w-4xl text-brown p-16 bg-grey">
        <section>
          <section className="grid md:grid-cols-2 gap-24">
            <img className="rounded p-5 bg-brown/10" src="/holy_cat_frame.png" alt="holy cat mascot" />
            <div className="flex flex-col gap-6">
              <h1 className="text-5xl font-serif">Holy Cat</h1>
              <div className="h-1 w-full rounded-full bg-brown" />
              <p className="text-2xl font-serif">A cool crypto currency</p>
              <p className="text-base leading-[32px]">Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            </div>
          </section>
        </section>
        <section>
          <section className="grid md:grid-cols-2 gap-24">
            <div className="flex flex-col gap-6">
              <h1 className="text-5xl font-serif">Tokenomics</h1>
              <div className="h-1 w-full rounded-full bg-brown" />
              <p className="text-2xl font-serif">What this coin offers</p>
              <ul className="flex flex-col gap-4 pl-4 list-disc">
                <li>0/0 tax</li>
                <li>Liquidity pool burnt</li>
                <li>Immutable</li>
                <li>100% community owned</li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="text-5xl font-serif">Find us here</h1>
              <div className="h-1 w-full rounded-full bg-brown" />
              <section className="flex flex-1 flex-col text-brown">
                <div className="flex flex-1 items-center gap-8 md:justify-end">
                  <TwitterX className="w-8 h-8" />
                  <TwitterX className="w-8 h-8" />
                  <TwitterX className="w-8 h-8" />
                  <TwitterX className="w-8 h-8" />
                </div>
                <p className="mt-16 md:mt-auto md:text-right">@2024 - Holy Cat</p>
              </section>
            </div>

          </section>
        </section>
      </div>

    </div>
  );
}
