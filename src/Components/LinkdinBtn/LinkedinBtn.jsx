import React from "react";

const LinkedinBtn = () => {
  return (
    <div class="fixed top-52 right-0 flex flex-col space-y-3 z-50">
      <a
        target="_blank"
        class="bg-[#0060AF] py-3 px-4 rounded-l-lg shadow-lg text-white "
        href="https://www.linkedin.com/company/mediusware-ltd/mycompany/"
      >
        <svg
          className="linkedin-icon"
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          class=""
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="LinkedIn">
            <g>
              <path d="M18.44,3.06H5.56a2.507,2.507,0,0,0-2.5,2.5V18.44a2.507,2.507,0,0,0,2.5,2.5H18.44a2.5,2.5,0,0,0,2.5-2.5V5.56A2.5,2.5,0,0,0,18.44,3.06Zm1.5,15.38a1.511,1.511,0,0,1-1.5,1.5H5.56a1.511,1.511,0,0,1-1.5-1.5V5.56a1.511,1.511,0,0,1,1.5-1.5H18.44a1.511,1.511,0,0,1,1.5,1.5Z"></path>
              <g>
                <path d="M6.376,10.748a1,1,0,1,1,2,0v6.5h0a1,1,0,0,1-2,0Z"></path>
                <circle cx="7.376" cy="6.744" r="1"></circle>
                <path d="M17.62,13.37v3.88a1,1,0,1,1-2,0V13.37a1.615,1.615,0,1,0-3.23,0v3.88a1,1,0,0,1-2,0v-6.5a1.016,1.016,0,0,1,1-1,.94.94,0,0,1,.84.47,3.609,3.609,0,0,1,5.39,3.15Z"></path>
              </g>
            </g>
          </g>
        </svg>
      </a>
    </div>
  );
};

export default LinkedinBtn;
