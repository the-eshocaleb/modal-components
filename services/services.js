import { modalComp } from "../components/modalComp.js"

/**
 *
 * @param {string} className // three names "primary-btn" | "secondary-btn" | "third-color"
 * @returns {void}
 */

export const showModal = (className) => {
	// First, remove any existing modal
	const existingModal = document.querySelector('.overlay-modal');
	if (existingModal) {
		existingModal.remove();
	}

	let modalBody = document.createElement("div")
	let modalTitle = "Modal Title"

	if (className === "secondary-btn") {
		modalTitle = "Some other cool title"
		modalBody.innerText = "This is another text of the body."
	}
	
	if (className === "primary-btn") {
		modalTitle = "Primary Modal"
		modalBody.innerText = "This is a primary modal with custom content."
	}
	
	if (className === "third-color") {
		modalTitle = "Mountain View"
		const title = document.createElement("h3")
		title.innerText = "Beautiful Mountain"
		
		const img = document.createElement("img")
		img.src = "./assets/mountain.jpeg"
		img.alt = "Mountain view"
		
		modalBody.appendChild(title)
		modalBody.appendChild(img)
	}

	const app = document.getElementById("app")
	app.appendChild(modalComp(modalTitle, modalBody, className))
	
	const modal = document.querySelector(".overlay-modal")
	modal.classList.remove("d-none")
}
