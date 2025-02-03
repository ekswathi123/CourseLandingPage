import Header from "../components/Header";
const FlourishChart = () => {
    const embedCode = `
      <div class="flourish-embed flourish-chart" data-src="visualisation/21261224"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/21261224/thumbnail" width="100%" alt="chart visualization" /></noscript></div>
    `;
  
    return (
      <>
      <div>
        <Header/>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div>  <p className="text-xl font-extrabold text-indigo-400 animate-blink ">
        Join the leading community of Learners now!</p></div>
        <style>
  {`
    @keyframes blink {
      0% { opacity: 1; }
      50% { opacity: 0; }
      100% { opacity: 1; }
    }
    .animate-blink {
      animation: blink 1s infinite;
    }
  `}
</style>

      <div
        dangerouslySetInnerHTML={{ __html: embedCode }}
        style={{ width: "50%", height: "200px" }}
      ></div>
      </div>
     
      </>

    );
};
export default FlourishChart;