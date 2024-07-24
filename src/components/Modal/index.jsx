import React from "react";
import loadingIcon1 from "../../assets/images/icons/machine-dry.png";
import loadingIcon2 from "../../assets/images/icons/petroleum.png";
import loadingIcon3 from "../../assets/images/icons/bleach.png";

const Loading = ({ isLoading }) => {
  return (
    <div
      style={{
        display: isLoading ? "block" : "none",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.35)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "30px",
          maxWidth: "100%",
          maxHeight: "90%",
          overflowY: "auto",
          backgroundColor: "white",
        }}
      >
        <div className="w-[489px] h-[238px] py-[42px] bg-white/opacity-95 rounded-[30px] shadow flex-col justify-center items-center gap-2.5 inline-flex">
          <div className="h-[91px] flex-col justify-start items-start gap-5 flex">
            <div className="w-[265px] opacity-60 justify-start items-center gap-20 inline-flex">
              <img className="w-[35px] h-[35px] shadow" src={loadingIcon1} />
              <img className="w-[35px] h-[35px] shadow" src={loadingIcon2} />
              <img className="w-[42.30px] h-[35px] shadow" src={loadingIcon3} />
            </div>
            <div className="self-stretch text-center text-neutral-500 text-3xl font-normal font-['Inter']">
              기호를 분석 중이에요!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RecogFail = ({ RecogFail }) => {
  return (
    <div
      style={{
        display: RecogFail ? "block" : "none",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.35)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "30px",
          maxWidth: "100%",
          maxHeight: "90%",
          overflowY: "auto",
          backgroundColor: "white",
        }}
      >
        <div className="w-[689px] h-[361px] px-[107px] py-[50px] bg-white/opacity-95 rounded-[30px] shadow flex-col justify-center items-center gap-[50px] inline-flex">
          <div className="w-[548px] h-[72px] relative">
            <div className="left-0 top-0 absolute text-center text-neutral-500 text-3xl font-normal font-['Inter']">
              이미지 인식에 실패했어요.
              <br />
              다시 시도하시거나, 기호를 직접 그려보세요.
            </div>
            <div className="w-[25px] h-[25px] left-[446px] top-[4px] absolute"></div>
          </div>
          <div className="w-[367px] h-[67px] px-[133px] py-[18px] bg-zinc-400 rounded-lg flex-col justify-center items-center gap-2.5 flex">
            <div className="justify-start items-center gap-[15px] inline-flex">
              <div className="w-[30px] h-[30px] relative" />
              <div className="text-center text-white text-xl font-normal font-['Inter'] leading-tight">
                다시 업로드하러 가기
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Loading, RecogFail };
