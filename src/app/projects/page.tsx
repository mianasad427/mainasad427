import Projects from '@/pages/Projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Projects - Muhammad Asadullah',
	description: 'View Muhammad Asadullah\'s portfolio of projects including web applications, mobile apps, and software solutions.',
};

export default function ProjectsPage() {
	return <Projects />;
}