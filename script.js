"use strict"
import { button } from "./components/compBtn.js"
import { eclipseComp } from "./components/eclipseComp.js"
import { headerComp } from "./components/headerComp.js"
import { showModal } from "./services/services.js"

// Get the app container
const app = document.getElementById("app")

// Add header
const header = headerComp()
app.appendChild(header)

// Create button container
const buttonContainer = document.createElement("div")
buttonContainer.style.display = "flex"
buttonContainer.style.justifyContent = "center"
buttonContainer.style.gap = "1rem"
buttonContainer.style.marginTop = "2rem"

// Create three buttons for different modals
const primaryButton = button("Open Primary Modal", () => showModal("primary-btn"), "primary-btn")
const secondaryButton = button("Open Secondary Modal", () => showModal("secondary-btn"), "secondary-btn")
const thirdButton = button("Open Image Modal", () => showModal("third-color"), "third-color")

// Add buttons to container
buttonContainer.appendChild(primaryButton)
buttonContainer.appendChild(secondaryButton)
buttonContainer.appendChild(thirdButton)

// Add button container to app
app.appendChild(buttonContainer)

// Add eclipse effect
const eclipse = eclipseComp("primary")
app.appendChild(eclipse)
