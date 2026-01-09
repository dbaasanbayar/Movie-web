import { IconMail } from "./assets/icon-mail";
import { IconMovie2 } from "./assets/icon-movie-2";
import { IconPhone } from "./assets/icon-phone";

export const Footer = () => {
  return (
    <footer className="mt-12 bg-[#4338CA] text-[#FAFAFA] w-full px-4 sm:px-8 lg:px-20 py-10">
      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-16">
        {/* Branding */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <IconMovie2 />
            <p className="font-bold text-lg">Movie Z</p>
          </div>
          <p className="text-sm">© 2024 Movie Z. All Rights Reserved.</p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
          <div className="flex flex-col gap-3">
            <p className="font-semibold">Contact Information</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <IconMail />
                <div className="text-sm">
                  <h3 className="font-semibold">Email:</h3>
                  <p>support@movieZ.com</p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <IconPhone />
                <div className="text-sm">
                  <h3 className="font-semibold">Phone:</h3>
                  <p>+976 (11) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Follow Us</p>
            <div className="flex gap-3 flex-wrap text-sm">
              <span className="hover:underline cursor-pointer">Facebook</span>
              <span className="hover:underline cursor-pointer">Instagram</span>
              <span className="hover:underline cursor-pointer">Twitter</span>
              <span className="hover:underline cursor-pointer">YouTube</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
