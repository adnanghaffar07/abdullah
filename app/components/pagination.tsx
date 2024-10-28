"use client";
import React, { useState } from "react";

const ProfessionalExperience = () => {
    const experiences = [
        {
            company: "THI (The Home Improvements) – United Kingdom",
            description: "Lead Mobile App Developer & Automation Engineer",
            details: [
                "Developed and maintained mobile apps for Android and iOS using Flutter and Kotlin.",
                "Designed automation frameworks with Cypress and Appium for testing.",
                "Integrated automated test suites into CI/CD pipelines with Jenkins and GitHub Actions.",
                "Collaborated on converting business requirements into automated test cases.",
                "Conducted API testing to validate microservice integration using Postman and RestAssured."
            ],
            timeframe: "April 2020 – August 2024"
        },
        {
            company: "Quizgecko – United Kingdom",
            description: "Mobile App Developer & Automation Engineer",
            details: [
                "Developed high-performance Android and iOS apps using Kotlin and Java.",
                "Integrated AI-driven features, optimizing performance and user experience.",
                "Implemented Agile methodologies, ensuring efficient project delivery.",
                "Streamlined automation processes, boosting development efficiency by 20%.",
                "Conducted testing and maintenance, ensuring compatibility with latest OS updates."
            ],
            timeframe: "July 2018 – March 2020"
        },
        {
            company: "Speechlab – United States",
            description: "Lead Automation Engineer",
            details: [
                "Designed automated workflows with tools like Make.com, Zapier, and Airtable.",
                "Developed API integrations to sync data between apps, cloud services, and platforms.",
                "Led end-to-end automation projects, streamlining CRM and cloud communication.",
                "Optimized automation scripts, improving efficiency and reliability."
            ],
            timeframe: "May 2016 – June 2018"
        },
    ];


    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 4;

    const handleNext = () => {
        if (currentIndex + itemsPerPage < experiences.length) {
            setCurrentIndex(currentIndex + itemsPerPage);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - itemsPerPage);
        }
    };

    return (
        <div
            id="professional"
            className="relative flex flex-col items-center pr-16 pl-16 w-full bg-cover bg-center min-h-[738px] rounded-[60px] max-md:px-5 py-10 md:py-24 max-md:max-w-full"
            style={{ backgroundImage: 'url("/My Services.png")' }}
        >
            <div className="max-w-full text-5xl text-center tracking-tighter leading-none text-gray-50 w-[1299px] max-md:max-w-full max-md:text-4xl">
                <span className="font-medium">Professional </span>
                <span className="font-medium text-[#00A5B6]">Experience</span>
            </div>
            <div className="relative w-full max-w-[1440px] mt-24 h-full">
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 h-full">
                    {experiences
                        .slice(currentIndex, currentIndex + itemsPerPage)
                        .map((exp, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col self-stretch py-7 h-full my-auto rounded-3xl border border-white border-solid backdrop-blur-[7.5px] bg-white bg-opacity-10 min-w-[240px] w-full transition-all duration-500 ease-in-out"
                            >
                                <div className="self-start ml-6 text-xl text-white font-medium max-md:ml-2.5">
                                    {exp.company}
                                </div>
                                <div className="text-sm text-gray-400 ml-6 mt-2">{exp.timeframe}</div>
                                <div className="shrink-0 mt-6 h-px border border-solid border-white border-opacity-50" />
                                <div className="flex flex-col px-6 mt-6 text-white leading-6 max-md:px-5">
                                    <div className="text-lg font-semibold">{exp.description}</div>
                                    <ul className="mt-2.5 list-disc list-inside">
                                        {exp.details.map((detail, detailIdx) => (
                                            <li key={detailIdx}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                </div>

                <div className="hidden md:flex absolute -bottom-20 left-1/2 transform -translate-x-1/2 gap-2 items-center z-0 px-4 py-2.5 rounded-xl border border-solid bg-white bg-opacity-10 border-white border-opacity-10">
                    {[...Array(Math.ceil(experiences.length / itemsPerPage))].map((_, idx) => (
                        <div
                            key={idx}
                            className={`flex shrink-0 self-stretch my-auto w-9 h-2 rounded ${currentIndex / itemsPerPage === idx ? 'bg-white' : 'bg-white bg-opacity-40'
                                }`}
                        />
                    ))}
                </div>

                {currentIndex + itemsPerPage < experiences.length && (
                    <button
                        onClick={handleNext}
                        className="hidden md:flex absolute right-[-32px] top-1/2 transform -translate-y-1/2 z-50 bg-[#00A5B6] text-white rounded-full w-12 h-12 flex items-center justify-center"
                    >
                        <img
                            loading="lazy"
                            src="/arrow-right.png"
                            alt="Next"
                        />
                    </button>
                )}

                {currentIndex > 0 && (
                    <button
                        onClick={handlePrev}
                        className="hidden md:flex absolute left-[-32px] top-1/2 transform -translate-y-1/2 z-50 bg-[#00A5B6] text-white rounded-full w-12 h-12 flex items-center justify-center"
                    >
                        <img
                            loading="lazy"
                            src="/arrow-left.png"
                            alt="Previous"
                        />
                    </button>
                )}
            </div>

            <div className="hidden max-md:flex flex-wrap gap-8 justify-center items-center">
                {experiences.map((exp, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col self-stretch py-7 my-auto rounded-3xl border border-white border-solid backdrop-blur-[7.5px] bg-white bg-opacity-10 min-w-[240px] w-[298px] transition-all duration-500 ease-in-out"
                    >
                        <div className="self-start ml-6 text-xl text-white font-medium max-md:ml-2.5">
                            {exp.company}
                        </div>
                        <div className="text-sm text-gray-400 ml-6 mt-2">{exp.timeframe}</div>
                        <div className="shrink-0 mt-6 h-px border border-solid border-white border-opacity-50" />
                        <div className="flex flex-col px-6 mt-6 text-white leading-6 max-md:px-5">
                            <div>{exp.description}</div>
                            <div className="mt-2.5 w-[250px]">{exp.details}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProfessionalExperience;
