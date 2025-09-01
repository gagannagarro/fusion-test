'use client';

export default function OpportunityDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <header className="w-full h-17 bg-white shadow-sm border-b border-gray-200">
        <div className="flex items-center justify-between h-full px-11">
          {/* Logo */}
          <div className="flex items-center">
            <svg width="147" height="35" viewBox="0 0 147 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_51_4086)">
                <path d="M32.4285 34.8007C27.9371 34.8007 22.2104 31.9209 17.2249 27.0918C17.0003 27.712 16.7308 28.3101 16.4613 28.8861C14.7321 32.3418 12.2618 34.2247 9.4995 34.2247C6.73723 34.2247 4.222 32.3639 2.49278 28.9969C0.87584 25.9399 0 21.7975 0 17.3893C0 10.1899 2.40295 4.12027 6.28808 1.52849C8.98298 -0.265809 12.3741 -0.487328 16.0795 0.88609C19.2236 2.03799 22.6146 4.34179 25.9608 7.59812C26.2527 6.8228 26.6121 6.04748 27.0388 5.31647C28.7904 2.25951 31.2383 0.575963 33.9107 0.575963C39.2556 0.575963 43.2755 7.79748 43.2755 17.3893C43.2755 21.5538 42.5119 25.3639 41.0522 28.4431C40.4234 29.8386 39.5476 31.1013 38.4921 32.231C37.5713 33.2279 36.4035 33.981 35.101 34.4241C34.2476 34.6677 33.3493 34.8007 32.4285 34.8007ZM17.921 24.8766C24.1867 31.345 30.9239 33.6045 34.4722 32.4525C36.2912 31.8544 37.9531 30.1266 39.1658 27.557C40.4908 24.7658 41.1869 21.2437 41.1869 17.3893C41.1869 13.3133 40.4009 9.52533 38.9412 6.71204C37.5713 4.07596 35.7972 2.61394 33.9107 2.61394C31.1934 2.61394 28.8354 5.29432 27.5777 9.25951C32.6307 14.7532 35.9544 21.4652 35.6624 25.7627C35.5501 27.3133 34.9887 28.5317 34.023 29.3291L33.9332 29.3956C32.8552 30.1044 31.5976 30.1488 30.3625 29.4842C27.151 27.8007 24.546 21.6203 24.546 15.75C24.546 13.7563 24.7706 11.7627 25.2646 9.8133C18.4376 2.8133 11.7902 0.354444 7.45587 3.23419C4.17708 5.40508 2.06608 10.9652 2.06608 17.3893C2.06608 25.6962 5.32241 32.1867 9.47704 32.1867C12.0596 32.1867 14.3054 29.5285 15.5855 25.4304C12.2618 21.7532 9.74653 17.6551 8.48891 13.845C7.27621 10.1234 7.41096 7.11077 8.87069 5.60444C9.8139 4.62976 11.2063 4.38609 12.6885 4.98419C15.7427 6.20255 18.8643 10.788 18.8643 17.1899C18.8643 19.7817 18.5498 22.3513 17.921 24.8766ZM26.9938 11.6962C26.7468 13.0253 26.6345 14.3987 26.6345 15.75C26.6345 21.3101 29.1273 26.4937 31.3506 27.6677C32.0243 28.0222 32.451 27.8893 32.743 27.6899C33.237 27.269 33.529 26.5601 33.5963 25.6298C33.8209 22.1519 31.1036 16.5032 26.9938 11.6962ZM11.1389 6.71204C10.8469 6.71204 10.5775 6.8228 10.3753 7.02217C9.70162 7.70888 9.3423 9.74685 10.4652 13.2025C11.4982 16.3924 13.5194 19.8038 16.2143 22.9715C16.596 21.0443 16.7757 19.1171 16.7533 17.1677C16.7757 11.076 13.7889 7.64242 11.9024 6.88925C11.6554 6.7785 11.4084 6.73419 11.1389 6.71204Z" fill="#47D7AC"/>
                <path d="M56.2783 22.9051V11.9178H59.0406V13.7121C59.4673 13.0475 60.0736 12.538 60.7923 12.2279C61.6456 11.8291 62.5664 11.6298 63.4872 11.6519C65.7554 11.6519 67.1253 12.4272 67.5969 14C67.7765 14.576 67.8664 15.3735 67.8664 16.4146V22.9272H65.0592V17.057C65.0592 16.1709 64.9469 15.5507 64.7448 15.1962C64.4079 14.5317 63.6444 14.1994 62.499 14.1994C61.8253 14.1994 61.1516 14.3545 60.5452 14.6646C59.9613 14.9304 59.4673 15.3291 59.108 15.8608V22.9051H56.2783Z" fill="#003310"/>
                <path d="M80.2403 23.2595C78.848 23.2595 77.9946 22.7943 77.6802 21.8418C76.8268 22.8608 75.4794 23.3703 73.6154 23.3703C72.2006 23.3703 71.1002 23.0602 70.3141 22.4178C69.5506 21.8197 69.1239 20.9114 69.1464 19.9589C69.1464 18.3418 69.9773 17.3007 71.6616 16.8133C72.7171 16.5254 74.0421 16.3703 75.6366 16.3703C76.1755 16.3703 76.737 16.4146 77.276 16.5032V16.1488C77.2984 15.6836 77.1412 15.2184 76.8268 14.864C76.4226 14.4431 75.659 14.2437 74.5361 14.2437C72.762 14.2437 71.3247 14.6867 70.1794 15.5507H70.0896V13.0697C71.4595 12.2057 73.1438 11.7627 75.1425 11.7627C76.7594 11.7627 77.9721 12.0728 78.7806 12.6709C79.2297 13.0032 79.5666 13.4462 79.7687 13.9557C79.9708 14.4652 80.0831 15.1519 80.0831 16.0159C80.0831 16.2817 80.0831 16.769 80.0607 17.4336C80.0607 18.1203 80.0382 18.5855 80.0382 18.8735C80.0382 19.6931 80.0831 20.1804 80.1505 20.3355C80.2628 20.6456 80.5772 20.8007 81.0488 20.8007C81.3632 20.8007 81.6552 20.7564 81.9471 20.6678V22.9273C81.5204 23.1709 80.959 23.2595 80.2403 23.2595ZM77.276 18.519C76.737 18.4304 76.198 18.4083 75.659 18.4083C74.873 18.3861 74.087 18.4747 73.3234 18.6298C72.4476 18.8292 71.9985 19.25 71.9985 19.9146C71.9985 20.8007 72.7395 21.2437 74.1993 21.2437C75.5692 21.2437 76.6022 20.845 77.2984 20.0254C77.276 19.7374 77.276 19.2279 77.276 18.519Z" fill="#003310"/>
                <path d="M83.6541 23.8133H83.7439C85.0464 24.7658 86.7083 25.231 88.7295 25.231C90.3015 25.231 91.4244 24.8766 92.0756 24.1899C92.5248 23.7247 92.7493 22.9715 92.7493 21.8861V21.0665C92.4349 21.576 91.896 22.019 91.11 22.3734C90.279 22.75 89.3583 22.9272 88.46 22.9051C86.6858 22.9051 85.2261 22.462 84.0808 21.5538C82.9354 20.6456 82.374 19.3386 82.3515 17.6108C82.3291 16.6804 82.5312 15.75 82.913 14.9082C83.2498 14.1772 83.7888 13.5348 84.4401 13.0696C85.0464 12.6487 85.7426 12.3165 86.4388 12.0949C87.135 11.8734 87.8761 11.7848 88.6172 11.7848C89.5155 11.7627 90.3913 11.9399 91.2222 12.25C92.0083 12.5601 92.5248 12.9589 92.7718 13.4241V12.0949H95.4667V21.7532C95.4667 23.326 95.1748 24.5222 94.5909 25.3861C93.5354 26.9146 91.5816 27.6677 88.707 27.6677C87.6964 27.6677 86.6858 27.557 85.6977 27.3354C84.7994 27.1139 84.1032 26.8481 83.6316 26.5158L83.6541 23.8133ZM92.6595 15.8386C92.3676 15.2848 91.896 14.8418 91.3121 14.5981C90.6383 14.288 89.8972 14.1329 89.1562 14.1551C88.168 14.1329 87.2024 14.4209 86.3939 14.9968C85.6303 15.5506 85.2486 16.4146 85.2486 17.5443C85.2486 18.519 85.6303 19.25 86.3714 19.7595C87.1799 20.2911 88.1456 20.5348 89.1112 20.5127C89.8523 20.5127 90.5934 20.3576 91.2672 20.0696C91.851 19.826 92.3451 19.4051 92.682 18.8734L92.6595 15.8386Z" fill="#003310"/>
                <path d="M107.841 23.2595C106.448 23.2595 105.595 22.7943 105.281 21.8418C104.427 22.8608 103.08 23.3703 101.238 23.3703C99.8234 23.3703 98.723 23.0602 97.9369 22.4178C97.1734 21.8197 96.7467 20.9114 96.7692 19.9589C96.7692 18.3418 97.6001 17.3007 99.2844 16.8133C100.34 16.5254 101.665 16.3703 103.259 16.3703C103.798 16.3703 104.36 16.4146 104.899 16.5032V16.1709C104.921 15.7057 104.764 15.2405 104.45 14.8861C104.045 14.4652 103.282 14.2659 102.159 14.2659C100.385 14.2659 98.9475 14.7089 97.8022 15.5728H97.6899V13.0697C99.0598 12.2057 100.744 11.7627 102.743 11.7627C104.36 11.7627 105.572 12.0728 106.381 12.6709C106.83 13.0032 107.167 13.4462 107.369 13.9557C107.571 14.4652 107.683 15.1519 107.683 16.0159C107.683 16.2817 107.683 16.769 107.661 17.4336C107.639 18.1203 107.639 18.5855 107.639 18.8735C107.639 19.6931 107.683 20.1804 107.751 20.3355C107.863 20.6456 108.178 20.8007 108.649 20.8007C108.964 20.8007 109.255 20.7564 109.547 20.6678V22.9273C109.121 23.1709 108.559 23.2595 107.841 23.2595ZM104.876 18.519C104.337 18.4304 103.798 18.4083 103.259 18.4083C102.473 18.3861 101.687 18.4747 100.924 18.6298C100.048 18.8292 99.5988 19.25 99.5988 19.9146C99.5988 20.8007 100.317 21.2437 101.8 21.2437C103.17 21.2437 104.203 20.845 104.899 20.0254C104.876 19.7374 104.876 19.2279 104.876 18.519Z" fill="#003310"/>
                <path d="M110.782 23.0823V12.0728H113.545V13.9336C113.747 13.3798 114.174 12.8924 114.825 12.4494C115.521 11.9842 116.352 11.7627 117.183 11.7848C117.834 11.7848 118.351 11.8956 118.71 12.095V14.8639H118.62C118.081 14.6203 117.497 14.5095 116.913 14.5317C116.172 14.5095 115.431 14.6646 114.78 14.9526C114.263 15.1962 113.837 15.6171 113.635 16.1266V23.0602L110.782 23.0823Z" fill="#003310"/>
                <path d="M139.326 21.731C138.113 22.8164 136.541 23.3702 134.61 23.3702C132.678 23.3702 131.106 22.8386 129.916 21.7531C128.726 20.6677 128.12 19.2721 128.12 17.5664C128.12 15.8607 128.726 14.4652 129.961 13.4019C131.174 12.3164 132.746 11.7848 134.677 11.7848C136.653 11.7848 138.225 12.3164 139.393 13.3797C140.561 14.443 141.145 15.8386 141.145 17.5886C141.122 19.25 140.516 20.6455 139.326 21.731ZM137.305 15.1519C136.631 14.5095 135.778 14.1993 134.632 14.1993C133.509 14.1993 132.634 14.5095 131.937 15.1519C131.241 15.7721 130.859 16.6582 130.882 17.5664C130.859 18.4968 131.241 19.3829 131.96 19.981C132.678 20.6012 133.554 20.8892 134.632 20.8892C135.733 20.8892 136.609 20.5791 137.282 19.9367C137.956 19.3164 138.315 18.4525 138.293 17.5443C138.338 16.6582 137.978 15.7943 137.305 15.1519Z" fill="#003310"/>
                <path d="M119.99 23.0823V12.0728H122.752V13.9336C122.954 13.3798 123.381 12.8924 124.032 12.4494C124.729 11.9842 125.559 11.7627 126.39 11.7848C127.042 11.7848 127.558 11.8956 127.917 12.095V14.8639H127.828C127.289 14.6203 126.705 14.5095 126.121 14.5317C125.38 14.5095 124.639 14.6646 123.987 14.9526C123.471 15.1962 123.044 15.6171 122.82 16.1266V23.0602L119.99 23.0823Z" fill="#003310"/>
              </g>
              <defs>
                <clipPath id="clip0_51_4086">
                  <rect width="147" height="35" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center gap-6">
            {/* Chat */}
            <div className="w-6 h-6 text-gray-500">
              <svg viewBox="0 0 18 19" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M16 0C17.1046 0 18 0.89543 18 2V14C18 15.1046 17.1046 16 16 16H6L0 19L0 2C0 0.89543 0.89543 0 2 0H16ZM16 2H2V15.468L5.44603 14H16V2ZM8 9V11H4V9H8ZM14 5V7H4V5H14Z"/>
              </svg>
            </div>

            {/* Notifications */}
            <div className="relative">
              <div className="w-6 h-6 text-gray-500">
                <svg viewBox="0 0 14 18" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8 0C10.2816 0.463729 12 2.58146 12 5V9C13.1046 9 14 9.89543 14 11V16H9C9 17.1046 8.10457 18 7 18C5.89543 18 5 17.1046 5 16H0V11C0 9.89543 0.89543 9 2 9V5C2 2.58111 3.71785 0.463343 6 0H8ZM7 2C5.40232 2 4.09634 3.24892 4.00509 4.82373L4 5V9C4 10.1046 3.10457 11 2 11V14H12V11C10.8954 11 10 10.1046 10 9V5C10 3.34315 8.65685 2 7 2Z"/>
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-bold">5</span>
              </div>
            </div>

            {/* User Profile */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gray-300 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=36&h=36&fit=crop&crop=face" alt="User" className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center gap-1">
                <span className="text-sm text-gray-600">X'eriya Ponald</span>
                <svg className="w-3 h-3 text-gray-400" viewBox="0 0 12 7" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.292893C-0.0675907 0.653377 -0.0953203 1.22061 0.209705 1.6129L0.292893 1.70711L5.29289 6.70711C5.65338 7.06759 6.22061 7.09532 6.6129 6.7903L6.70711 6.70711L11.7071 1.70711C12.0976 1.31658 12.0976 0.683418 11.7071 0.292893C11.3466 -0.0675907 10.7794 -0.0953203 10.3871 0.209705L10.2929 0.292893L6 4.585L1.70711 0.292893C1.34662 -0.0675907 0.779392 -0.0953203 0.387101 0.209705L0.292893 0.292893Z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Background */}
      <div className="relative bg-gradient-to-r from-green-600 to-green-700 h-24 flex items-end">
        <div className="absolute inset-0">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/50bffef354b234ba4b4c716422ac825bd7d76f09?width=2766" alt="Background" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative px-11 pb-6">
          <h1 className="text-white text-3xl font-bold">Secure Power System</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-14 py-8">
        {/* Opportunity Summary */}
        <div className="bg-green-50 rounded border border-green-100 p-8 mb-6">
          <h2 className="text-green-800 text-xl font-bold mb-6">Opportunity Summary</h2>
          <p className="text-black text-base leading-6 mb-8">
            The customer is planning an enterprise data center with an estimated IT load of 300 kW. They require high-efficiency UPS systems, precision cooling solutions, and a digital monitoring layer for visibility and control. The project emphasizes sustainability.
          </p>
          
          <div className="border-t border-gray-300 pt-8">
            <h2 className="text-green-800 text-xl font-bold mb-6">Win probability estimation</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Circular Progress Chart */}
              <div className="flex flex-col items-center justify-center">
                <div className="relative w-48 h-48">
                  <svg className="w-full h-full" viewBox="0 0 476 446">
                    <path d="M319.096 311.557C305.119 322.003 288.869 328.993 271.674 331.955C254.479 334.918 236.826 333.769 220.16 328.602C203.494 323.435 188.287 314.397 175.784 302.227C163.28 290.057 153.834 275.1 148.218 258.58L252.901 222.993L319.096 311.557Z" fill="#01531B"/>
                    <path d="M317.616 133.343C331.763 143.555 343.293 156.971 351.263 172.494C359.232 188.016 363.415 205.204 363.468 222.653C363.522 240.101 359.446 257.315 351.572 272.886C343.698 288.457 332.251 301.944 318.167 312.244L252.902 222.993L317.616 133.343Z" fill="#01822A"/>
                    <path d="M318.263 133.813C304.19 123.499 287.875 116.661 270.652 113.86C253.43 111.059 235.789 112.374 219.172 117.696C202.555 123.019 187.434 132.199 175.045 144.486C162.655 156.773 153.35 171.817 147.889 188.389L252.902 222.993L318.263 133.813Z" fill="#02B63C"/>
                    <circle cx="252.258" cy="222.258" r="43.2579" fill="white"/>
                    <text x="223" y="234.03" fill="#007425" fontSize="30" fontWeight="bold" fontFamily="Arial Rounded MT Bold">90%</text>
                  </svg>
                </div>
                <p className="text-sm text-black mt-4 max-w-32 text-center leading-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                </p>
              </div>

              {/* Qualification Snapshot */}
              <div className="space-y-8">
                <h3 className="text-green-800 text-xl font-bold">Qualification Snapshot</h3>
                
                {/* Progress Items */}
                <div className="space-y-6">
                  {/* Technical Fit - 80% */}
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6">
                      <svg viewBox="0 0 23 23" fill="none">
                        <path d="M16.4859 2.66091C16.5644 1.90069 16.0118 1.22071 15.2516 1.14215C14.4914 1.06359 13.8114 1.61619 13.7328 2.37642C13.6543 3.13664 14.2069 3.81662 14.9671 3.89518C15.7273 3.97374 16.4073 3.42114 16.4859 2.66091Z" stroke="#02B63C" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="11.5678" cy="11.7022" r="2.4023" stroke="#02B63C" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-bold text-black opacity-60">Technical Fit</span>
                        <span className="text-base font-bold text-black opacity-60">80%</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="relative w-18 h-18">
                          <svg className="w-full h-full" viewBox="0 0 87 87">
                            <path d="M78.9996 43.5596C78.9996 52.0264 75.9785 60.2155 70.4797 66.6537C64.9809 73.0919 57.3653 77.3569 49.0027 78.6814C40.6401 80.0059 32.0793 78.303 24.8601 73.8791C17.641 69.4552 12.2372 62.6006 9.62078 54.5481C7.00438 46.4957 7.34706 37.7739 10.5872 29.9515C13.8273 22.1292 19.7522 15.7196 27.2962 11.8758C34.8403 8.03189 43.5083 7.00597 51.7412 8.98251C59.9741 10.9591 67.2316 15.8084 72.2083 22.6582" stroke="#D9D9D9" strokeWidth="15"/>
                            <path d="M7.88057 43.5596C7.88057 52.0264 10.9017 60.2155 16.4004 66.6537C21.8992 73.0919 29.5148 77.3569 37.8774 78.6814C46.24 80.0059 54.8008 78.303 62.02 73.8791C69.2392 69.4552 74.6429 62.6006 77.2593 54.5481C79.8757 46.4957 79.5331 37.7739 76.2929 29.9515C73.0528 22.1292 67.1279 15.7196 59.5839 11.8758C52.0399 8.03189 43.3719 7.00597 35.1389 8.98251C26.906 10.9591 19.6485 15.8084 14.6719 22.6582" stroke="url(#paint0_linear)" strokeWidth="15"/>
                            <defs>
                              <linearGradient id="paint0_linear" x1="78.9998" y1="43.5596" x2="7.88057" y2="43.5596">
                                <stop stopColor="#01B73B"/>
                                <stop offset="1" stopColor="#007425"/>
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <p className="text-sm text-black opacity-50 max-w-56 leading-4">
                          The lead shows a strong technical fit, with requirements aligning closely to Secure Power's UPS, cooling, and monitoring portfolio.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Lead Relevance - 60% */}
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6">
                      <svg viewBox="0 0 23 23" fill="none">
                        <path d="M11.6375 14.6428C13.4317 14.5497 14.8108 13.0197 14.7177 11.2254C14.6246 9.43115 13.0946 8.05207 11.3003 8.14516C9.50606 8.23825 8.12698 9.76827 8.22007 11.5625C8.31316 13.3568 9.84318 14.7359 11.6375 14.6428Z" stroke="#01822A" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18.0329 20.2919V22.1361H4.90503V20.2919C4.90503 18.8385 5.45715 17.5152 6.35347 16.5149C7.39009 15.3693 8.89002 14.6445 10.5575 14.6445H12.3804C14.0479 14.6445 15.5478 15.3682 16.5844 16.5149C17.4808 17.5152 18.0329 18.8385 18.0329 20.2919Z" stroke="#01822A" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-bold text-black opacity-60">Lead Relevance</span>
                        <span className="text-base font-bold text-black opacity-60">60%</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="relative w-18 h-18">
                          <svg className="w-full h-full" viewBox="0 0 87 87">
                            <path d="M78.9996 43.7198C78.9996 38.0828 77.6714 32.5259 75.1238 27.5034C72.5761 22.4808 68.8813 18.1352 64.3414 14.8219C59.8014 11.5086 54.5453 9.32161 49.0027 8.4398C43.4601 7.55798 37.7885 8.00636 32.4514 9.74828C27.1144 11.4902 22.2636 14.4762 18.2955 18.4621C14.3275 22.448 11.3549 27.3207 9.62078 32.6818C7.88668 38.0428 7.44031 43.74 8.31817 49.3076C9.19603 54.8751 11.3732 60.1549 14.6717 64.7153" stroke="#D9D9D9" strokeWidth="15"/>
                            <path d="M7.88057 43.3995C7.88057 49.0364 9.20869 54.5933 11.7563 59.6159C14.304 64.6385 17.9988 68.9841 22.5388 72.2974C27.0787 75.6107 32.3348 77.7977 37.8774 78.6795C43.42 79.5613 49.0917 79.1129 54.4287 77.371C59.7657 75.6291 64.6165 72.6431 68.5846 68.6572C72.5526 64.6712 75.5252 59.7985 77.2593 54.4375C78.9934 49.0764 79.4398 43.3792 78.562 37.8117C77.6841 32.2441 75.5069 26.9643 72.2085 22.4039" stroke="url(#paint0_linear_60)" strokeWidth="15"/>
                            <defs>
                              <linearGradient id="paint0_linear_60" x1="78.9998" y1="50.7616" x2="7.88057" y2="50.7616">
                                <stop stopColor="#01B73B"/>
                                <stop offset="1" stopColor="#007425"/>
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <p className="text-sm text-black opacity-50 max-w-56 leading-4">
                          The lead is highly relevant, as the project scope and industry segment align directly with Secure Power's target market and solution strengths.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Business Value Potential - 90% */}
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6">
                      <svg viewBox="0 0 23 23" fill="none">
                        <path d="M12.4419 21.9918V17.1105C12.4419 16.7875 12.6074 16.4877 12.881 16.3151L17.2344 13.5706C17.6058 13.3364 18.0903 13.3909 18.4002 13.7008C18.7898 14.0904 18.7626 14.7314 18.3396 15.0857L15.9706 17.0731" stroke="#01531B" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13.1 4.84178V3.35094C13.1 2.05289 14.1528 1.00012 15.4508 1.00012H16.332C16.4945 1.00012 16.6257 1.13134 16.6257 1.29385V2.17503C16.6257 3.47307 15.5729 4.52584 14.2749 4.52584C12.9768 4.52584 11.9241 5.57862 11.9241 6.87666C11.9241 8.05258 12.5115 8.64003 12.5115 9.81594C12.5115 10.4518 12.3056 11.0706 11.9241 11.5793" stroke="#01531B" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-bold text-black opacity-60">Business Value Potential</span>
                        <span className="text-base font-bold text-black opacity-60">90%</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="relative w-18 h-18">
                          <svg className="w-full h-full" viewBox="0 0 88 88">
                            <path d="M53.6521 77.8993C60.9057 75.9558 67.3578 71.7657 72.0836 65.9298C76.8095 60.0938 79.5665 52.9116 79.9595 45.4125C80.3525 37.9133 78.3614 30.4822 74.2714 24.1843C70.1815 17.8863 64.2027 13.0448 57.1921 10.3537C50.1814 7.66253 42.4987 7.25989 35.2451 9.20348C27.9916 11.1471 21.5395 15.3371 16.8136 21.173C12.0878 27.009 9.3308 34.1912 8.93779 41.6904C8.54477 49.1895 10.5359 56.6206 14.6259 62.9186" stroke="#D9D9D9" strokeWidth="15"/>
                            <path d="M8.88961 43.5514C8.88961 51.0609 11.2669 58.3775 15.6809 64.4528C20.0948 70.5281 26.3188 75.05 33.4607 77.3706C40.6026 79.6911 48.2958 79.6911 55.4377 77.3706C62.5796 75.05 68.8036 70.5281 73.2175 64.4528C77.6315 58.3775 80.0088 51.0609 80.0088 43.5514C80.0088 36.042 77.6315 28.7253 73.2175 22.65C68.8036 16.5747 62.5796 12.0528 55.4377 9.73223C48.2958 7.41168 40.6026 7.41168 33.4607 9.73223" stroke="url(#paint0_linear_90)" strokeWidth="15"/>
                            <defs>
                              <linearGradient id="paint0_linear_90" x1="80.0088" y1="43.5514" x2="8.8896" y2="43.5514">
                                <stop stopColor="#01B73B"/>
                                <stop offset="1" stopColor="#007425"/>
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <p className="text-sm text-black opacity-50 max-w-56 leading-4">
                          The business value potential is significant, offering measurable ROI through efficiency gains, downtime reduction, and sustainability benefits.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lead Details */}
          <div className="border-t border-gray-300 pt-8 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div>
                <div className="text-base text-black opacity-80 leading-6">
                  Lead Name<br/>
                  <span className="font-bold">BrightEdge Finance</span>
                </div>
              </div>
              <div>
                <div className="text-base text-black opacity-80 leading-6">
                  Region<br/>
                  <span className="font-bold">Indiana</span>
                </div>
              </div>
              <div>
                <div className="text-base text-black opacity-80 leading-6">
                  Vertical<br/>
                  <span className="font-bold">Financial Services</span>
                </div>
              </div>
              <div>
                <div className="text-base text-black opacity-80 leading-6">
                  Data Source<br/>
                  <span className="font-bold">RFP Portal</span>
                </div>
              </div>
              <div>
                <div className="text-base leading-6">
                  <span className="text-black opacity-80">Lead Stage</span><br/>
                  <span className="font-bold text-green-800">Qualified</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="flex items-center justify-center mt-8">
          <div className="flex items-center gap-8 max-w-4xl">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-green-700 to-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold">1</span>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-black mb-1">Unlock</h3>
                <p className="text-lg text-black opacity-60">Lorem Ipsum is simply</p>
              </div>
            </div>

            {/* Connector Line */}
            <div className="w-24 h-0.5 bg-gray-300"></div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center relative">
              <div className="bg-gradient-to-r from-green-700 to-green-500 rounded-lg px-16 py-6 relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <span className="text-black text-lg font-bold">2</span>
                  </div>
                </div>
                <div className="ml-8">
                  <h3 className="text-xl font-bold text-white mb-1">Uncover</h3>
                  <p className="text-lg text-white">Lorem Ipsum is simply</p>
                </div>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <svg className="w-11 h-11" viewBox="0 0 44 42" fill="none">
                    <path d="M0.120305 37.5178C0.484609 38.7879 1.26131 39.7174 2.44953 40.3099C3.13717 40.6522 3.86488 40.6939 4.67811 40.6939C13.938 40.6895 22.4061 40.6904 30.0823 40.6957C31.5163 40.6974 32.6885 40.1759 33.5979 39.1338C34.1502 38.4996 34.4717 37.7989 34.5608 37.0353C34.6659 36.1315 33.7182 35.704 33.1196 36.3949C33.0858 36.4339 33.0582 36.4792 33.0404 36.5271C32.9014 36.9031 32.8293 37.3164 32.619 37.6552C32.0499 38.5732 31.2304 39.0318 30.1616 39.0318C14.7379 39.03 6.48003 39.0336 5.3889 39.0398C4.27551 39.046 3.60123 39.0105 3.36608 38.9351C2.28208 38.5848 1.64343 37.6198 1.64343 36.4366C1.6372 27.3481 1.6372 16.5354 1.64165 3.99678C1.64165 2.57146 2.7506 1.6455 4.1508 1.6455C17.5855 1.64905 26.2718 1.64727 30.2088 1.64106C31.3738 1.63929 32.1781 2.07212 32.6235 2.94043C32.8961 3.46993 32.9023 4.02693 32.9023 4.68327C32.9059 11.8391 32.9023 15.5243 32.8907 15.739C32.8889 15.7647 32.8827 15.7904 32.8684 15.8161C32.8506 15.8481 32.8088 15.8578 32.7776 15.8383C27.7771 12.5522 21.3639 14.5389 18.7221 19.763C17.3798 22.4132 17.4581 25.9184 18.7773 28.5348C20.1579 31.2737 22.7062 33.2268 25.6768 33.7864C28.4683 34.3141 30.9899 33.7846 33.2408 32.2015C33.2924 32.1642 33.3655 32.1704 33.4127 32.2156L34.8458 33.625C34.9224 33.6995 34.9545 33.8077 34.9331 33.9124C34.7131 34.974 34.747 35.8769 35.57 36.7C37.1341 38.2637 38.7124 39.8149 40.3024 41.3547C41.2973 42.317 42.7741 42.0199 43.5633 40.9591C44.2652 40.0198 44.0951 38.7719 43.2391 37.9408C42.4009 37.1275 40.811 35.5381 38.4675 33.1718C37.9945 32.6928 37.3915 32.4959 36.7351 32.6183C36.5863 32.6458 36.4723 32.6653 36.3948 32.6769C36.2639 32.6946 36.132 32.6511 36.0385 32.5589L34.6151 31.1584C34.5733 31.1185 34.5733 31.052 34.6116 31.0103C37.3621 28.0426 38.2128 24.0851 36.5391 20.3262C36.0741 19.2805 35.4693 18.3439 34.7274 17.5199C34.6882 17.4765 34.6597 17.425 34.6383 17.3701C34.5528 17.1341 34.51 16.8441 34.5136 16.5C34.535 13.7593 34.543 9.8763 34.5377 4.84912C34.5359 3.90365 34.4584 3.21272 34.3043 2.77812C33.907 1.66324 33.1472 0.844592 32.024 0.321298C31.3435 0.00643427 30.6203 0.000225674 29.799 0.000225674C13.832 0.00288649 5.52073 0.00288649 4.86605 0.000225674C3.46406 -0.0059829 2.40232 0.111093 1.41986 0.953686C0.474811 1.76612 0.00629309 2.8065 0.0143096 4.07837C0.0730969 14.1913 0.0258889 24.713 5.80629e-05 35.8619C-0.00172337 36.677 0.0374682 37.2286 0.120305 37.5178Z" fill="white"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Connector Line */}
            <div className="w-24 h-0.5 bg-gray-300"></div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-green-700 to-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold">3</span>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-black mb-1">Uplift</h3>
                <p className="text-lg text-black opacity-60">Lorem Ipsum is simply</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
