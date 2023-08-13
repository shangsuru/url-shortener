import Card from "@/components/Card";

export default function Stats() {
  return (
    <div className="mt-20 sm:mx-20">
      <Card
        title="Track your short URLs"
        description="Enter the URL to find out how many clicks it has received so far, and other stuff."
        inputPlaceholder="Enter your LinkShrink here"
        buttonText="View Clicks"
        linkText="Short another URL"
        linkHref="/"
      />
    </div>
  );
}
