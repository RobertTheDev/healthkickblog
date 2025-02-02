export default function Footer() {
  return (
    <footer className="bg-[#173C24] p-4 text-center text-white">
      <p className="text-sm font-semibold">
        © {new Date().getFullYear()} Healthkick
      </p>
    </footer>
  );
}
