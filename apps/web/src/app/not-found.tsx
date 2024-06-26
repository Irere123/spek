import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="underline text-alabaster-600">
        Return Home
      </Link>
    </div>
  );
}
