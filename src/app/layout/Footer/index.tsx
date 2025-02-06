export default function Footer() {
  return (
    <footer className="bg-white p-6 text-center font-semibold">
      <p className="text-sm font-semibold">
        © {new Date().getFullYear()} Healthkick
      </p>
    </footer>
  );
}
