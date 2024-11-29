import TextGenerateEffect from './ui/TextGenerateEffect';

const words = `Unleash the power of Margaret <br />—Your intelligent assistant <br /> that's always ready to help.`; 

const TextGenerateEffectDemo = () => {
  return (
    <div className="p-4 sm:mx-[100px] custom-font text-[22px] whitespace-nowrap sm:text-[40px] text-[#2e2e2e]">
      <TextGenerateEffect duration={2} filter={false} words={words} />
    </div>
  );
};

export default TextGenerateEffectDemo;
