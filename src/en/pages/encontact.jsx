import { Link } from "react-router-dom";

import ENHeader from "../components/layout/enHeader";
import ENFooter from "../components/layout/enFooter";


export default function ENContact(params) {
  return (
    <div>
    <ENHeader/>
    <section className="">
      <div className=" w-11/12 px-6 py-12 mx-auto">
        <div>
          <p className="font-medium text-primary">Contact</p>

          <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl ">Contact Us</h1>

          <p className="mt-3 text-gray-500 ">Our friendly team would be happy to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <span className="inline-block p-3 text-primary rounded-full bg-blue-100/80">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>

              <h2 className="mt-4 text-base font-medium text-gray-800 ">Email</h2>
              <p className="mt-2 text-sm text-gray-500 ">Our friendly team is ready to help..</p>
              {/* <Link
                to={"info@maf.gen.tr"}
              >
                <p className="mt-2 text-sm text-primary ">info@maf.gen.tr</p>
              </Link> */}

              <p
                className="mt-2 text-sm text-primary"
                onClick={(e) => {
                  window.location.href = "mailto:info@maf.gen.tr";
                }}
                >
                info@maf.gen.tr
              </p>
            </div>

            <div>
              <span className="inline-block p-3 text-primary rounded-full bg-blue-100/80">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </span>

              <h2 className="mt-4 text-base font-medium text-gray-800 ">Ofis</h2>
              <p className="mt-2 text-sm text-gray-500 ">Come and say hello to our factory.</p>
              <p className="mt-2 text-sm text-gray-500 ">
                100. Yıl Bulvarı 1230 Sk. No:18 Yenimahalle/ANKARA </p>
            </div>

            <div>
              <span className="inline-block p-3 text-primary rounded-full bg-blue-100/80">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </span>

              <h2 className="mt-4 text-base font-medium text-gray-800 ">No</h2>
              <p className="mt-2 text-sm text-gray-500">Monday-Friday 8 a.m. to 5 p.m.</p>
              <p
                className="mt-2 text-sm text-primary"
                onClick={(e) => {
                  window.location.href = "tel:+90 312 354 95 95";
                }}
                >
                +90 312 354 95 95
              </p>
              <p
                className="mt-2 text-sm text-primary"
                onClick={(e) => {
                  window.location.href = "tel:+90 312 354 95 96";
                }}
                >
                +90 312 354 95 96
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
            <iframe
              width="100%"
              height="100%"
              frameborder="0"
              title="map"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1528.7398562049757!2d32.7465699!3d39.9753838!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d349f0d4f14bc1%3A0x519d2b6934e39d0e!2zTUFGIE1BS8SwTkEgTcOcSEVORMSwU0zEsEsgTFREIMWeVMSw!5e0!3m2!1ses!2str!4v1693037993998!5m2!1ses!2str"
              ></iframe>
          </div>
        </div>
      </div>
    </section>
    <ENFooter/>
    </div>
  );
}
