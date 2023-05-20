import { useState } from 'react';

export default function Form({ children }) {
	const [email, setEmail] = useState('');
	const [sentEmail, setSentEmail] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();
		if (!sentEmail) {
			const res = await fetch(
				'https://uezouarwtqiugutkmlaa.supabase.co/rest/v1',
				{ method: 'POST' }
			);
			setEmail('');
			setSentEmail(true);
		}
	}

	return (
		<form className="flex flex-col" onSubmit={handleSubmit}>
			<div className="flex items-center -mt-8">
				<input
					className="bg-white w-[18rem] h-14 border-black border-2 font-work-sans text-[#8E8D8D] text-xl pl-6 rounded-none mr-6 focus:outline-none focus:text-black"
					type="email"
					placeholder="Enter your email"
					required
					value={email}
					onChange={e => setEmail(e.target.value)}
					maxLength="255"
				/>
				<button className="flex items-center justify-center bg-primary w-24 h-14 border-black border-2">
					{children}
				</button>
			</div>
			{sentEmail && (
				<span className="font-work-sans text-md text-accent ml-1 mt-2">
					Thank you for joining us!
				</span>
			)}
		</form>
	);
}
