import Card from "@/components/Card";

export default function Stats() {
  return (
    <Card
      title="Track your short URLs"
      description="Enter the URL to find out how many clicks it has received so far, and other stuff."
      inputPlaceholder="Enter your LinkShrink link here"
      buttonText="View Clicks"
      linkText="Short another URL"
      linkHref="/"
    />
  );
}
