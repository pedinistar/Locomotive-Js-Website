let tl = gsap.timeline()

tl.to(".y-one", {
  top: "-100%",
  delay: 0.5,
  duration: 0.7,
  ease: "expo.out"
})

tl.from(".y-two",{
  top: "100%",
  delay: 0.6,
  duration: 0.7,
  ease: "expo.out"
},"anime")

tl.to(".loader h1",{
  delay: 0.5,
  duration: 0.7,
  color: "black"
},"anime")

tl.to(".loader",{
  opacity: 0
})