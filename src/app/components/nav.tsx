"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

interface NavigationItem {
	name: string;
	href: string;
	external?: boolean;
}

interface NavigationProps {
	items: NavigationItem[];
}

export const Navigation: React.FC<NavigationProps> = ({ items }) => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b  ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500  border-zinc-800 "
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between gap-8">
						{items.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								target={item.external ? "_blank" : undefined}
								className="duration-200 text-zinc-400 hover:text-zinc-100 animate-fade-in"
							>
								{item.name}
							</Link>
						))}
					</div>

					<Link
						href="/"
						className="duration-200 text-zinc-300 hover:text-zinc-100"
					>
					</Link>
				</div>
			</div>
		</header>
	);
};
