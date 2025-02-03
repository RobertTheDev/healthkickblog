export default function Footer() {
  return (
    <footer className="border-t border-gray-300 bg-white p-4 text-center text-gray-600">
      <p className="text-sm font-semibold">
        © {new Date().getFullYear()} Healthkick
      </p>
    </footer>
  );
}
