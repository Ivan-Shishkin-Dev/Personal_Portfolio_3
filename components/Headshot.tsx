import Image from "next/image";

export default function Headshot() {
  return (
    <div className="home-figure">
      <button
        type="button"
        className="home-photo"
        aria-label="Enlarge photo"
        popoverTarget="headshot-large"
      >
        <Image
          src="/headshot.png"
          alt="Ivan Shishkin"
          fill
          sizes="(max-width: 640px) 180px, 220px"
          quality={100}
          priority
        />
      </button>
      <div id="headshot-large" popover="auto" className="headshot-large">
        <button
          type="button"
          aria-label="Close photo"
          popoverTarget="headshot-large"
          popoverTargetAction="hide"
        >
          <Image
            src="/headshot.png"
            alt="Ivan Shishkin"
            width={1086}
            height={1448}
            sizes="(max-width: 480px) 80vw, 340px"
            quality={100}
            loading="eager"
          />
          <span>I see you looking closer lol</span>
        </button>
      </div>
    </div>
  );
}
