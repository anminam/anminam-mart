const Community = () => {
  return (
    <div className="py-16 px-4 space-y-8">
      {[1, 2, 3, 4, 5, 6].map((_, i) => (
        <div key={i} className="flex flex-col item-start">
          <div className="flex items-center">
            <span className="mr-4 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-800">
              동네질문
            </span>
          </div>
          <div className="mt-2 text-gray-700">
            <span className="text-orange-500 font-medium">Q.</span>{" "}
            블라블라블라??
          </div>
          <div className="mt-5 flex items-center justify-between w-full text-gray-500 font-medium text-xs">
            <span>Anminam</span>
            <span>2시간 전</span>
          </div>
          <div className="flex space-x-5 mt-3 cursor-pointer text-gray-700 py-2.5 border-t border-b-[2px] w-full">
            <span className="flex space-x-2 items-center text-sm">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>궁금해요 2</span>
            </span>
            <span className="flex space-x-2 items-center text-sm">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
              <span>답변 4</span>
            </span>
          </div>
        </div>
      ))}
      <button className="fixed hover:bg-orange-500 transition-colors bottom-24 right-5 bg-orange-400 rounded-full text-white p-4 shadow-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
        </svg>
      </button>
    </div>
  );
};

export default Community;
