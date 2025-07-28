import { motion } from 'framer-motion';
import { Download, Star, Shield, Gift, Trophy, Users, ChevronRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useParams } from 'react-router-dom';

const allApps = [
	{
		id: 'hi-rummy',
		name: 'Hi Rummy',
		icon: '🎮',
		rating: 4.5,
		downloads: '100K+',
		bonus: '₹50',
		minWithdrawal: '₹100',
		category: 'Card Game',
		verified: true,
		featured: true,
		downloadLink: 'https://allyonoapp.in/download/hi-rummy',
		detailLink: '/app/hi-rummy',
	},
	{
		id: 'jaiho-win',
		name: 'Jaiho Win',
		icon: '🎮',
		rating: 4.6,
		downloads: '150K+',
		bonus: '₹500',
		minWithdrawal: '₹100',
		category: 'Gaming',
		verified: true,
		featured: true,
		downloadLink: 'https://allyonoapp.in/download/jaiho-win',
		detailLink: '/app/jaiho-win',
	},
	{
		id: 'ind-club',
		name: 'Ind Club',
		icon: '🎮',
		rating: 4.4,
		downloads: '80K+',
		bonus: '₹500',
		minWithdrawal: '₹100',
		category: 'Gaming',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/ind-club',
		detailLink: '/app/ind-club',
	},
	{
		id: 'top-rummy',
		name: 'Top Rummy',
		icon: '🎮',
		rating: 4.7,
		downloads: '200K+',
		bonus: '₹50',
		minWithdrawal: '₹100',
		category: 'Card Game',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/top-rummy',
		detailLink: '/app/top-rummy',
	},
	{
		id: 'yn-777',
		name: 'Yn 777',
		icon: '🎮',
		rating: 4.3,
		downloads: '70K+',
		bonus: '₹38',
		minWithdrawal: '₹100',
		category: 'Casino',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/yn-777',
		detailLink: '/app/yn-777',
	},
	{
		id: 'ind-rummy',
		name: 'Ind Rummy',
		icon: '🎮',
		rating: 4.5,
		downloads: '120K+',
		bonus: '₹60',
		minWithdrawal: '₹100',
		category: 'Card Game',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/ind-rummy',
		detailLink: '/app/ind-rummy',
	},
	{
		id: 'jaiho-slots',
		name: 'Jaiho Slots',
		icon: '🎮',
		rating: 4.2,
		downloads: '90K+',
		bonus: '₹20-300',
		minWithdrawal: '₹100',
		category: 'Casino',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/jaiho-slots',
		detailLink: '/app/jaiho-slots',
	},
	{
		id: 'teen-patti-master',
		name: 'Teen Patti Master',
		icon: '🎮',
		rating: 4.8,
		downloads: '250K+',
		bonus: '₹50',
		minWithdrawal: '₹100',
		category: 'Card Game',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/teen-patti-master',
		detailLink: '/app/teen-patti-master',
	},
	{
		id: 'saga-slots',
		name: 'Saga Slots',
		icon: '🎮',
		rating: 4.1,
		downloads: '60K+',
		bonus: '₹40',
		minWithdrawal: '₹100',
		category: 'Casino',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/saga-slots',
		detailLink: '/app/saga-slots',
	},
	{
		id: 'abc-rummy',
		name: 'ABC RUMMY',
		icon: '🎮',
		rating: 4.6,
		downloads: '130K+',
		bonus: '₹128',
		minWithdrawal: '₹100',
		category: 'Card Game',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/abc-rummy',
		detailLink: '/app/abc-rummy',
	},
	{
		id: 'winzo-gold',
		name: 'Winzo Gold',
		icon: '🎮',
		rating: 4.9,
		downloads: '500K+',
		bonus: '₹500',
		minWithdrawal: '₹10',
		category: 'Gaming',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/winzo-gold',
		detailLink: '/app/winzo-gold',
	},
	{
		id: 'jaiho-777',
		name: 'Jaiho 777',
		icon: '🎮',
		rating: 4.7,
		downloads: '180K+',
		bonus: '₹128',
		minWithdrawal: '₹100',
		category: 'Casino',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/jaiho-777',
		detailLink: '/app/jaiho-777',
	},
	{
		id: 'rummy-91',
		name: 'Rummy 91',
		icon: '🎮',
		rating: 4.5,
		downloads: '110K+',
		bonus: '₹191',
		minWithdrawal: '₹100',
		category: 'Card Game',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/rummy-91',
		detailLink: '/app/rummy-91',
	},
	{
		id: 'jaiho-spin',
		name: 'Jaiho Spin',
		icon: '🎮',
		rating: 4.3,
		downloads: '75K+',
		bonus: '₹100',
		minWithdrawal: '₹100',
		category: 'Casino',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/jaiho-spin',
		detailLink: '/app/jaiho-spin',
	},
	{
		id: 'jaiho-rummy',
		name: 'Jaiho Rummy',
		icon: '🎮',
		rating: 4.6,
		downloads: '140K+',
		bonus: '₹50',
		minWithdrawal: '₹100',
		category: 'Card Game',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/jaiho-rummy',
		detailLink: '/app/jaiho-rummy',
	},
	{
		id: 'jaiho-arcade',
		name: 'Jaiho Arcade',
		icon: '🎮',
		rating: 4.4,
		downloads: '85K+',
		bonus: '₹150',
		minWithdrawal: '₹100',
		category: 'Arcade',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/jaiho-arcade',
		detailLink: '/app/jaiho-arcade',
	},
	{
		id: 'slots-spin',
		name: 'Slots Spin',
		icon: '🎮',
		rating: 4.2,
		downloads: '65K+',
		bonus: '₹30',
		minWithdrawal: '₹100',
		category: 'Casino',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/slots-spin',
		detailLink: '/app/slots-spin',
	},
	{
		id: 'bet-213',
		name: 'Bet 213',
		icon: '🎮',
		rating: 4.3,
		downloads: '70K+',
		bonus: '₹47',
		minWithdrawal: '₹100',
		category: 'Betting',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/bet-213',
		detailLink: '/app/bet-213',
	},
	{
		id: 'mwm-bet',
		name: 'Mwm Bet',
		icon: '🎮',
		rating: 4.1,
		downloads: '55K+',
		bonus: '₹53',
		minWithdrawal: '₹100',
		category: 'Betting',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/mwm-bet',
		detailLink: '/app/mwm-bet',
	},
	{
		id: 'en-365',
		name: 'En 365',
		icon: '🎮',
		rating: 4.5,
		downloads: '120K+',
		bonus: '₹238',
		minWithdrawal: '₹100',
		category: 'Gaming',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/en-365',
		detailLink: '/app/en-365',
	},
	{
		id: 'spin-winner',
		name: 'Spin Winner',
		icon: '🎮',
		rating: 4.2,
		downloads: '60K+',
		bonus: '₹25',
		minWithdrawal: '₹100',
		category: 'Casino',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/spin-winner',
		detailLink: '/app/spin-winner',
	},
	{
		id: 'yono-777',
		name: 'Yono 777',
		icon: '🎮',
		rating: 4.6,
		downloads: '150K+',
		bonus: '₹77',
		minWithdrawal: '₹100',
		category: 'Casino',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/yono-777',
		detailLink: '/app/yono-777',
	},
	{
		id: 'spin-gold',
		name: 'Spin Gold',
		icon: '🎮',
		rating: 4.3,
		downloads: '80K+',
		bonus: '₹37',
		minWithdrawal: '₹100',
		category: 'Casino',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/spin-gold',
		detailLink: '/app/spin-gold',
	},
	{
		id: 'yono-all-games',
		name: 'Yono All Games',
		icon: '🎮',
		rating: 4.8,
		downloads: '300K+',
		bonus: '₹1550',
		minWithdrawal: '₹100',
		category: 'Gaming',
		verified: true,
		featured: true,
		downloadLink: 'https://allyonoapp.in/download/yono-all-games',
		detailLink: '/app/yono-all-games',
	},
	{
		id: 'gogo-rummy',
		name: 'Gogo Rummy',
		icon: '🎮',
		rating: 4.4,
		downloads: '90K+',
		bonus: '₹30',
		minWithdrawal: '₹100',
		category: 'Card Game',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/gogo-rummy',
		detailLink: '/app/gogo-rummy',
	},
	{
		id: 'yono-vip',
		name: 'Yono Vip',
		icon: '🎮',
		rating: 4.7,
		downloads: '180K+',
		bonus: '₹105',
		minWithdrawal: '₹100',
		category: 'Gaming',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/yono-vip',
		detailLink: '/app/yono-vip',
	},
	{
		id: 'yono-winner',
		name: 'Yono Winner',
		icon: '🎮',
		rating: 4.6,
		downloads: '160K+',
		bonus: '₹550',
		minWithdrawal: '₹100',
		category: 'Gaming',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/yono-winner',
		detailLink: '/app/yono-winner',
	},
	{
		id: '789-jackpots',
		name: '789 Jackpots',
		icon: '🎮',
		rating: 4.3,
		downloads: '75K+',
		bonus: '₹29',
		minWithdrawal: '₹100',
		category: 'Casino',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/789-jackpots',
		detailLink: '/app/789-jackpots',
	},
	{
		id: 'mbm-bet',
		name: 'Mbm Bet',
		icon: '🎮',
		rating: 4.2,
		downloads: '60K+',
		bonus: '₹50',
		minWithdrawal: '₹100',
		category: 'Betting',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/mbm-bet',
		detailLink: '/app/mbm-bet',
	},
	{
		id: 'ind-slots',
		name: 'Ind Slots',
		icon: '🎮',
		rating: 4.1,
		downloads: '50K+',
		bonus: '₹30',
		minWithdrawal: '₹100',
		category: 'Casino',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/ind-slots',
		detailLink: '/app/ind-slots',
	},
	{
		id: 'yono-slots',
		name: 'Yono Slots',
		icon: '🎮',
		rating: 4.4,
		downloads: '95K+',
		bonus: '₹25',
		minWithdrawal: '₹100',
		category: 'Casino',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/yono-slots',
		detailLink: '/app/yono-slots',
	},
	{
		id: 'bingo-101',
		name: 'Bingo 101',
		icon: '🎮',
		rating: 4.3,
		downloads: '70K+',
		bonus: '₹20',
		minWithdrawal: '₹100',
		category: 'Bingo',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/bingo-101',
		detailLink: '/app/bingo-101',
	},
	{
		id: 'rummy-365',
		name: 'Rummy 365',
		icon: '🎮',
		rating: 4.5,
		downloads: '120K+',
		bonus: '₹28',
		minWithdrawal: '₹100',
		category: 'Card Game',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/rummy-365',
		detailLink: '/app/rummy-365',
	},
	{
		id: 'spin-crush',
		name: 'Spin Crush',
		icon: '🎮',
		rating: 4.2,
		downloads: '65K+',
		bonus: '₹30',
		minWithdrawal: '₹100',
		category: 'Casino',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/spin-crush',
		detailLink: '/app/spin-crush',
	},
	{
		id: 'slots-winner',
		name: 'Slots Winner',
		icon: '🎮',
		rating: 4.4,
		downloads: '85K+',
		bonus: '₹100',
		minWithdrawal: '₹100',
		category: 'Casino',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/slots-winner',
		detailLink: '/app/slots-winner',
	},
	{
		id: 'spin-101',
		name: 'Spin 101',
		icon: '🎮',
		rating: 4.3,
		downloads: '75K+',
		bonus: '₹38',
		minWithdrawal: '₹100',
		category: 'Casino',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/spin-101',
		detailLink: '/app/spin-101',
	},
	{
		id: 'ind-vip',
		name: 'Ind Vip',
		icon: '🎮',
		rating: 4.6,
		downloads: '140K+',
		bonus: '₹550',
		minWithdrawal: '₹100',
		category: 'Gaming',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/ind-vip',
		detailLink: '/app/ind-vip',
	},
	{
		id: '567-slots',
		name: '567 Slots',
		icon: '🎮',
		rating: 4.2,
		downloads: '60K+',
		bonus: '₹67',
		minWithdrawal: '₹100',
		category: 'Casino',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/567-slots',
		detailLink: '/app/567-slots',
	},
	{
		id: 'yono-arcade',
		name: 'Yono Arcade',
		icon: '🎮',
		rating: 4.3,
		downloads: '70K+',
		bonus: '₹27',
		minWithdrawal: '₹100',
		category: 'Arcade',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/yono-arcade',
		detailLink: '/app/yono-arcade',
	},
	{
		id: 'rummy-420',
		name: 'Rummy 420',
		icon: '🎮',
		rating: 4.5,
		downloads: '110K+',
		bonus: '₹551',
		minWithdrawal: '₹100',
		category: 'Card Game',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/rummy-420',
		detailLink: '/app/rummy-420',
	},
	{
		id: 'yono-games',
		name: 'Yono Games',
		icon: '🎮',
		rating: 4.4,
		downloads: '90K+',
		bonus: '₹40',
		minWithdrawal: '₹100',
		category: 'Gaming',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/yono-games',
		detailLink: '/app/yono-games',
	},
	{
		id: 'teen-patti-live',
		name: 'Teen Patti Live',
		icon: '🎮',
		rating: 4.7,
		downloads: '180K+',
		bonus: '₹36',
		minWithdrawal: '₹100',
		category: 'Card Game',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/teen-patti-live',
		detailLink: '/app/teen-patti-live',
	},
	{
		id: 'spin-777',
		name: 'Spin 777',
		icon: '🎮',
		rating: 4.3,
		downloads: '75K+',
		bonus: '₹29',
		minWithdrawal: '₹100',
		category: 'Casino',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/spin-777',
		detailLink: '/app/spin-777',
	},
	{
		id: 'spin-lucky',
		name: 'Spin Lucky',
		icon: '🎮',
		rating: 4.2,
		downloads: '60K+',
		bonus: '₹30',
		minWithdrawal: '₹100',
		category: 'Casino',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/spin-lucky',
		detailLink: '/app/spin-lucky',
	},
	{
		id: 'ind-bingo',
		name: 'Ind Bingo',
		icon: '🎮',
		rating: 4.3,
		downloads: '70K+',
		bonus: '₹50',
		minWithdrawal: '₹100',
		category: 'Bingo',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/ind-bingo',
		detailLink: '/app/ind-bingo',
	},
	{
		id: 'my-777',
		name: 'My 777',
		icon: '🎮',
		rating: 4.1,
		downloads: '55K+',
		bonus: '₹21',
		minWithdrawal: '₹100',
		category: 'Casino',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/my-777',
		detailLink: '/app/my-777',
	},
	{
		id: 'mdm-bet',
		name: 'Mdm Bet',
		icon: '🎮',
		rating: 4.2,
		downloads: '60K+',
		bonus: '₹30',
		minWithdrawal: '₹100',
		category: 'Betting',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/mdm-bet',
		detailLink: '/app/mdm-bet',
	},
	{
		id: '101-z',
		name: '101 Z',
		icon: '🎮',
		rating: 4.0,
		downloads: '50K+',
		bonus: '₹28',
		minWithdrawal: '₹100',
		category: 'Casino',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/101-z',
		detailLink: '/app/101-z',
	},
	{
		id: 'mkm-bet',
		name: 'Mkm Bet',
		icon: '🎮',
		rating: 4.2,
		downloads: '60K+',
		bonus: '₹99',
		minWithdrawal: '₹100',
		category: 'Betting',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/mkm-bet',
		detailLink: '/app/mkm-bet',
	},
	{
		id: 'teen-patti-bliss',
		name: 'Teen Patti Bliss',
		icon: '🎮',
		rating: 4.5,
		downloads: '80K+',
		bonus: '₹50',
		minWithdrawal: '₹100',
		category: 'Card Game',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/teen-patti-bliss',
		detailLink: '/app/teen-patti-bliss',
	},
	{
		id: 'yono-rummy',
		name: 'Yono Rummy',
		icon: '🎮',
		rating: 4.4,
		downloads: '90K+',
		bonus: '₹27',
		minWithdrawal: '₹100',
		category: 'Card Game',
		verified: true,
		downloadLink: 'https://allyonoapp.in/download/yono-rummy',
		detailLink: '/app/yono-rummy',
	},
];

const getAppField = (app, field, fallback = '') => app[field] || fallback;

const starIcons = (rating) => {
	const fullStars = Math.floor(rating);
	const halfStar = rating % 1 >= 0.5;
	const stars = [];
	for (let i = 0; i < fullStars; i++) stars.push('★');
	if (halfStar) stars.push('☆');
	while (stars.length < 5) stars.push('☆');
	return stars.join(' ');
};

const AppDetail = () => {
	const { slug } = useParams();
	const appData = allApps.find((app) => app.id === slug);
	if (!appData) {
		return (
			<div className="min-h-screen flex items-center justify-center text-2xl font-bold">
				App Not Found
			</div>
		);
	}

	// Fallbacks for missing fields
	const icon = getAppField(appData, 'icon', '🎮');
	const name = getAppField(appData, 'name', 'App Name');
	const subtitle = getAppField(appData, 'subtitle', 'Yono App');
	// Use 'verified' for trusted badge
	const trusted = appData.verified ?? false;
	const rating = Number(getAppField(appData, 'rating', '4.4'));
	const reviews = Number(getAppField(appData, 'reviews', '18777'));
	const pegi = getAppField(appData, 'pegi', '18');
	const downloads = getAppField(appData, 'downloads', '100K+');
	const appSize = getAppField(appData, 'appSize', '50-100MB');
	const androidVersion = getAppField(appData, 'androidVersion', '5.0+');
	const bonus = getAppField(appData, 'bonus', '₹0');
	const minWithdrawal = getAppField(appData, 'minWithdrawal', '₹100');
	const downloadLink = getAppField(appData, 'downloadLink', '#');

	// Related apps (pick 5 others)
	const relatedApps = allApps.filter((app) => app.id !== appData.id).slice(0, 5);

	return (
		<div className="min-h-screen bg-gray-50 mt-6">
			<Navbar />
			{/* Main App Detail Section */}
			<div className="w-full px-2 sm:px-4 md:px-8 py-4 mt-12">
				<div className="w-full bg-white rounded-xl shadow-lg p-4 md:p-8">
					{/* Header Row */}
					<div className="flex items-center gap-4 mb-4">
						<div className="w-20 h-20 rounded-xl overflow-hidden flex items-center justify-center bg-white border shadow">
							{icon.startsWith('http') ? (
								<img
									src={icon}
									alt={name}
									className="w-full h-full object-contain"
								/>
							) : (
								<span className="text-5xl">{icon}</span>
							)}
						</div>
						<div className="flex-1 min-w-0">
							<div className="flex items-center gap-2 flex-wrap">
								<h1 className="text-2xl md:text-3xl font-bold text-black leading-tight">
									{name}
								</h1>
								{trusted && (
									<span className="ml-2 px-2 py-0.5 text-xs bg-green-100 text-green-700 rounded font-semibold">
										Trusted
									</span>
								)}
							</div>
							<div className="text-gray-600 text-base font-medium mt-1">
								{subtitle}
							</div>
						</div>
					</div>
					{/* Stats Row */}
					<div className="flex flex-wrap justify-center gap-10 md:gap-16 mt-2 mb-2">
						<div className="flex flex-col items-center">
							<span className="text-lg md:text-xl font-bold">{downloads}</span>
							<span className="text-xs md:text-sm text-gray-500">
								Downloads
							</span>
						</div>
						<div className="flex flex-col items-center">
							<span className="text-lg md:text-xl font-bold">{appSize}</span>
							<span className="text-xs md:text-sm text-gray-500">App Size</span>
						</div>
						<div className="flex flex-col items-center">
							<span className="text-lg md:text-xl font-bold">{androidVersion}</span>
							<span className="text-xs md:text-sm text-gray-500">
								Android Version
							</span>
						</div>
					</div>
					{/* Rating, PEGI, Reviews */}
					<div className="flex flex-wrap justify-center items-center gap-4 mt-2 mb-4">
						<div className="flex items-center text-yellow-500 text-lg font-bold">
							<span>{rating}</span>
							<span className="ml-1">{starIcons(rating)}</span>
							<span className="ml-2 text-black text-sm font-normal">
								({reviews.toLocaleString()} Reviews)
							</span>
						</div>
						<span className="px-2 py-0.5 bg-red-100 text-red-700 rounded text-xs font-bold">
							PEGI-{pegi}
						</span>
					</div>
					{/* Download Bar */}
					<div className="bg-green-600 rounded-lg mt-4 mb-6">
						<a
							href={downloadLink}
							target="_blank"
							rel="noopener noreferrer"
							className="block w-full"
						>
							<div className="flex items-center justify-center py-4">
								<span className="text-white text-lg md:text-xl font-bold flex items-center">
									<svg
										className="w-5 h-5 mr-2"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
										/>
									</svg>
									DOWNLOAD
								</span>
							</div>
						</a>
					</div>
					{/* Bonus & Min Withdrawal */}
					<div className="flex flex-wrap gap-8 items-center mb-2 pl-2">
						<div className="flex items-center text-red-600 font-semibold text-base md:text-lg">
							<span className="mr-1">🎁</span> Sign Up Bonus {bonus}
						</div>
						<div className="flex items-center text-green-700 font-semibold text-base md:text-lg">
							<span className="mr-1">🏦</span> Min. Withdrawal {minWithdrawal}
						</div>
					</div>
				</div>
			</div>
			{/* Related Apps Section */}
			<div className="w-full px-2 sm:px-4 md:px-8 mt-6">
				<div className="w-full bg-white rounded-xl shadow p-4">
					<div className="flex items-center mb-2">
						<div className="flex-1 h-1 rounded bg-cyan-400/80" />
						<span className="mx-2 text-lg font-bold text-cyan-900">
							Other Related Apps
						</span>
						<div className="flex-1 h-1 rounded bg-cyan-400/80" />
					</div>
					{relatedApps.map((app, idx) => (
						<div
							key={app.id}
							className="flex items-center py-3 border-b last:border-b-0"
						>
							<div className="w-10 h-10 rounded overflow-hidden flex items-center justify-center bg-gray-100 mr-3">
								{app.icon.startsWith('http') ? (
									<img
										src={app.icon}
										alt={app.name}
										className="w-full h-full object-contain"
									/>
								) : (
									<span className="text-2xl">{app.icon}</span>
								)}
							</div>
							<div className="flex-1 min-w-0">
								<div className="font-semibold text-black text-base truncate">
									{app.name}
								</div>
								<div className="text-xs text-gray-500 truncate">
									Sign Up Bonus {app.bonus} | Min. Withdrawal{' '}
									{app.minWithdrawal}
								</div>
							</div>
							<a href={`/apps/${app.id}`} className="ml-2">
								<button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded font-semibold text-sm flex items-center">
									<svg
										className="w-4 h-4 mr-1"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
										/>
									</svg>
									Download
								</button>
							</a>
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default AppDetail;