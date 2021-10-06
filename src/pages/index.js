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

      <div>
        <h2>About me</h2>
        <div>
          <div>
            <Image
              src="/my-profile-photo.jpg"
              height={200}
              width={200}
              alt="Angel Padrino"
            />
            <div>
              <p>
                Quis quis consectetur consectetur non qui non magna cupidatat eu
                ea excepteur est. Nostrud sint in cillum mollit magna non
                laboris. Esse ea tempor veniam aute ut duis occaecat irure
                occaecat adipisicing exercitation culpa. In sunt excepteur sit
                ea ea et aliquip ex et ut ad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
