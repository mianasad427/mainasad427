import Experience from '@/pages/Experience';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Experience - Muhammad Asadullah',
	description: 'Muhammad Asadullah\'s professional experience as a Software Developer, including projects and technical expertise.',
};

export default function ExperiencePage() {
	return <Experience />;
}