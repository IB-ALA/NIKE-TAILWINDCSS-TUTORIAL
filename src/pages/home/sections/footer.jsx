import { copyrightSign } from "../../../assets/icons";
import { footerLogo } from "../../../assets/images";
import CommonIMG from "../../../components/commonImg";
import { footerLinks, socialMedia } from "../../../constants";

function Footer() {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start flex-wrap gap-20 max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <CommonIMG
              imgSrc={footerLogo}
              imgAlt={"nike logo"}
              imgHeight={46}
              imgWidth={150}
            />
          </a>

          <p className="text-base leading-7 font-montserrat text-white-400 mt-6 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>

          <div className="flex items-center gap-5 mt-8">
            {socialMedia?.length > 0 &&
              socialMedia.map((icon, index) => (
                <a
                  href={icon?.href}
                  key={index}
                  className="flex justify-center items-center w-12 h-12 bg-white hover:bg-white-400 rounded-full cursor-pointer"
                >
                  <CommonIMG
                    imgSrc={icon.src}
                    imgAlt={icon.alt}
                    imgWidth={24}
                    imgHeight={24}
                  />
                </a>
              ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between gap-20 lg:gap-10 flex-wrap">
          {footerLinks?.length > 0 &&
            footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                  {section.title}
                </h4>

                <ul>
                  {section?.links?.map((link) => (
                    <li
                      key={link?.name}
                      className="text-white-400 mt-3 font-montserrat text-base leading-normal hover:text-slate-gray duration-200"
                    >
                      <a href={link?.link}>{link?.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-mono cursor-pointer">
          <CommonIMG
            imgSrc={copyrightSign}
            imgWidth={20}
            imgHeight={20}
            imgAlt={"copyright sign"}
            imgClassName={"rounded-full m-0"}
          />
          <p>Copyright. All rights reserved.</p>
        </div>

        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
}

export default Footer;
