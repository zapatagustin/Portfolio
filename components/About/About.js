import React from "react"
import Image from "next/image"
import profile from "./tuma.jpg"

const About = () => {
    return (
        <div className="container px-4 mx-auto">
            <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12 ">
                    <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                        Buenas!
                    </h1>
                    <div className="mt-6 text-gray-800 dark:text-white">
                        <p className="mb-4">
                            Soy Agustin y soy desarrollador JR y freelancer. Este es mi portafolio web!
                            Este mismo esta hecho con NextJS; un framework de ReactJS que emplea html+css y javascript
                            Tambien estoy usando Tailwind, un "frame" de css para dejar las cosas tan bonitas como las ves. Y como curiosidad,
                            esta pagina utilizara el tema (claro o oscuro) detectando cual usa tu dispositivo!
                        </p>
                    </div>
                </div>
                <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
                    <Image
                        src={profile}
                        alt="Profile"
                        priority={true}
                        className="rounded-full"
                        width={250}
                        height={250}
                        placeholder="blur"
                    />
                </div>
            </div>
        </div>
    )
}

export default About;
