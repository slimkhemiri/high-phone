import "./Loading.css";
const Loading = () => {
  let color = document.getElementsByTagName('body')[0].style;
const rand = () => Math.floor(Math.random() * 255 + 1);
setTimeout(() => color.cssText = `--paint-color: rgb(${rand()}, ${rand()}, ${rand()})`, 20000);
  return (
   
<div class="load">
  <div class="paint">
 <div class="stroke"></div>
    <h1>High♥Phone</h1>
  </div>
  <div class="roller">
    <div class="roller-top"></div>
    <div class="roller-handle"></div>
  </div>
</div>
  );
};
export default Loading;
