import Image from "next/image";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Main() {
  return (
    <div>
      <div>
        <Image
          src="/my-profile-photo.jpg"
          height={200}
          width={200}
          alt="Angel Padrino"
        />
        <h1>Hey there! I'm a Fronted Developer</h1>
        <FaInstagram />
        <FaLinkedin />
        <FaGithub />
      </div>
    </div>
  );
}
