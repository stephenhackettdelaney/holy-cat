import { useState, useEffect } from "react";
import TwitterX from "~/icons/twitterX";
import TelegramIcon from "~/icons/telegram";
import DexScreenerIcon from "~/icons/dexscreener";
import { Link } from "@remix-run/react";
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "HolyCat" },
    {
      name: "description",
      content: "HolyCat token",
    },
    {
      property: "og:title",
      content: "HolyCat",
    },
    {
      property: "og:image",
      content: "https://holy-cat.vercel.app/holycat_preview.png"
    },
    {
      name: "twitter:title",
      content: "HolyCat"
    },
    {
      name: "twitter:description",
      content: "HolyCat token"
    },
    {
      name: "twitter:card",
      content: "summary_large_image"
    },
    {
      name: "twitter:image",
      content: "https://holy-cat.vercel.app/holycat_preview.png"
    },
  ];
};



export default function Index() {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    let copyTimeout: NodeJS.Timeout;
    if (isCopied) {
      copyTimeout = setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }

    return () => {
      clearTimeout(copyTimeout);
    };
  }, [isCopied]);

  function copyCode() {
    const copyText = document.getElementById("contract_code");
    if (copyText) {
      copyText.select();
      copyText.setSelectionRange(0, 99999)

      navigator.clipboard.writeText(copyText!.value);

      setIsCopied(true)
    }
  }

  return (
    <div className="flex justify-center md:items-center bg-grey/50 md:h-screen p-0 md:p-8 ">
      <div className="flex flex-col gap-[30px] max-w-4xl text-brown p-16 bg-grey shadow-lg">
        <section className="grid md:grid-cols-2 justify-items-center items-center gap-24">
          <img className="rounded p-5 bg-brown/10" src="/holy_cat_frame.png" alt="holy cat mascot" />
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-serif">HolyCat</h1>
            <div className="h-1 w-full rounded-full bg-brown" />
            <p className="text-2xl font-serif">He's just so holy!</p>
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
              <li>1,000,000,000 supply</li>
            </ul>
            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-serif underline">Contract:</h2>
              <input id="contract_code" type="text" value="2NZVzetyWQa2WcyKvHRNAiHHXCZzLsxrz5kB9ffgfsD8" className="text-sm md:text-base outline-none bg-grey" readOnly={true} />
              <button onClick={copyCode} className="self-start px-6 h-10 bg-brown/80 text-grey">{isCopied ? "Copied!" : "Copy contract code"}</button>
            </section>
          </div>
          <div className="flex flex-col gap-6 ">
            <h1 className="text-4xl font-serif">Find us here</h1>
            <div className="h-1 w-full rounded-full bg-brown" />
            <section className="flex flex-1 flex-col text-brown">
              <div className="flex flex-1 items-center gap-8 md:justify-end">
                <Link className="hover:text-[#D76C2F]" to="https://x.com/holy_cat80?t=Z5g_QxYnKtWp1TPwisv_eg&s=09" target="_blank" rel="noreferrer">
                  <TwitterX className="w-8 h-8" />
                </Link>
                <Link className="hover:text-[#D76C2F]" to="https://t.me/holycatsolpublic" target="_blank" rel="noreferrer">
                  <TelegramIcon className="w-8 h-8" />
                </Link>
                <Link className="hover:text-[#D76C2F]" to="https://x.com/holy_cat80?t=Z5g_QxYnKtWp1TPwisv_eg&s=09" target="_blank" rel="noreferrer">
                  <DexScreenerIcon className="w-8 h-8" />
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


