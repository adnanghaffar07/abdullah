"use client";
import React, { useState } from 'react';

const ToolsAndTechnologies = () => {
    const categories = [
        {
            title: "Mobile App Development",
            tools: [
                { name: "Flutter", image: "/flutter.svg" },
                { name: "Swift", image: "/swift.svg" },
                { name: "iOS SDK", image: "/ios.svg" },
                { name: "Kotlin", image: "/kotlin.svg" },
                { name: "Android SDK", image: "/android.svg" },
                { name: "React Native", image: "/react.svg" },
           

            ]
        },
        {
            title: "Automation Testing Frameworks",
            tools: [
                { name: "Cypress", image: "/cypress.svg" },
                { name: "Selenium", image: "/selenium.png" },
                { name: "Appium", image: "/appium.svg" },
                { name: "TestNG", image: "/unit1.png" },
                { name: "JUnit", image: "/unit2.png" },
                { name: "Espresso", image: "/espresso.svg" },
            ]
        },
        {
            title: "Performance Testing",
            tools: [
                { name: "Gatling", image: "/gatling.png" },
                { name: "JMeter", image: "/jmeter.svg" },
            ]
        },
        {
            title: "CI/CD Tools",
            tools: [
                { name: "Jenkins", image: "/jenkins.svg" },    
                { name: "GitLab CI", image: "/gitlab.svg" },        
                { name: "CircleCI", image: "/circleci.svg" },        
                { name: "GitHub Actions", image: "/github.svg" },           
                { name: "Bitrise", image: "/bitrise.svg" },        
                        ]
        },
       
        {
            title: "Project Management Tools",
            tools: [
                { name: "Jira ", image: "/jira.svg" },     
                { name: "Asana ", image: "/asana.svg" },     
                { name: "ClickUp ", image: "/clickup.png" },     
                { name: "Trello ", image: "/trello.svg" },     

                      ]
        },
     
    ];

    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0); // Default to the first category

    return (
        <div className="flex overflow-hidden flex-col items-center p-16 w-full max-md:px-5 max-md:max-w-full" id="tools-section">
            <div className="flex flex-col items-center w-full max-w-[1312px] max-md:max-w-full">
                <div className="text-6xl font-semibold tracking-tighter leading-none text-[#00A5B6] max-md:max-w-full max-md:text-4xl">
                    Tools<span className="text-[#171717]"> & </span>Technologies
                </div>

                {/* Category Tabs */}
                <div className="flex overflow-hidden text-[#171717] flex-wrap gap-1.5 justify-center items-center px-1.5 py-2 mt-8 text-xl bg-gray-500 bg-opacity-10 min-h-[67px] rounded-[50px] text-neutral-900 max-md:max-w-full">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveCategoryIndex(index)} // Change active category on click
                            className={`cursor-pointer overflow-hidden px-6 py-3.5 my-auto font-medium tracking-tight rounded-[60px] ${
                                activeCategoryIndex === index
                                    ? 'bg-[#00A5B6] text-white' // Active tab styles
                                    : ' text-black'  // Inactive tab styles with black text
                            }`}
                        >
                            {category.title}
                        </div>
                    ))}
                </div>
            </div>

            {/* Tools Display for the Active Category */}
            <div className="flex flex-col mt-16 max-w-full text-lg leading-none text-center text-zinc-800 w-[612px] max-md:mt-10">
                <div className="flex flex-wrap gap-20 items-start w-full max-md:max-w-full">
                    {categories[activeCategoryIndex].tools.map((tool, idx) => (
                        <div key={idx} className="flex flex-col grow shrink items-center w-[88px]">
                            <img
                                loading="lazy"
                                src={tool.image}
                                className="object-contain h-16"
                                alt={tool.name}
                            />
                            <div className="mt-2.5 leading-7 max-w-[100px] text-sm md:text-lg">{tool.name}</div>
                            
                        </div>
                        
                    ))}
                    
                </div>
                
            </div>
            
        </div>
    );
};

export default ToolsAndTechnologies;
