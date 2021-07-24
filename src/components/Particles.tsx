import React from "react";
import ParticlesBg from "particles-bg";
import "../styles/Particles.css";

const Particles = ({ c, n }: { c: string; n: number }) => (
  <div className="particles">
    <ParticlesBg type="cobweb" color={c} num={n} />
  </div>
);

export default Particles;
