const navToggle = document.getElementById("nav-toggle")
const lineOne = document.getElementById("nav-line-1")
const lineTwo = document.getElementById("nav-line-2")
const lineThree = document.getElementById("nav-line-3")
const aside = document.querySelector("aside")
const sections = document.querySelectorAll("section")

hasClickedToggle = false

navToggle.addEventListener("click", function() {
  if (hasClickedToggle === false) {
  lineOne.style.transform = "rotate(135deg)"
  lineOne.style.inset = "50% auto auto auto"
  lineTwo.style.opacity = "0"
  lineThree.style.inset = "50% auto auto auto"
  lineThree.style.transform = "rotate(-135deg)"
  aside.style.transform = "translateX(50%) scaleX(100%)"
  document.body.style.overflowY = "hidden"
  sections.forEach(section => {section.style.filter = "brightness(0.3)"})
  hasClickedToggle = true
} else {
  lineOne.style.transform = "rotate(0deg) translateY(-50%)"
  lineOne.style.inset = "0 auto auto auto"
  lineTwo.style.opacity = "1"
  lineThree.style.inset = "auto auto 0 auto"
  lineThree.style.transform = "rotate(0deg) translateY(50%)"
  aside.style.transform = "translateX(50%) scaleX(0)"
  document.body.style.overflowY = "visible"
  sections.forEach(section => {section.style.filter = "brightness(1)"})
  hasClickedToggle = false
}
})