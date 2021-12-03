import React from 'react'

const SkillCards = () => {
    return (
<>
<div id="cards" className="relative">
        <div class="container px-5 py-10 mx-auto">
            <div class="relative bg-gray-800 text-gray-50 rounded-xl p-8 space-y-7">
                <div class="h-2 w-60 bg-yellow-400"></div>
                    <div class="text-5xl font-extrabold text-white">Fronend</div>
                <ul class="px-10 list-disc leading-snug text-gray-400">
                    <li>
                        Reactjs - React Native
                    </li>
                    <li>
                        Javascript - Typescript
                    </li>
                    <li>
                        HTML, CSS
                    </li>
                </ul>
            </div>
        </div>

        <div class="container px-5 py-10 mx-auto">
            <div class="relative bg-gray-800 text-gray-50 rounded-xl p-8 space-y-7">
                <div class="h-2 w-20 bg-yellow-400"></div>
                    <div class="text-5xl font-extrabold text-white">Backend</div>
                <ul class="list-disc leading-snug text-gray-400">
                <ul class="px-10 list-disc leading-snug text-gray-400">
                    <li>
                        Python
                    </li>
                    <li>
                        SQL/NOSQL
                    </li>
                    <li>
                        NodeJS
                    </li>
                    <li>
                        gnu-linux
                    </li>
                </ul>
                </ul>
            </div>
        </div>
</div>
</>
)}

export default SkillCards
