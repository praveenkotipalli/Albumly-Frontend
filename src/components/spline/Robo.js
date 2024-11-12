import Spline from '@splinetool/react-spline';

export default function App() {
  return (
    <div style={{zIndex:"-1", position:"fixed"}}>
        <div style={{width: '42vw', height: '38vh'}}>
        <Spline scene="https://prod.spline.design/MT3Za50rXB1uYltP/scene.splinecode" />
        </div>
    </div>
  );
}
