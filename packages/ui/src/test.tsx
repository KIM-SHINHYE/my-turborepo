import "./styles.css";

export const Test = () => {
  return (
    <div>
      <div className="bg-red-400 rounded">
        <p className="text-commonColor">text-commonColor 적용(ui패키지 설정)</p>
      </div>
      <div className="bg-red-500 rounded">
        <p className="text-primary">text-primary 적용(tailwind-config패키지 설정)</p>
      </div>
      <div className="bg-red-600 rounded">pt-10</div>
    </div>
  );
};
