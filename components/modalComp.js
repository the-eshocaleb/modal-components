import { button } from "./compBtn.js"

export const modalComp = (
	titleText = "Default title",
	bodyText = "default body",
	className = ""
) => {
	// create the modal and add important attributes likes tabindex and some classes
	const divElement = document.createElement("div")
	divElement.setAttribute("tabindex", "-1")
	divElement.classList.add("overlay-modal")
	divElement.classList.add("d-none")

	const handleClick = (e) => {
		// evaluate what classes the e (event) contains
	}

	divElement.addEventListener("click", handleClick)

	// create the modal content element (div) with a class "modal-content"

	// create the modal header element (div) with a class "modal-header"
	// this element will also accept a dynamic class that will change its background color
	// see modal.css

	// create a title that accepts text as dynamic data through the titleText param

	
	// evaluate modal body
	// console.log(typeof bodyText)

	if (typeof bodyText === "string") {
		modalBody.innerText = bodyText
	} else {
		modalBody.appendChild(bodyText)
	}

	modalHeader.appendChild(modalTitle)
	modalHeader.appendChild(button("X", handleClick, "btn"))

	const modalFooter = document.createElement("footer")
	modalFooter.classList.add("modal-footer")
	modalFooter.classList.add(className)
	modalFooter.appendChild(button("Close", handleClick, "btn"))

	modalContent.appendChild(modalHeader)
	modalContent.appendChild(modalBody)
	modalContent.appendChild(modalFooter)

	divElement.appendChild(modalContent)

	return divElement
}
