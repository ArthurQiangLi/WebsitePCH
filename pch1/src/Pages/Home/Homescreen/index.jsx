import Courses from "../Courses";
import HeroSection from "../HeroSection";
import Lessons from "../Lessons";
import Music from "../Music";
import Postboard from "../Postboard";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Courses />
      <Lessons />
      <Postboard />
      <Music />
    </>
  );
}
