'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen, Award, FileText, ExternalLink, Star } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import Image from 'next/image';
import SEO from '@/components/SEO';

const Education = () => {
	const educationData = [
		{
			school: "GC University Faisalabad",
			location: "Faisalabad, Pakistan",
			duration: "2021 - 2025 (Expected)",
			degree: "Bachelor of Software Engineering (Candidate)",
			grade: "CGPA: 2.95 / 4.0",
			image: "/education/gcuf-old-campus.jpg",
			resultUrl: "/files/education_pdf/gcuf.pdf",
			coursework: [
				"Analysis of Algorithms",
				"Software Design & Architecture",
				"Operating Systems",
				"Database Systems",
				"Distributed Systems",
				"Automata Theory"
			],
			description: "Final year Software Engineering student focusing on scalable systems and software architecture. My studies bridge the gap between rigorous engineering principles and industrial application. I have maintained a specialized focus on modern web stacks and distributed computing.",
			achievement: "Active Lead Instructor at IcodeGuru, facilitating Peer-to-Peer learning for 50+ students."
		},
		{
			school: "Emaan Public Higher secondary School & college",
			location: "75 JB sole, pansera, Faisalabad (BISE)",
			duration: "2019 - 2021",
			degree: "Higher Secondary School Certificate (FSc Pre-Engineering)",
			grade: "Marks: 88.5%",
			image: "/education/punjab group of colleges.jpeg",
			resultUrl: "/files/education_pdf/matric.pdf",
			subjects: [
				"Mathematics",
				"Physics",
				"Chemistry",
				"English",
				"Urdu"
			],
			description: "Completed the Pre-Engineering track with a heavy emphasis on advanced Mathematics and Physics. This period built my analytical foundation, enabling me to solve complex engineering problems during my undergraduate studies.",
			achievement: "Achieved 88.5%, placing in the top tier of students in the BISE Faisalabad board."
		},
		{
			school: "Emaan Public Higher secondary School & college",
			location: "75 JB sole, pansera, Faisalabad (BISE)",
			duration: "2017 - 2019",
			degree: "Secondary School Certificate (Matriculation)",
			grade: "Marks: 85%",
			image: "/education/ahmadpublic.jpeg",
			resultUrl: "/files/education_pdf/secondyear.pdf",
			subjects: [
				"Computer Science",
				"Mathematics",
				"Physics",
				"Chemistry"
			],
			description: "Initial technical training in Computer Science and Mathematics, fostering an early interest in software logic and computational thinking.",
			achievement: "Graduated with 85% in the Science track."
		}
	];

	return (
		<>
			<SEO
				title="Education & Academic Background - Muhammad Asadullah"
				description="View my academic journey including Bachelor of Science in Software Engineering, Intermediate, and Matriculation."
				canonicalUrl="https://portfolio.com/education"
			/>
			<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
				<ScrollAnimation>
					<motion.div
						className="flex items-center gap-3 mb-12"
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
					>
						<GraduationCap className="w-8 h-8" />
						<h2 className="text-4xl font-bold gradient-text">Education</h2>
					</motion.div>
				</ScrollAnimation>

				<div className="space-y-12">
					{educationData.map((edu, index) => (
						<ScrollAnimation key={`${edu.school}-${edu.duration}`}>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: index * 0.2 }}
								className="relative bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all"
							>
								<div className="absolute top-0 right-0 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-bl-xl flex items-center gap-2">
									<Calendar className="w-4 h-4 text-gray-300" />
									<span className="text-gray-300">{edu.duration}</span>
								</div>

								<div className="grid md:grid-cols-[300px,1fr] gap-6">
									{/* Left Column - Image */}
									<div className="relative h-64 md:h-full">
										<Image
											src={edu.image}
											alt={`${edu.school} - ${edu.degree}`}
											fill
											className="object-cover"
											sizes="(max-width: 768px) 100vw, 300px"
											priority={index < 2}
											quality={90}
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
											<div className="p-6">
												<h3 className="text-xl font-bold mb-2">{edu.school}</h3>
												<div className="flex items-center gap-2 text-gray-300 mb-1">
													<MapPin className="w-4 h-4" />
													<span>{edu.location}</span>
												</div>
												<div className="flex items-center gap-2 text-gray-300">
													<Award className="w-4 h-4" />
													<span>{edu.grade}</span>
												</div>
											</div>
										</div>
									</div>

									{/* Right Column - Content */}
									<div className="p-6">
										<div className="flex items-center gap-2 mb-4">
											<BookOpen className="w-5 h-5 text-gray-400" />
											<h4 className="text-lg font-semibold">{edu.degree}</h4>
										</div>

										<div className="flex items-start gap-2 text-gray-300 mb-6">
											<FileText className="w-5 h-5 mt-1 flex-shrink-0" />
											<p className="text-sm leading-relaxed">{edu.description}</p>
										</div>

										{edu.achievement && (
											<div className="mb-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
												<div className="flex items-center gap-2 text-yellow-400">
													<Star className="w-4 h-4" />
													<span className="text-sm font-semibold">Key Achievement:</span>
												</div>
												<p className="text-yellow-300 text-sm mt-1">{edu.achievement}</p>
											</div>
										)}

										{edu.coursework && (
											<div className="mb-6">
												<h5 className="text-sm font-semibold mb-3 text-gray-300">Relevant Coursework:</h5>
												<div className="flex flex-wrap gap-2">
													{edu.coursework.map((course) => (
														<span
															key={course}
															className="px-3 py-1 bg-white/10 rounded-full text-sm"
														>
															{course}
														</span>
													))}
												</div>
											</div>
										)}

										{edu.subjects && (
											<div className="mb-6">
												<h5 className="text-sm font-semibold mb-3 text-gray-300">Subjects:</h5>
												<div className="flex flex-wrap gap-2">
													{edu.subjects.map((subject) => (
														<span
															key={subject}
															className="px-3 py-1 bg-white/10 rounded-full text-sm"
														>
															{subject}
														</span>
													))}
												</div>
											</div>
										)}

										<motion.a
											href={edu.resultUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 hover:bg-white/20 rounded-lg transition-all text-sm font-medium"
											whileHover={{ scale: 1.02 }}
										>
											View Certificate
											<ExternalLink className="w-4 h-4" />
										</motion.a>
									</div>
								</div>
							</motion.div>
						</ScrollAnimation>
					))}
				</div>
			</div>
		</>
	);
};

export default Education;
