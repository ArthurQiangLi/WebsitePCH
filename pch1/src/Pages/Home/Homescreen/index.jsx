import Courses from "../Courses";
import HeroSection from "../HeroSection";
import Lessons from "../Lessons";
import Music from "../Music";
import Navbar from "../Navbar";
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
