import { Disclosure } from '@headlessui/react';
import {
	ChevronDownIcon,
	ChevronDoubleDownIcon,
} from '@heroicons/react/24/outline';
import { useRef } from 'react';

export default function Accordion() {
	const buttonOne = useRef(null);
	const buttonTwo = useRef(null);
	const buttonThree = useRef(null);

	const handleOpenDisclosures = () => {
		buttonOne.current.click();
		buttonTwo.current.click();
		buttonThree.current.click();
	};

	return (
		<div className="flex flex-col min-w-full">
			<Disclosure>
				{({ open }) => (
					<>
						<Disclosure.Button
							className={
								'flex items-center justify-between bg-[#1D1D1D] min-w-full px-7 py-5 border-t-[1px] border-white'
							}
							ref={buttonOne}
						>
							<h3 className="font-work-sans text-xl font-medium text-white">
								Why NFTs?
							</h3>
							<ChevronDownIcon
								className={`h-5 w-5 text-white ${
									open ? 'rotate-180 transform' : ''
								}`}
							/>
						</Disclosure.Button>
						<Disclosure.Panel className="bg-[#1D1D1D] px-7 pb-7">
							<p className="font-work-sans pt-4 border-t-[1px] border-dashed border-white text-white">
								Tokenizing the debt is crucial because it enables multiple users
								to share the associated risks and rewards. It helps distribute
								not only the potential losses but also the profits among users,
								thus reducing the impact of a single champion's failure to repay
								their debt while also providing opportunities for users to
								benefit from successful champions. Additionally, tokenizing the
								debt means that users own the asset and have the option to sell
								it if they want or need to.
							</p>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
			<Disclosure>
				{({ open }) => (
					<>
						<Disclosure.Button
							className={
								'flex items-center justify-between bg-[#1D1D1D] min-w-full px-7 py-5 border-t-[1px] border-white'
							}
							ref={buttonTwo}
						>
							<h3 className="font-work-sans text-xl font-medium text-white">
								What happens if a champion can’t repay their debt on time?
							</h3>
							<ChevronDownIcon
								className={`h-5 w-5 text-white ${
									open ? 'rotate-180 transform' : ''
								}`}
							/>
						</Disclosure.Button>
						<Disclosure.Panel className="bg-[#1D1D1D] px-7 pb-7">
							<p className="font-work-sans pt-4 border-t-[1px] border-dashed border-white text-white">
								If a champion is unable to repay the debt in full, they may
								postpone the payment. However, doing so will incur additional
								interest. It's important to note that postponement has a time
								limit, and the DAO must eventually make a decision on how to
								proceed if a portion of the debt still remains unpaid.
							</p>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
			<Disclosure>
				{({ open }) => (
					<>
						<Disclosure.Button
							className={`flex items-center justify-between bg-[#1D1D1D] min-w-full px-7 py-5 border-t-[1px] border-white text-white ${
								open ? 'border-t-[1px]' : 'border-y-[1px]'
							}`}
							ref={buttonThree}
						>
							<h3 className="font-work-sans text-xl font-medium">
								What are a DAO's options for overdue debt payments?
							</h3>
							<ChevronDownIcon
								className={`h-5 w-5 text-white ${
									open ? 'rotate-180 transform' : ''
								}`}
							/>
						</Disclosure.Button>
						<Disclosure.Panel className="bg-[#1D1D1D] px-7 pb-7 border-b-[1px] border-white">
							<p className="font-work-sans pt-4 border-t-[1px] border-dashed border-white text-white">
								A DAO has two options for overdue debt payments. They can either
								surrender their collateral, allowing users to recoup a portion
								of their investment at the expense of the DAO's future credit
								for champions and impacting its reputation, or settle the
								outstanding debt to maintain the DAO's earned credit.
							</p>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
			<button
				type="button"
				className="flex items-center self-center bg-yagmi-pink border-[1px] border-black py-2 pl-6 pr-5 mt-10"
				onClick={() => handleOpenDisclosures()}
			>
				<span className="font-work-sans font-semibold">See all FAQs</span>
				<ChevronDoubleDownIcon className="pl-2 mt-[2.5px] h-7 w-7" />
			</button>
		</div>
	);
}
