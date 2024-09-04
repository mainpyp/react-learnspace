import './App.css';
import Card from './Card';

function App() {
  const mySkills = {java: ["😐", "green"], python: ["🐍", "blue"], css_hello_world: ["🚀", "black"], prima_ballerina: ["🩰", "navy"]}
  const myProps = {imgPath: "/me_lol.jpg", title: "Adrian", content: "Hallo ich heiße Adrian.", skills: mySkills};
  const sentaSkills = {writing: ["🤓", "black"], züz_zein: ["🎂", "grey"]}
  const sentaProps = {imgPath: "/senta_lol.jpg", title: "Senta", content: "Hallo ich heiße Senta", skills: sentaSkills}
  return (
    <div className='app-div'>
      <Card {...sentaProps} />
      <Card {...myProps} />
      <Card {...sentaProps} />
    </div>
  );
}

export default App;
