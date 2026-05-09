export default function Footer() {
    return (
    <footer className="border-t bg-white px-8 py-4">

      <div className="flex flex-col items-center justify-between gap-2 text-sm text-gray-600 sm:flex-row">

        {/* Left */}
        <div>
          © {new Date().getFullYear()} SANfinity.co,Ltd.
          All Rights Reserved.
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">

          <a
            href="https://maps.app.goo.gl/qDVHGMkxvWvcpArW8"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            📍 Bangkok Office
          </a>

          <span>|</span>

          <a
            href="mailto:info@sanfinity.com"
            className="hover:text-blue-600"
          >
            ✉️ info@sanfinity.com
          </a>

          <span>|</span>

          <a
            href="tel:026510909"
            className="hover:text-blue-600"
          >
            📞 +66 (02) 651 0909
          </a>

        </div>

      </div>

    </footer>
  );

}