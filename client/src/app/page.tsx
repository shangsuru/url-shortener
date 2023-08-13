import Card from "@/components/Card";
import ShortURL from "@/components/ShortURL";

export default function Home() {
  return (
    <div className="mt-20 sm:mx-20">
      <Card
        title="LinkShrink URL Shortener"
        description="Create short & memorable links in seconds with this free tool."
        inputPlaceholder="Enter link here"
        buttonText="Shorten URL"
        linkText="Show URL stats"
        linkHref="/stats"
      />
      <div className="m-5">
        <ShortURL longURL="henryhelm.com" shortURL="linkshrink.io/rgzbyax" />
      </div>
    </div>
  );
}
