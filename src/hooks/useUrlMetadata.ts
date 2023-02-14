import {useEffect, useState} from 'react'
export function useUrlMetada(html: string) {
	const [content, setContent] = useState('')

	useEffect(() => {
		const parser = new DOMParser();
		const htmlParsed = parser.parseFromString(html, "text/html");
		const metadata: HTMLElement | null = htmlParsed.querySelector(
			'meta[property="og:image"]'
		);
		if (metadata && metadata instanceof HTMLMetaElement) setContent(metadata.content)
	}, [])
  
	return content
}
