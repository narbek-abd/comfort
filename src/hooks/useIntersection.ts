import { RefObject, useEffect } from "react";

const useIntersection = (refElem: RefObject<Element>, callback: () => void) => {
	const options = {
		root: null as any,
		rootMargin: "0px",
		threshold: 0,
	};

	function checkEntry(entry: IntersectionObserverEntry[]) {
		if (entry[0].isIntersecting) {
			callback();
		}
	}
	useEffect(() => {
		const observer = new IntersectionObserver(checkEntry, options);
		if (refElem.current) observer.observe(refElem.current);

		return () => {
			observer.disconnect();
		};
	}, [refElem]);
};

export default useIntersection;
