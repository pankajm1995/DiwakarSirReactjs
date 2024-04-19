
import './App.css';
import Title from './project/Title';
import Usercard from './project/Usercard';
// import Content from './component/Content';
// import Header from './component/Header';
// import Footer from './component/Footer';
// import Avatar from './props/Avatar';
// import Follow from './props/Follow';

function App() {
  return (
    
    <div className="contain">
      {/* <Header/>
      <Content/>
      <Footer/> */}
       
      {/* <Avatar name={"Pankaj"} url={"https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1713450431~exp=1713451031~hmac=79b15c9f9e772c8b64dc9c6b213f5a54a6f639c73fb636a67c4393a5ea55f09b"} height={100} width={100} />
      <Avatar name={"Rinku"} url={"https://static.vecteezy.com/system/resources/previews/006/487/912/original/hacker-avatar-ilustration-free-vector.jpg"} height={100} width={100} />
      <Avatar name={"Keyur"} url={"https://cdn-icons-png.flaticon.com/512/924/924915.png"} height={100} width={100} />
      <Avatar name={"Alok"} url={"https://cdn.icon-icons.com/icons2/1468/PNG/512/hacker_101114.png"} height={100} width={100} />
     <br/> */}
{/* <Follow name={"Pankaj"} url={"https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"} height={100} width={100}/> */}
<Title/>
<Usercard name={"Pankaj"} avatar={"https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"} post={"42"} followers={"70"} address={"Surat"}/>
    </div>
  );
}

export default App;
