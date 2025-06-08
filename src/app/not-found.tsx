import Link from "next/link";

const NotFoundPage = () => {
  return (
    <>
      <h2>Page not found!</h2>
      <Link href="/">Return Home</Link>
    </>
  );
};

export default NotFoundPage;
