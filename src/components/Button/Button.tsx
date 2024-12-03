import { ButtonProps } from "../../types/components";

export const Button = ({ text, redirect }: ButtonProps) => {
    return (
        /* From Uiverse.io by pruthivithejan */ 
<div className="flex justify-center items-center gap-12 h-full">
  <div
    className="bg-gradient-to-b from-stone-300/40 to-transparent p-[4px] rounded-[16px]"
  >
    <button
      className="group p-[4px] rounded-[12px] bg-gradient-to-b from-white to-stone-200/40 shadow-[0_1px_3px_rgba(0,0,0,0.5)] active:shadow-[0_0px_1px_rgba(0,0,0,0.5)] active:scale-[0.995]"
    >
      <div
        className="bg-gradient-to-b from-stone-200/40 to-white/80 rounded-[8px] px-2 py-2"
      >
        <div className="flex gap-2 items-center">
          <a href={redirect}><span className="font-semibold">{text}</span></a>
        </div>
      </div>
    </button>
  </div>
</div>

    );
}