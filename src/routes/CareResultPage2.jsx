// 관리법 검색 결과2(서술형문답)
import { useLocation, useNavigate } from "react-router-dom";
import arrow from "../assets/images/icons/arrow.svg";

const CareResultPage2 = () => {
  const location = useLocation();
  const resultInfo = { ...location.state };
  const navigate = useNavigate();

  let output = resultInfo.result.replace(
    /\*\*(.*?)\*\*/g,
    "<strong>$1</strong>",
  );
  output = output.replace(/\n/g, "<br/>");

  return (
    <div className="w-[1440px] h-[1100px] relative bg-white dark:invert">
      <div className="absolute left-[180px] top-[40px] font-semibold text-[#3f3f3f] text-[40px]">
        질문에 대한 답변이에요:
      </div>
      <div>
        {output && (
          <div className="absolute border-[2px] border-[#d9d9d9] rounded-lg left-[180px] top-[135px] w-[1043px] px-[40px] py-[40px] text-[#3f3f3f] max-h-[700px] overflow-y-auto">
            {/* 텍스트 받아와지는 거 700px 넘어가면 스크롤되게함. */}
            <div dangerouslySetInnerHTML={{ __html: output }} />
          </div>
        )}
        <button
          className="w-[500px] h-[67px] left-[460px] mt-[900px] absolute rounded-3xl border-2 border-neutral-400 justify-center items-center gap-7 inline-flex"
          onClick={() => {
            navigate("/care-search");
          }}
        >
          <div className="h-[30px] justify-center items-center gap-2 flex">
            <div className="text-center text-neutral-400 text-xl font-normal font-['Inter'] leading-tight">
              다시 검색하러 가기
            </div>
            <img
              alt="question mark"
              className="w-[28px] h-[21.97px] relative"
              src={arrow}
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default CareResultPage2;
