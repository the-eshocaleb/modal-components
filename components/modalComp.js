import { button } from "./compBtn.js"

export const modalComp = (
	titleText = "Default title",
	bodyText = "default body",
	className = ""
) => {
	const divElement = document.createElement("div")
	divElement.setAttribute("tabindex", "-1")
	divElement.classList.add("overlay-modal")
	divElement.classList.add("d-none")

	const handleClick = (e) => {
		if (e.target === divElement || e.target.innerText === "X" || e.target.innerText === "Close") {
			divElement.classList.add("d-none")
		}
	}

	divElement.addEventListener("click", handleClick)

	const modalContent = document.createElement("div")
	modalContent.classList.add("modal-content")

	const modalHeader = document.createElement("div")
	modalHeader.classList.add("modal-header")
	if (className) {
		modalHeader.classList.add(className)
	}

	const modalTitle = document.createElement("h2")
	modalTitle.innerText = titleText

	const modalBody = document.createElement("div")
	modalBody.classList.add("modal-body")

	if (typeof bodyText === "string") {
		modalBody.innerText = bodyText
	} else if (bodyText instanceof Node) {
		modalBody.appendChild(bodyText)
	}

	modalHeader.appendChild(modalTitle)
	modalHeader.appendChild(button("X", handleClick, "btn"))

	const modalFooter = document.createElement("footer")
	modalFooter.classList.add("modal-footer")
	if (className) {
		modalFooter.classList.add(className)
	}

	modalFooter.appendChild(button("Close", handleClick, className))

	modalContent.appendChild(modalHeader)
	modalContent.appendChild(modalBody)
	modalContent.appendChild(modalFooter)

	divElement.appendChild(modalContent)

	return divElement
}
